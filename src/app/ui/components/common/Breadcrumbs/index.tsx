import Link from "next/link";
import { memo } from "react";

interface Breadcrumb {
  label: string;
  href: string;
}

const Breadcrumbs = ({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) => (
  <nav aria-label="Breadcrumb" className="text-xs uppercase text-gray-100 pt-2">
    <ol className="flex">
      {breadcrumbs.map(({ href, label }, index) => {
        const lastItem = breadcrumbs.length - 1;

        return (
          <li key={href} aria-current={!!lastItem}>
            <Link href={href}>{label}</Link>
            {index < breadcrumbs.length - 1 && <span className="mx-1">/</span>}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default memo(Breadcrumbs);
