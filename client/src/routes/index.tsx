import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, Fragment } from "react";
import { LoadingScreen } from "components";
import { Main } from "layouts";
import { PATH } from "./paths";

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
        const { path, element, children, exact, layout } = route;
        const Component = element || Fragment;
        const Layout = layout || Fragment;
        return (
          <Route
            key={index}
            path={path}
            index={exact}
            element={
              <Layout>
                {children ? renderRoutes(children) : <Component />}
              </Layout>
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
    path: PATH.home,
    exact: true,
    layout: Main,
    element: Loadable(lazy(() => import("../pages/Home"))),
  },
  {
    path: PATH.notFound,
    exact: true,
    layout: Main,
    element: lazy(() => import("../pages/404")),
  },

  {
    path: PATH.auth.login,
    layout: Main,
    element: Loadable(lazy(() => import("../pages/LoginPage"))),
  },
  {
    path: PATH.auth.register,
    layout: Main,
    element: Loadable(lazy(() => import("../pages/RegisterPage"))),
    exact: true,
  },
  {
    path: PATH.user.profile,
    layout: Main,
    element: Loadable(lazy(() => import("../pages/UserPage"))),
    exact: true,
  },
];
