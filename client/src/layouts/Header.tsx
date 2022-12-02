import { Button } from "components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";
import { PATH } from "routes/paths";

interface NavItem {
  title: string;
  path: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative shadow-none shadow-black/10">
      <div className="w-full h-16 max-w-[1280px] mx-auto px-8 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl text-indigo-500 font-bold">Dheefside</h1>
        </Link>
        {/* desktop navigation bar */}
        <DesktopNav />
        {/* menu icon */}
        <div className="lg:hidden flex items-center space-x-4">
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
        </div>
      </div>
      {/* mobile navigation bar */}
      {isOpen && <MobileNav />}
    </header>
  );
}

function DesktopNav() {
  return (
    <nav className="lg:block hidden">
      <ul className="flex space-x-6 justify-center items-center">
        {navItems.map((nav) => renderNav(nav))}
        <li>
          <Button size="md" variant="contained" className="bg-[#3c50e0]">
            Book A Demo
          </Button>
        </li>
      </ul>
    </nav>
  );
}

function MobileNav() {
  return (
    <div className="mx-4 block px-4 lg:hidden z-50 py-4 bg-white shadow-lg rounded-lg absolute inset-0 top-20 h-fit">
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

const navItems: NavItem[] = [
  {
    title: "Home",
    path: PATH.home,
  },
  {
    title: "About",
    path: PATH.about,
  },
  {
    title: "Contact",
    path: PATH.contact,
  },
  {
    title: "Sign in",
    path: PATH.auth.login,
  },
];

function renderNav({ path, title }: NavItem) {
  return (
    <li
      key={path}
      className="text-gray-800 lg:hover:border-b-2 lg:hover:border-indigo-700 hover:text-indigo-700"
    >
      <Link to={path}>{title}</Link>
    </li>
  );
}
