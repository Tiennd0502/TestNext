import { memo } from "react";
import { Metadata } from "next";
const isEqual = require("react-fast-compare");

import { Table } from "@/app/ui/components";
import { Revenue } from "@/app/lib/interfaces";

import { REVENUE_COLUMNS } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Overview",
};

interface IProps {
  data: Revenue[];
}
const RevenueTable = ({ data }: IProps) => {
  return <Table data={data} columns={REVENUE_COLUMNS} />;
};

export default memo(RevenueTable, isEqual);
