// Components
import Link from "next/link";
import Image from "next/image";
import NavLinks from "@/app/ui/components/NavLinks";

// Images
import logo from "@/public/images/logo.webp";

const SideNav = () => {
  return (
    <div className="flex h-full flex-col ">
      <Link href="/" title="Dashboard Page" className="px-3 py-10 md:px-10">
        <Image priority src={logo} width={213} height={46} alt="e-studies" />
      </Link>
      <div className="flex grow flex-row justify-between py-16 md:flex-col">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block" />
      </div>
    </div>
  );
};

export default SideNav;
