import { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";

import { Button, LoadingIndicator } from "@/app/ui/components";

const CustomerTable = dynamic(
  () => import("@/app/ui/components/CustomerTable"),
  {
    ssr: false,
  },
);

import { getCustomer } from "@/app/lib/apis";

export const metadata: Metadata = {
  title: "Customer",
  description: "Customer Overview",
};

const Dashboard = async () => {
  const { data: customList } = await getCustomer();

  return (
    <div className="pl-5 pr-2.5 py-5 h-full">
      <div className="flex justify-between h-12">
        <div>
          <p className="text-xl text-blue-600">Customer list</p>
        </div>
        <div className="flex space-x-5">
          <div className="h-9">
            <Button className="flex items-center space-x-3 text-white bg-blue-400">
              <span>Add New Customer</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="py-5">
        <Suspense fallback={<LoadingIndicator />}>
          <CustomerTable data={customList} />
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;
