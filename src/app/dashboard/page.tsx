import { Metadata } from 'next'

import {
  Button,
  Breadcrumbs,
  DateRangePickerCustom,
} from "@/app/ui/components";
import { DownloadIcon } from "@/app/ui/icons";
import { TOP_NAV } from '@/app/lib/constants';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard Overview',
}

const Dashboard = () => {
  return (
    <div className="pl-5 pr-2.5 py-5 h-full">
      <div className="flex justify-between">
        <div>
          <p className="text-xl text-blue-600">Dashboard Overview</p>
          <Breadcrumbs breadcrumbs={TOP_NAV} />
        </div>
        <div className="flex space-x-5">
          <DateRangePickerCustom />
          <div className="h-9">
            <Button className="flex items-center space-x-3 text-white bg-blue-300">
              <DownloadIcon />
              <span>Download Report</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
