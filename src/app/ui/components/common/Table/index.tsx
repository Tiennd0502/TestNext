import React, { memo } from "react";
const isEqual = require("react-fast-compare");

// Types
import { Cell } from "@/app/lib/interfaces";

// Components
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { EMPTY_DATA_MESSAGE } from "@/app/lib/constants";

interface Props<T> {
  data: T[];
  columns: Cell[];
}

const Table = <T,>({ columns, data, ...props }: Props<T>) => (
  <table className="hidden min-w-full border rounded-md text-black-100 md:table">
    <TableHeader columns={columns} />
    <tbody>
      {data.length ? (
        data.map((item, index) => (
          <TableRow key={index} rows={columns} itemData={item} {...props} />
        ))
      ) : (
        <tr>
          <td
            colSpan={columns.length}
            className="text-center py-3 text-sm"
            data-testid="no-data-message">
            {EMPTY_DATA_MESSAGE}
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

export default memo(Table, isEqual);
