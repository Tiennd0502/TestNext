"use client";

import { memo, useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
const isEqual = require("react-fast-compare");
import { useRouter } from "next/navigation";

import { Table } from "@/app/ui/components";

// Lazy load the Modal component
const ConfirmModal = dynamic(() => import("@/app/ui/components/common/Modal"));

import { Customer } from "@/app/lib/interfaces";

import {
  CUSTOMER_COLUMNS,
  ERROR_MESSAGES,
  ROUTES,
  SUCCESS_MESSAGES,
  TOAST_TYPE,
} from "@/app/lib/constants";
import { removeCustomer } from "@/app/lib/actions";
import { useToast } from "@/app/lib/hooks/useToast";

export const metadata: Metadata = {
  title: "Customer",
  description: "Customer Overview",
};

interface IProps {
  data: Customer[];
}
const CustomerTable = ({ data }: IProps) => {
  const { openToast } = useToast();
  const router = useRouter();

  const [selectedIdCustomer, setSelectedIdCustomer] = useState<string>("");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRemoveCustomer = async () => {
    try {
      setIsLoading(true);

      await removeCustomer(selectedIdCustomer);
      setIsLoading(false);

      openToast({
        type: TOAST_TYPE.SUCCESS,
        message: SUCCESS_MESSAGES.REMOVE_CUSTOMER,
      });
      setIsOpenModal(false);
    } catch (err) {
      openToast({
        type: TOAST_TYPE.ERROR,
        message: ERROR_MESSAGES.DEFAULT_API_ERROR,
      });
    }
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      <Table
        data={data}
        columns={CUSTOMER_COLUMNS}
      />

      {isOpenModal && (
        <ConfirmModal
          title="Delete Confirmation"
          isOpen={isOpenModal}
          isLoading={isLoading}
          onClose={handleCloseModal}
          onSubmit={handleRemoveCustomer}>
          <div className="relative p-6 flex justify-center">
            Are you sure you want to delete this item?
          </div>
        </ConfirmModal>
      )}
    </>
  );
};

export default memo(CustomerTable, isEqual);
