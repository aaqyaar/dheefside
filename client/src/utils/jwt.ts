import { AUTH_LOCAL_STORAGE } from "constants/app-constants";

export const setSession = (auth: any) => {
  if (auth) {
    localStorage.setItem(AUTH_LOCAL_STORAGE.auth, JSON.stringify(auth));
  } else {
    localStorage.removeItem(AUTH_LOCAL_STORAGE.auth);
  }
};
