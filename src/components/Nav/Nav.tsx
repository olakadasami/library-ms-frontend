import Link from "next/link";
import React from "react";
import { navItems } from "./navItems";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();

  const isActive = (pathname: string): boolean =>
    router.pathname.startsWith(pathname);

  return (
    <nav className="flex flex-col gap-4 p-3">
      {/* Logo */}
      <Link
        href="/"
        className="flex h-9 w-9 shrink-0 items-center justify-center gap-2 text-lg font-bold capitalize md:h-8 md:w-8 md:text-base"
      >
        <span className="">Logo</span>
      </Link>

      {/* Nav items */}
      {navItems.map((item, index) => (
        <Link
          href={item.href}
          key={item.href}
          className={`flex items-center gap-2 ${
            index === navItems.length - 1 ? "mt-auto" : ""
          } ${
            isActive(item.href) ? "bg-primary text-primary-foreground" : ""
          } hover:bg-primary hover:text-primary-foreground p-2 rounded `}
        >
          <div className="flex items-center">
            <item.Icon className="h-5 w-5" />
            <span className="sr-only">{item.title}</span>
          </div>
          <p className="capitalize sr-only">{item.title}</p>
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
