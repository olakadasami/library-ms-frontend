import {
  LayoutDashboard,
  RotateCcw,
  UsersRound,
  LogOut,
  CircleHelp,
  Settings,
  BookOpen,
} from "lucide-react";

export const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    Icon: LayoutDashboard,
  },
  {
    title: "Recents",
    href: "/dashboard/recent",
    Icon: RotateCcw,
  },
  {
    title: "Books",
    href: "/dashboard/books",
    Icon: BookOpen,
  },
  {
    title: "Users",
    href: "/dashboard/users",
    Icon: UsersRound,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    Icon: Settings,
  },
  {
    title: "Help",
    href: "/dashboard/help",
    Icon: CircleHelp,
  },
  {
    title: "SignOut",
    href: "/signout",
    Icon: LogOut,
  },
];
