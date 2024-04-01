"use client";

import React, { useState, memo } from "react";
import { DateRange } from "react-date-range";

import { Input } from "@/app/ui/components";

import { ChevronDownIcon } from "@/app/ui/icons";

import { formatDateRangeValue } from "@/app/lib/utils";

const DateRangePickerCustom = () => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const [isOpen, setIsOpen] = useState<Boolean>(false);
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
            onChange={(item: any) => setState([item.selection])}
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
