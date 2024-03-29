"use client";

import { SVGProps, memo } from "react";
import Link from "next/link";

interface IProp {
  isActive: boolean;
  href: string;
  icon: (props: any) => JSX.Element;
  name: string;
}

const NavLink = ({ isActive, href, name, icon: Icon }: IProp) => (
  <Link
    className={`flex h-14 grow items-center justify-center gap-5 p-3 rounded-md md:flex-none md:justify-start md:p-2 md:px-7 ${isActive ? "bg-blue-500 fill-white" : "fill-gray-100"}`}
    href={href}
    title={name}>
    <Icon />
    <span
      className={`hidden text-[13px] md:block ${isActive ? "bg-blue-500 text-white" : "text-gray-100"}`}>
      {name}
    </span>
  </Link>
);

export default memo(NavLink);
