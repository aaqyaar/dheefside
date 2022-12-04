import { useAuth } from "contexts/AuthContext";
import { Outlet, Navigate } from "react-router-dom";
import { PATH } from "routes/paths";

export default function RequireAuth() {
  const { auth } = useAuth();
  return auth?.isAuth === true ? <Outlet /> : <Navigate to={PATH.auth.login} />;
}
