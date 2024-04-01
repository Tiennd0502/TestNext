"use client";

import { memo } from "react";
import Link from "next/link";
import clsx from "clsx";

interface IProp {
  isActive: boolean;
  href: string;
  icon: () => JSX.Element;
  name: string;
}

const NavLink = ({ isActive, href, name, icon: Icon }: IProp) => (
  <Link
    className={clsx(
      "flex h-12 grow items-center justify-center gap-5 p-3 rounded-md md:flex-none md:justify-start text-blue-100 md:p-2 md:px-7 hover:bg-blue-500",
      {
        "bg-blue-500 fill-white": isActive,
      },
      {
        "text-blue-100": !isActive,
      },
    )}
    href={href}
    title={name}>
    <Icon />
    <span
      className={clsx(
        "hidden text-[14px] md:block text-blue-100",
        {
          "bg-blue-500 text-white": isActive,
        },
        {
          "text-blue-100": !isActive,
        },
      )}>
      {name}
    </span>
  </Link>
);

export default memo(NavLink);
