// constants
import { ROUTES } from "@/app/lib/constants/routes";

// Icons
import {
  CustomerIcon,
  DashboardIcon,
  DocumentIcon,
  HistoryIcon,
  LogoutIcon,
  OrderIcon,
  ProfileIcon,
  ReportIcon,
  SettingIcon,
  TransactionIcon,
} from "@/app/ui/icons";

export const SIDE_BAR = [
  {
    name: "",
    subNav: [
      {
        name: "Dashboard",
        href: ROUTES.DASHBOARD,
        icon: DashboardIcon,
      },
    ],
  },
  {
    name: "Management",
    subNav: [
      {
        name: "Transaction",
        href: ROUTES.SALES_MONITORING,
        icon: TransactionIcon,
      },
      { name: "Reports", href: ROUTES.REPORTS, icon: ReportIcon },
      { name: "Documents", href: ROUTES.DOCUMENTS, icon: DocumentIcon },
      { name: "Customers", href: ROUTES.CUSTOMERS, icon: CustomerIcon },
      { name: "Orders", href: ROUTES.ORDERS, icon: OrderIcon },
      { name: "History", href: ROUTES.HISTORY, icon: HistoryIcon },
    ],
  },

  {
    name: "Others",
    subNav: [
      { name: "Profile", href: ROUTES.PROFILE, icon: ProfileIcon },
      { name: "Settings", href: ROUTES.SETTINGS, icon: SettingIcon },
      { name: "Logout", href: ROUTES.LOGOUT, icon: LogoutIcon },
    ],
  },
];
