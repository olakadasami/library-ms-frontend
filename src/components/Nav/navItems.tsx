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
    href: "/recents",
    Icon: RotateCcw,
  },
  {
    title: "Books",
    href: "/books",
    Icon: BookOpen,
  },
  {
    title: "Users",
    href: "/users",
    Icon: UsersRound,
  },
  {
    title: "Settings",
    href: "/settings",
    Icon: Settings,
  },
  {
    title: "Help",
    href: "/help",
    Icon: CircleHelp,
  },
  {
    title: "SignOut",
    href: "/signout",
    Icon: LogOut,
  },
];
