"use client";

import { usePathname } from "next/navigation";

// constants
import { SIDE_BAR } from "@/app/lib/constants";

// components
import { NavLink } from "@/app/ui/components/common";

const NavLinks = () => {
  const pathname = usePathname();

  return SIDE_BAR.map(({ name, subNav }, index) => (
    <div key={`${name}-${index}`} className="w-full">
      <p className="text-base text-blue-100 text-outline-text-dark uppercase px-3 md:px-10">
        {name}
      </p>
      <div className="py-7">
        {subNav.map((item, index) => {
          return (
            <div key={`${item.name}-${index}`} className="rounded-md border-0">
              <NavLink {...item} isActive={pathname.includes(item.href)} />
            </div>
          );
        })}
      </div>
    </div>
  ));
};

export default NavLinks;
