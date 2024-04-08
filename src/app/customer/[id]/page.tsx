import { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";

import { CustomerHeader, LoadingIndicator } from "@/app/ui/components";

const CustomerTable = dynamic(
  () => import("@/app/ui/components/CustomerTable"),
  {
    ssr: false,
  },
);

import { getCustomer } from "@/app/lib/actions";

export const metadata: Metadata = {
  title: "Customer",
  description: "Customer Overview",
};

const Dashboard = async () => {
  const { data: customList } = await getCustomer();

  return (
    <div className="pl-5 pr-2.5 py-5 h-full">
      <CustomerHeader />

      <div className="py-5">
        <Suspense fallback={<LoadingIndicator />}>
          <CustomerTable data={customList} />
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;
