'use client';

import React, { memo } from "react";
const isEqual = require("react-fast-compare");

import { Cell } from "@/app/lib/interfaces";

interface Props<T> {
  rows: Cell<T>[];
  itemData: T;
}

const TableRow = <T,>({ rows, itemData }: Props<T>) => (
  <tr className="w-full text-[13px] bg-white even:bg-gray-200 h-12 border-b border-px">
    {rows.map(row => {
      const value = String(itemData[row.key as keyof T]);
      return (
        <td
          key={`${row.key}-${row.label}`}
          className={`truncate max-w-[220px] whitespace-nowrap px-5 py-3 ${row.className}`}>
          {row?.actionCell ? row?.actionCell(itemData) : value}
        </td>
      );
    })}
  </tr>
);

export default memo(TableRow, isEqual);
