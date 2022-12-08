import { useAuth } from "contexts/AuthContext";
import { Outlet, Navigate } from "react-router-dom";
import { PATH } from "routes/paths";

export default function RequireAuth() {
  const { auth } = useAuth();
  // console.log(JSON.parse(localStorage.getItem("auth"), null, 2));
  return auth.isAuth === true ? <Outlet /> : <Navigate to={PATH.auth.login} />;
}
