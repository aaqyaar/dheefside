import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  HiBars3,
  HiUser,
  HiXMark,
  HiOutlineChevronDown,
} from "react-icons/hi2";
import { PATH } from "routes/paths";
import { Link } from "react-router-dom";
import { useAuth } from "contexts/AuthContext";

const resources = [
  {
    name: "Dashbord",
    href: "#",
    icon: HiBars3,
  },
  {
    name: "Profile",
    href: PATH.user.profile,
    icon: HiUser,
  },
];

const navs = [
  {
    name: "Home",
    href: PATH.home,
    current: true,
  },
  {
    name: "About",
    href: PATH.about,
    current: false,
  },
  {
    name: "Contact",
    href: PATH.contact,
    current: false,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Header2() {
  const { auth } = useAuth();
  return (
    <Popover className="z-50 relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <h1 className="text-2xl text-secondary font-bold">Dheefside</h1>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
              <span className="sr-only">Open menu</span>
              <HiBars3 className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navs.map((item, i) => (
              <Link
                key={i}
                to={item.href}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
            {!auth?.isAuth ? (
              <Link
                to={PATH.auth.login}
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </Link>
            ) : (
              <Popover.Group as="div">
                <Popover className="relative whitespace-nowrap">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none"
                        )}
                      >
                        <span>Dashboard</span>
                        <HiOutlineChevronDown
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                          <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {resources.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                >
                                  <item.icon
                                    className="h-6 w-6 flex-shrink-0 text-primary"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
            )}

            <Link to={PATH.bookDemo} className="btn px-4 py-2">
              Book Demo
            </Link>
          </div>
        </div>
      </div>

      <MobileNav />
    </Popover>
  );
}

const MobileNav = () => {
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      >
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-2xl ring-1 ring-black ring-opacity-5">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <Link to="/">
                  <h1 className="text-2xl text-secondary font-bold">
                    Dheefside
                  </h1>
                </Link>
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                  <span className="sr-only">Close menu</span>
                  <HiXMark className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="space-y-6 py-6 px-5">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {navs.map((item, i) => (
                <Link
                  key={i}
                  to={item.href}
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  {item.name}
                </Link>
              ))}
              <div className="col-span-2">
                <hr />
              </div>
              {resources.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div>
              <Link
                to={PATH.bookDemo}
                className="btn w-full shadow-sm"
                // className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Book Demo
              </Link>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing user ?{" "}
                <Link
                  to={PATH.auth.login}
                  className="ml-2 text-secondary hover:text-secondary/80"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};
