import {
  Button,
  Breadcrumbs,
  DateRangePickerCustom,
} from "@/app/ui/components";
import { DownloadIcon } from "@/app/ui/icons";

const breadcrumbsData = [
  {
    label: "Home",
    href: "home",
  },
  {
    label: "Dashboard",
    href: "dashboard",
  },
  {
    label: "Sales Monitoring",
    href: "sales_monitoring",
  },
];
const Dashboard = () => {
  return (
    <div className="pl-5 pr-2.5 py-5 h-full">
      <div className="flex justify-between">
        <div>
          <p className="text-xl text-blue-600">Dashboard Overview</p>
          <Breadcrumbs breadcrumbs={breadcrumbsData} />
        </div>
        <div className="flex space-x-5">
          <DateRangePickerCustom />
          <div className=" h-9">
            <Button className="flex items-center space-x-3 bg-blue-400 text-white">
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
