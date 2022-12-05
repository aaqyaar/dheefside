import { Button } from "components";
import { useState } from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import {
  HiOutlineChevronDown,
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";
import { motion } from "framer-motion";
import { useAuth } from "contexts/AuthContext";
import { generateNavItems } from "constants/navs";

interface NavItem {
  title: string;
  path: string;
  children?: NavItem[];
}

export default function Header() {
  const location = useLocation();
  const { auth } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const navItems: NavItem[] = auth?.isAuth
    ? generateNavItems("private")
    : generateNavItems("public");

  const match = (path: string) =>
    path ? !!matchPath({ path, end: false }, location.pathname) : false;

  return (
    <header className="relative shadow-none">
      <div className="w-full h-16 max-w-[1280px] mx-auto px-8 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl text-secondary font-bold">Dheefside</h1>
        </Link>
        {/* desktop navigation bar */}
        <DesktopNav
          navItems={navItems}
          openDropDown={openDropDown}
          setOpenDropDown={setOpenDropDown}
        />
        {/* menu icon */}
        <div className="lg:hidden flex items-center space-x-4">
          {!isOpen ? (
            <HiOutlineMenuAlt3
              className="text-2xl text-primaryGreen cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <HiOutlineX
              className="text-2xl text-primaryGreen cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>
      {/* mobile navigation bar */}
      {isOpen && <MobileNav navItems={navItems} />}
    </header>
  );
}

function DesktopNav({
  navItems,
  openDropDown,
  setOpenDropDown,
}: {
  navItems: NavItem[];
  openDropDown: boolean;
  setOpenDropDown: (value: boolean) => void;
}) {
  return (
    <nav className="lg:block hidden">
      <ul className="flex space-x-6 justify-center items-center">
        {navItems.map((nav) => renderNav(nav, openDropDown, setOpenDropDown))}
        <li>
          <Button size="md" variant="contained">
            Book A Demo
          </Button>
        </li>
      </ul>
    </nav>
  );
}

function MobileNav({ navItems }: { navItems: NavItem[] }) {
  return (
    <div className="mx-4 block px-4 lg:hidden z-50 py-4 bg-white shadow-2xl rounded-lg absolute inset-0 top-20 h-fit">
      {/* add backdrop modal */}
      <nav className="flex flex-col justify-start items-start">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="space-y-2">
            {navItems.map((item) => renderNav(item))}
            <hr />
            <li>
              <Button size="md" variant="contained">
                Get Started
              </Button>
            </li>
          </ul>
        </motion.div>
      </nav>
    </div>
  );
}

function renderNav(
  { path, children, title }: NavItem,
  openDropDown?: boolean,
  setOpenDropDown?: (value: boolean) => void
) {
  return (
    <li key={title}>
      {children ? (
        <div className="relative">
          <button
            className="flex items-center space-x-2 outline-none focus:outline-none"
            onClick={() => setOpenDropDown && setOpenDropDown(!openDropDown)}
          >
            <span>{title}</span>
            {openDropDown ? (
              <HiOutlineChevronDown className="text-xl transform rotate-180" />
            ) : (
              <HiOutlineChevronDown className="text-xl" />
            )}
            {/* <HiOutlineChevronDown /> */}
          </button>
          {openDropDown && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-10 left-0 bg-white shadow-2xl rounded-lg py-2 px-4"
            >
              <ul className="space-y-2">
                {children.map((child) => renderNav(child))}
              </ul>
            </motion.div>
          )}
        </div>
      ) : (
        <Link
          to={path}
          className={`hover:text-secondary duration-100 hover:border-b-2 border-primary `}
        >
          {title}
        </Link>
      )}
    </li>
  );
}
