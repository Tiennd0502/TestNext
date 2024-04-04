import { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";

import {
  Button,
  Breadcrumbs,
  DateRangePickerCustom,
  LoadingIndicator,
} from "@/app/ui/components";

const RevenueTable = dynamic(() => import("@/app/ui/components/RevenueTable"), {
  ssr: false,
});

import { DownloadIcon } from "@/app/ui/icons";

import { TOP_NAV } from "@/app/lib/constants";

import { getRevenues } from "@/app/lib/apis";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Overview",
};

const Dashboard = async () => {
  const { data: revenue } = await getRevenues();

  return (
    <div className="pl-5 pr-2.5 py-5 h-full">
      <div className="flex justify-between h-12">
        <div>
          <p className="text-xl text-blue-600">Dashboard Overview</p>
          <Breadcrumbs breadcrumbs={TOP_NAV} />
        </div>
        <div className="flex space-x-5">
          <DateRangePickerCustom />
          <div className="h-9">
            <Button className="flex items-center space-x-3 text-white bg-blue-400">
              <DownloadIcon />
              <span>Download Report</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="w-8/12">
          <Suspense fallback={<LoadingIndicator />}>
            <RevenueTable data={revenue} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
