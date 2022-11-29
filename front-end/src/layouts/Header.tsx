import { useScrollDown } from "../hooks";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { HiMenu, HiSun, HiMoon, HiX } from "react-icons/hi";

interface NavType {
  title: string;
  path: string;
  icon?: React.ReactNode;
  target?: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolledtoDown = useScrollDown(50);
  return (
    <header
      className={`sticky top-0 z-50 max-w-full  py-4 px-5 bg-slate-900  ${
        isScrolledtoDown && "shadow  shadow-blue-200"
      }`}
    >
      <div className="flex items-center justify-between md:mx-auto md:max-w-[1240px]">
        <div id="brand">
          <h1 className="ml-2 text-lg font-bold   text-blue-200 sm:text-xl md:text-2xl">
            <Link to="/">Dheefside</Link>
          </h1>
        </div>
        <nav id="nav-links" className="flex items-center">
          {desktopNav()}

          <div className="ml-4 inline-flex items-center lg:hidden">
            {!isOpen ? (
              <button
                className="rounded-md p-2 text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 hover:bg-blue-500 hover:text-blue-200"
                onClick={() => setIsOpen(!isOpen)}
              >
                <HiMenu className="h-6 w-6" aria-hidden="true" />
              </button>
            ) : // <HiX className="h-6 w-6" aria-hidden="true" />
            null}
          </div>
        </nav>
      </div>
      {isOpen &&
        mobileNav({
          open: isOpen,
          onOpenNav() {
            setIsOpen(!isOpen);
          },
        })}
    </header>
  );
}

const RenderNav = ({ title, path, target }: NavType) => {
  return (
    <li className={`text-md font-xl px-4 py-2`}>
      <Link
        to={path}
        target={target}
        className="flex items-center gap-1 hover:text-blue-500 text-blue-100"
      >
        <>{title}</>
      </Link>
    </li>
  );
};

const desktopNav = () => {
  return (
    <ul className="hidden lg:flex lg:items-center">
      {navigation.map((nav: NavType) => (
        <RenderNav key={nav.title} {...nav} />
      ))}
    </ul>
  );
};

const mobileNav = ({
  open,
  onOpenNav,
}: {
  open: boolean;
  onOpenNav: () => void;
}) => {
  return (
    <>
      <div className="relative block lg:hidden">
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50"></div>

        <div
          className={`absolute inset-x-0 z-50 my-7 ml-1 mr-2 rounded-lg shadow-2xl bg-gray-800  ${
            open && "translate-y-0"
          } transform p-2 transition duration-300 ease-in-out`}
        >
          <div className="absolute right-2">
            <button
              className="rounded-md p-2 text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 hover:bg-blue-500 hover:text-green-200"
              onClick={() => onOpenNav()}
            >
              <HiX className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <ul className="flex flex-col items-start p-5">
            {navigation.map((nav: NavType) => (
              <RenderNav key={nav.title} {...nav} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const navigation: NavType[] = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "Users",
    path: "/users",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Login",
    path: "/auth/login",
  },
];
