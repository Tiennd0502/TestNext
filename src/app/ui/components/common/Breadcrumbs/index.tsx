"use client";

import Link from "next/link";
import { memo } from "react";
import { usePathname } from "next/navigation";
const isEqual = require("react-fast-compare");

interface Breadcrumb {
  label: string;
  href: string;
}

const Breadcrumbs = ({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Breadcrumb"
      className="text-xs uppercase text-gray-100 pt-2">
      <ol className="flex">
        {breadcrumbs.map(({ href, label }, index) => {
          const isActive = pathname.includes(href);

          return (
            <li key={href} aria-current={isActive}>
              <Link
                className={`${isActive ? "text-blue-600" : ""}`}
                href={href}>
                {label}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <span className="mx-1">/</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default memo(Breadcrumbs, isEqual);
