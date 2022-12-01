import Button from "components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";

interface NavItem {
  title: string;
  path: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="shadow-lg shadow-indigo-50 font-inter">
      <div className="w-full h-16 max-w-[1280px] mx-auto px-8 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl text-indigo-500 font-bold">Dheefside</h1>
        </Link>
        {/* desktop navigation bar */}
        <DesktopNav />
        {/* menu icon */}
        <div className="lg:hidden flex items-center space-x-4">
          <button>
            {!isOpen ? (
              <HiOutlineMenuAlt3
                className="text-2xl text-indigo-500 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <HiOutlineX
                className="text-2xl text-indigo-500 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
          </button>
        </div>
      </div>
      {/* mobile navigation bar */}
      {isOpen && <MobileNav isOpen={isOpen} />}
    </header>
  );
}

function DesktopNav() {
  return (
    <>
      <nav className="lg:flex space-x-4 hidden">
        <ul className="flex space-x-4">
          {navItems.map((nav) => renderNav(nav))}
        </ul>
      </nav>
      <nav className="lg:flex space-x-4 hidden">
        <ul className="flex space-x-4 items-center justify-center text-indigo-700">
          <li>
            <Link to="/auth/login">Sign in</Link>
          </li>
          <li>
            <Button size="md" variant="contained">
              Get Started
            </Button>
          </li>
        </ul>
      </nav>
    </>
  );
}

function MobileNav({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="block lg:hidden z-50 py-4 bg-white shadow-lg shadow-indigo-50 rounded-lg absolute w-full h-fit px-4">
      <nav className="flex flex-col justify-start items-start">
        <motion.nav
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          <ul className="space-y-2 text-black">
            {navItems.map((item) => renderNav(item))}
            <hr />
            <li>
              <Link to="/auth/login">Sign in</Link>
            </li>
            <li>
              <Button size="md" variant="contained">
                Get Started
              </Button>
            </li>
          </ul>
        </motion.nav>
      </nav>
    </div>
  );
}

const navItems: NavItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

function renderNav({ path, title }: NavItem) {
  return (
    <li key={path}>
      <Link to={path}>{title}</Link>
    </li>
  );
}
