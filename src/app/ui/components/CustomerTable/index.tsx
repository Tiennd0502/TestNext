'use client';

import { memo } from "react";
import { Metadata } from "next";
const isEqual = require("react-fast-compare");

import { Table } from "@/app/ui/components";
import { Customer } from "@/app/lib/interfaces";

import { CUSTOMER_COLUMNS } from "@/app/lib/constants";
import { EditIcon, TrashIcon } from "../../icons";

export const metadata: Metadata = {
  title: "Customer",
  description: "Customer Overview",
};

interface IProps {
  data: Customer[];
}
const CustomerTable = ({ data }: IProps) => {

  const renderActions = () => (
    <div className="h-full flex">
      <button
        className="group rounded-md hover:border-mainColor pr-10"
        onClick={() => {}}
      >
        <EditIcon  />
      </button>
      <button
        className="group rounded-md hover:border-mainColor"
        onClick={() => {}}
      >
        <TrashIcon  />
      </button>
    </div>
  );

  const column=  {
    key: "id",
    label: "Actions",
    widthPercent: 16,
    actionCell: () => renderActions(),
  }
  console.log("columns", column)
  const newColumns = [...CUSTOMER_COLUMNS, column ]
  return <Table data={data} columns={newColumns} />;
};

export default memo(CustomerTable, isEqual);
