import { useAuth } from "contexts/AuthContext";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { PATH } from "routes/paths";

export default function RequireAuth() {
  const { auth } = useAuth();
  const location = useLocation();

  return auth.user ? (
    <Outlet />
  ) : (
    <Navigate
      to={`${PATH.auth.login}?next=${location.pathname}`}
      state={{ from: location }}
      replace
    />
  );
}
