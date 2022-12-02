import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, Fragment } from "react";
import { LoadingScreen } from "components";
import { Main } from "layouts";

const Loadable = (Component: any) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <Suspense
      fallback={<Fragment>{isHome ? <LoadingScreen /> : null}</Fragment>}
    >
      <Component {...props} />
    </Suspense>
  );
};

function renderRoutes(routes: any) {
  return (
    <Routes>
      {routes.map((route: any, index: number) => {
        const { path, element, children, exact } = route;
        const Component = element || Fragment;
        return (
          <Route
            key={index}
            path={path}
            index={exact}
            element={
              <Main>{children ? renderRoutes(children) : <Component />}</Main>
            }
          />
        );
      })}
    </Routes>
  );
}

export default function AppRoutes() {
  return renderRoutes(routes);
}

const routes = [
  {
    path: "/",
    exact: true,
    element: Loadable(lazy(() => import("./pages/Home"))),
  },
  {
    path: "*",
    exact: true,
    element: lazy(() => import("./pages/404")),
  },

  {
    path: "/auth/login",
    element: Loadable(lazy(() => import("./pages/Login"))),
  },
  {
    path: "/auth/register",
    element: Loadable(lazy(() => import("./pages/Register"))),
    exact: true,
  },
];
