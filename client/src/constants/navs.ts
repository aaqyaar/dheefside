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
    access: "public",
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
  // eslint-disable-next-line array-callback-return
  const filteredNavItems = navItems.filter((item) => {
    if (item.access === type) {
      return item;
    }
  });
  const navs = navItems.filter((item) => item.access === undefined);
  return [...navs, ...filteredNavItems];
};
