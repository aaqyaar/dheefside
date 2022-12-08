import { AUTH_LOCAL_STORAGE } from "constants/app-constants";
import { createContext, useContext, useEffect, useReducer } from "react";
import { setSession, isValidToken } from "utils/jwt";
import {
  AuthData,
  useLoginMutation,
  User as UserTypes,
  useRegisterMutation,
  UserInput,
} from "__generated__/generated";

interface AuthContextProps {
  login: (
    email: string,
    password: string
  ) => Promise<{
    data: AuthData | null;
    error: any;
  }>;
  logout: () => void;
  auth: AuthData;
  register: (userInput: UserInput) => Promise<{
    data: UserTypes | null;
    error: any;
  }>;
}

const initialState = {
  auth: {
    user: {
      _id: "",
      name: "",
      email: "",
      avatar: "",
      password: "",
    },
    token: "",
    isAuth: false,
  },
};

const handlers: any = {
  INITIALIZE: (state: AuthContextProps, action: any) => {
    return {
      ...state,
      auth: action.payload.auth,
    };
  },

  LOGIN: (state: AuthContextProps, action: any) => {
    const { token, user } = action;
    return {
      ...state,
      auth: {
        token,
        user,
        isAuth: true,
      },
    };
  },

  LOGOUT: (state: AuthContextProps) => ({
    ...state,
    auth: {
      token: "",
      user: null,
      isAuth: false,
    },
  }),
};

// make it reducer
const reducer = (state: any, action: { type: string | number }) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext<AuthContextProps>({
  auth: initialState.auth as AuthData,
  login: () => Promise.resolve({ data: null, error: null }),
  logout: () => {},
  register: () =>
    Promise.resolve({
      data: null,
      error: null,
    }),
});

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [registerMutation] = useRegisterMutation();
  const [loginMutation] = useLoginMutation();
  const register = async (userInput: any) => {
    const { data, errors } = await registerMutation({
      variables: {
        userInput,
      },
    });
    return {
      data: data?.createUser,
      error: errors?.[0].message,
    };
  };
  const login = async (email: string, password: string) => {
    const { data, errors } = await loginMutation({
      variables: {
        email,
        password,
      },
    });
    const { user, token } = data?.login as AuthData;
    const authData = {
      user,
      isAuth: true,
      token,
    };
    setSession(authData);
    await dispatch({ type: "LOGIN", ...data?.login });

    return { data: authData, error: errors?.[0].message };
  };

  const logout = async () => {
    setSession(null);
    await dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    const initialize = async () => {
      try {
        const auth = localStorage.getItem(AUTH_LOCAL_STORAGE.auth);
        const decoded = JSON.parse(auth as any);
        const isValid = isValidToken(decoded.token);

        if (decoded && isValid) {
          await dispatch({
            type: "INITIALIZE",
            payload: {
              auth: decoded,
            },
          } as any);
        } else {
          await dispatch({ type: "LOGOUT" });
        }
      } catch (error) {
        await dispatch({ type: "LOGOUT" });
        throw new Error(error as any);
      }
    };
    initialize();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
