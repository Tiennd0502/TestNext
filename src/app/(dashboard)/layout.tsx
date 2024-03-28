import { SideNav } from "@/app/ui/components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row ">
      <div className="w-full flex-none md:w-64 bg-bgNavColor">
        <SideNav />
      </div>
      <div className="flex-grow w-pageScreen py-12">{children}</div>
    </div>
  );
};

export default Layout;
