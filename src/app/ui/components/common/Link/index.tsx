"use client";

import { SVGProps } from "react";
import { memo } from "react";
import Link from "next/link";
import clsx from "clsx";

interface IProp {
  isActive: boolean;
  href: string;
  icon: (props?: SVGProps<SVGSVGElement>) => JSX.Element;
  name: string;
}

const NavLink = ({ isActive, href, name, icon: Icon }: IProp) => (
  <Link
    className={`flex h-14 grow items-center justify-center gap-5 p-3 rounded-md md:flex-none md:justify-start md:p-2 md:px-7 ${isActive ? "bg-blue-500 fill-white" : "fill-gray-100"}`}
    href={href}
    title={name}>
    <Icon />
    <span
      className={clsx(
        "hidden text-[13px] md:block",
        {
          "bg-blue-500 text-white": isActive,
        },
        {
          "text-gray-100": !isActive,
        },
      )}>
      {name}
    </span>
  </Link>
);

export default memo(NavLink);
