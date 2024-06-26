export const ROUTES = {
  SALES_MONITORING: "/sales_monitoring",
  INVOICES: "/invoices",
  TRANSACTION: "/transactions",
  DOCUMENTS: "/document",
  ORDERS: "/order",
  HISTORY: "#",
  PROFILE: "#",
  SETTINGS: "#",
  LOGOUT: "#",
  CUSTOMERS: "/customer",
  REPORTS: "/report",
  DASHBOARD: "/dashboard",
  CREATE_CUSTOMER: "/customer/create",
  EDIT_CUSTOMER: (id: string) => `customer/${id}/edit`,
};
