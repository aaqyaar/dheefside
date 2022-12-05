import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, Fragment, useTransition } from "react";
import { LoadingScreen } from "components";
import { Main } from "layouts";
import { PATH } from "./paths";
import RequireAuth from "components/RequireAuth";

// import RequireAuth from "components/RequireAuth";

const Loadable = (Component: any) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isPending] = useTransition();
  return (
    <Suspense fallback={isPending ? <LoadingScreen /> : null}>
      <Component {...props} />
    </Suspense>
  );
};

const renderRoutes = (routes: any) => {
  return (
    <Routes>
      {routes.map((route: any, index: number) => {
        const { path, element, children, exact, layout, requireAuth } = route;
        const Component = element || Fragment;
        const Layout = layout || Fragment;

        return (
          <Fragment key={index}>
            {requireAuth ? (
              <Route key={index} element={<RequireAuth />}>
                <Route
                  key={index}
                  path={path}
                  element={
                    <Layout>
                      {children ? renderRoutes(children) : <Component />}
                    </Layout>
                  }
                  index={exact}
                />
              </Route>
            ) : (
              <Route
                key={index}
                path={path}
                element={
                  <Layout>
                    {children ? renderRoutes(children) : <Component />}
                  </Layout>
                }
                index={exact}
              />
            )}
          </Fragment>
        );
      })}
    </Routes>
  );
};

export default function AppRoutes() {
  const [_, startTransition] = useTransition();
  return (
    <Suspense
      fallback={
        <LoadingScreen
          onReady={() => {
            startTransition(() => {});
          }}
        />
      }
    >
      {renderRoutes(routes)}
    </Suspense>
  );
}

const routes = [
  {
    path: PATH.home,
    layout: Main,
    requireAuth: false,
    element: Loadable(lazy(async () => await import("../pages/Home"))),
    exact: true,
  },
  {
    path: PATH.about,
    layout: Main,
    requireAuth: false,
    element: Loadable(lazy(async () => await import("../pages/AboutPage"))),
    exact: true,
  },
  {
    path: PATH.contact,
    layout: Main,
    requireAuth: false,
    element: Loadable(lazy(async () => await import("../pages/ContactPage"))),
    exact: true,
  },
  {
    path: PATH.notFound,
    exact: true,
    requireAuth: false,
    layout: Main,
    element: lazy(async () => await import("../pages/404")),
  },

  {
    path: PATH.auth.login,
    requireAuth: false,
    layout: Main,
    element: Loadable(lazy(async () => await import("../pages/LoginPage"))),
  },
  {
    path: PATH.auth.register,
    layout: Main,
    requireAuth: false,
    element: Loadable(lazy(async () => await import("../pages/RegisterPage"))),
    exact: true,
  },
  {
    path: PATH.user.profile,
    layout: Main,
    requireAuth: true,
    element: Loadable(lazy(async () => await import("../pages/UserPage"))),
    exact: true,
  },
];
