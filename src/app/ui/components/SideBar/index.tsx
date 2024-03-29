// Components
import Link from "next/link";
import Image from "next/image";
import NavLinks from "@/app/ui/components/NavLinks";

// Images
import { avatar, logo } from "@/public/images";

const SideBar = () => {
  return (
    <div className="flex h-full flex-col ">
      <Link href="/" title="Dashboard Page" className="px-3 py-10 md:px-10">
        <Image priority src={logo} width={213} height={46} alt="everest" />
      </Link>
      <div className="flex justify-center  cursor-pointer">
        <div>
          <Image priority src={avatar} width={40} height={40} alt="avatar" />
        </div>
        <div className="px-4 uppercase">
          <p className="text-white">Katherine B.</p>
          <p className="text-blue-100">Sales Manager</p>
        </div>
      </div>
      <div className="flex grow flex-row justify-between py-6 md:flex-col">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block" />
      </div>
    </div>
  );
};

export default SideBar;
