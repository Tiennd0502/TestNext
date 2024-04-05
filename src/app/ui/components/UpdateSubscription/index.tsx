import Link from "next/link";

// Components
import { Button } from "@/app/ui/components";

const SideBar = () => (
  <div className="bg-blue-500 rounded-md mx-2 my-4 py-4 px-8 flex flex-col items-center text-center text-white">
    <p className="text-xl">Upgrade to Pro</p>
    <p className="text-xs py-3">
      Unlock new features. Try out Everest without any limits
    </p>
    <div className="py-2">
      <Button className="bg-white">
        Update Subscription
      </Button>
    </div>
    <Link href="#" title="Dashboard Page" className="py-2 md:px-10">
      <p className="text-blue-100 text-xs">More Info</p>
    </Link>
  </div>
);

export default SideBar;
