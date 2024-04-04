import React, { memo } from "react";
const isEqual = require("react-fast-compare");

// Types
import { Cell } from "@/app/lib/interfaces"

// Components
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

interface Props<T> {
  data: T[];
  columns: Cell[];
}

const Table = <T,>({ columns, data }: Props<T>) => (
  <table className="hidden min-w-full border rounded-md text-black-100 md:table">
    <TableHeader columns={columns} />
    <tbody>
      {data.map((item, index) => (
        <TableRow key={index} rows={columns} itemData={item}/>
      ))}
    </tbody>
  </table>
);

export default memo(Table, isEqual);
