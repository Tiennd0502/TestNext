import React, { memo } from "react";
import clsx from "clsx";
const isEqual = require("react-fast-compare");

import { Cell } from "@/app/lib/interfaces";

interface Props {
  columns: Cell[];
}

const TableHeader = ({ columns }: Props) => (
  <thead className="text-left text-sm font-normal bg-white border-b-2 uppercase">
    <tr>
      {columns.map((column, index) => {
        return (
          <th
            scope="col"
            className={clsx(`px-5 py-3 ${column.className}`)}
            key={index}>
            {column.label}
          </th>
        );
      })}
    </tr>
  </thead>
);

export default memo(TableHeader, isEqual);
