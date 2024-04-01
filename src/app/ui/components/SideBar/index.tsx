import Link from "next/link";
import Image from "next/image";

// Components
import { NavLinks, UpdateSubscription, UserInfo } from "@/app/ui/components";

// Images
import { logo } from "@/public/images";

const SideBar = () => {
  const user = {
    src: '',
    name: "Katherine B.",
    role: "Sales Manager",
  };
  return (
    <div className="flex h-full flex-col">
      <Link href="/" title="Dashboard Page" className="px-3 pt-6 md:px-10">
        <Image priority src={logo} width={213} height={46} alt="everest" />
      </Link>
      <UserInfo {...user} />
      <div className="flex grow flex-row justify-between py-3.5 md:flex-col">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block" />
      </div>
      <UpdateSubscription />
    </div>
  );
};

export default SideBar;
