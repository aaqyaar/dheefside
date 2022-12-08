import { AUTH_LOCAL_STORAGE } from "constants/app-constants";
import jwtDecode from "jwt-decode";

export interface IAuth {
  exp: number;
  iat: number;
}

export const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }

  try {
    const decoded: IAuth = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      return false;
    }

    return true;
  } catch (err) {
    return false;
  }
};

export const setSession = (auth: any) => {
  if (auth) {
    localStorage.setItem(AUTH_LOCAL_STORAGE.auth, JSON.stringify(auth));
  } else {
    localStorage.removeItem(AUTH_LOCAL_STORAGE.auth);
  }
};
