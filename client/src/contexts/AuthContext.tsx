import { AUTH_LOCAL_STORAGE } from "constants/app-constants";
import { createContext, useContext } from "react";
import { AuthData, useLoginMutation } from "__generated__/generated";

interface AuthContextProps {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  auth: AuthData | null;
}

const AuthContext = createContext<AuthContextProps>({
  auth: null,
  login: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [LoginAuth] = useLoginMutation();

  const login = async (email: string, password: string) => {
    const { data, errors } = await LoginAuth({
      variables: {
        email,
        password,
      },
    });

    if (errors) {
      throw new Error(errors[0].message);
    }
    const { token, user } = data?.login as AuthData;
    localStorage.setItem(AUTH_LOCAL_STORAGE.token, token);
    localStorage.setItem(AUTH_LOCAL_STORAGE.user, JSON.stringify(user));
  };

  const auth: AuthData = {
    user: localStorage.getItem(AUTH_LOCAL_STORAGE.user) as any,
    token: localStorage.getItem(AUTH_LOCAL_STORAGE.token) as string,
  };

  const logout = () => {
    localStorage.removeItem(AUTH_LOCAL_STORAGE.token);
    localStorage.removeItem(AUTH_LOCAL_STORAGE.user);
  };

  return (
    <AuthContext.Provider value={{ login, auth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
