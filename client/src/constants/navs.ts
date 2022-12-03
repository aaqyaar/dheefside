import { PATH } from "routes/paths";

export interface NavItem {
  title: string;
  path: string;
  access?: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    title: "Home",
    path: PATH.home,
    access: "public",
  },
  {
    title: "About",
    path: PATH.about,
    access: "public",
  },
  {
    title: "Contact",
    path: PATH.contact,
    access: "public",
  },
  {
    title: "Sign in",
    path: PATH.auth.login,
  },
  {
    title: "Dashboard",
    path: PATH.home,
    access: "private",
    children: [
      {
        title: "Dashboard",
        path: PATH.home,
        access: "private",
      },
      {
        title: "Profile",
        path: PATH.user.profile,
        access: "private",
      },
    ],
  },
];

export const generateNavItems = (type: "private" | "public") => {
  const navItemsFiltered = navItems.filter(
    (item) =>
      item.access === type || (item.access === "private" && type === "public")
  );
  return navItemsFiltered;
};
