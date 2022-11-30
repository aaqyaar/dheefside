import { Auth } from "./Auth";

export const AuthService = {
  register: async (email?: string, password?: string) => {
    try {
      const result = await Auth.register(email!, password!);
      return result;
    } catch (error) {
      return error;
    }
  },
  confirmSignUp: async (email: string, code: string) => {
    try {
      const result = await Auth.confirmSignUp(email, code);
      return result;
    } catch (error) {
      return error;
    }
  },
  login: async (email: string, password: string) => {
    try {
      const result = await Auth.login(email, password);
      return result;
    } catch (error) {
      return error;
    }
  },
  logout: async () => {
    try {
      const result = await Auth.logout();
      return result;
    } catch (error) {
      return error;
    }
  },
  getAcessToken: async () => {
    try {
      const result = await Auth.getAccessToken();
      return result;
    } catch (error) {
      return error;
    }
  },
};
