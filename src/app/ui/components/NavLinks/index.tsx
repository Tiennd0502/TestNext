"use client";

import { usePathname } from "next/navigation";

// constants
import { ROUTES } from "@/app/lib/constants/routes";

// Components
import Link from "next/link";
import { TransactionIcon } from "@/app/ui/icons";

const sidebar = [
  { name: "Transaction", href: ROUTES.SALES_MONITORING, icon: TransactionIcon },
  { name: "Reports", href: ROUTES.INVOICES, icon: TransactionIcon },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div>
      <p className="text-base text-blue-100 text-outline-text-dark uppercase">
        management
      </p>
      <div className="py-7">
        {sidebar.map(({ href, icon, name }, index) => {
          const Icon = icon;
          const isActive = pathname.includes(href);

          return (
            <div key={`${name}-${index}`} className="rounded-md border-0">
              <Link
                className={`flex h-14 grow items-center justify-center gap-5 p-3 rounded-md md:flex-none md:justify-start md:p-2 md:px-7 ${isActive ? "bg-mainColor fill-white" : "fill-gray-100"}`}
                href={href}
                title={name}>
                <Icon />
                <span
                  className={`hidden text-[13px] md:block ${isActive ? "bg-mainColor text-white" : "text-gray-100"}`}>
                  {name}
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavLinks;
