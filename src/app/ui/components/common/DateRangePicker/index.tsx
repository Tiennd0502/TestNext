"use client";

import React, { useState, memo } from "react";
import { DateRange, RangeKeyDict } from "react-date-range";

import { Input } from "@/app/ui/components";

import { ChevronDownIcon } from "@/app/ui/icons";

import { formatDateRangeValue } from "@/app/lib/utils";

const DateRangePickerCustom = () => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [state, setState] = useState([
    {
      startDate: new Date(currentYear, currentMonth, 1),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const onChange = (item: { selection: RangeKeyDict }) => {
    setState(item?.selection);
  };

  return (
    <div className="flex items-end flex-col">
      <div className="bg-while max-w-52">
        <Input
          name="title"
          type="button"
          value={formatDateRangeValue(state[0].startDate, state[0].endDate)}
          onClick={onToggle}
          rightIconElement={<ChevronDownIcon />}
        />
      </div>
      <div>
        {isOpen && (
          <DateRange
            showDateDisplay={false}
            editableDateInputs={true}
            onChange={onChange}
            moveRangeOnFirstSelection={false}
            ranges={state}
            dateDisplayFormat="PP"
          />
        )}
      </div>
    </div>
  );
};

export default memo(DateRangePickerCustom);
