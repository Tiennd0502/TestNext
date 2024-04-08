"use client";

import React, { memo } from "react";
const isEqual = require("react-fast-compare");

import { EditIcon, TrashIcon } from "@/app/ui/icons";

import { Cell } from "@/app/lib/interfaces";

interface Props<T> {
  rows: Cell[];
  itemData: T  & { id?: string };
  handleEdit?: (id?: string) => void;
  handleRemove?: (id?: string) => void;
}

const TableRow = <T,>({
  rows,
  itemData,
  handleEdit,
  handleRemove,
}: Props<T>) => {
  const onEdit = (id: string) => () => {
    handleEdit?.(id);
  };

  const onRemove = (id: string) => () => {
    handleRemove?.(id);
  };

  const renderActions = (id: string) => (
    <div className="h-full flex">
      <button
        className="group rounded-md hover:border-mainColor pr-10"
        onClick={onEdit(id)}>
        <EditIcon />
      </button>
      <button
        className="group rounded-md hover:border-mainColor"
        onClick={onRemove(id)}>
        <TrashIcon />
      </button>
    </div>
  );

  return (
    <tr className="w-full text-[13px] bg-white even:bg-gray-200 h-12 border-b border-px">
      {rows.map(row => {
        const value = String(itemData[row.key as keyof T]);
        return (
          <td
            key={`${row.key}-${row.label}`}
            className={`truncate max-w-[220px] whitespace-nowrap px-5 py-3 ${row.className}`}>
            {row?.isShowAction ? (
              renderActions(itemData?.id || '')
            ) : (
              <span>{value}</span>
            )}
          </td>
        );
      })}
    </tr>
  );
};

export default memo(TableRow, isEqual);
