"use client";
import { ROUTES } from "@/app/lib/constants";
import { Button } from "@/app/ui/components";
import { useRouter } from "next/navigation";

const CustomerHeader = () => {
  const router = useRouter();

  const handleAddNewCustomer = () => router.push(ROUTES.CREATE_CUSTOMER);

  return (
    <div className="flex justify-between h-12">
      <div>
        <p className="text-xl text-blue-600">Customer list</p>
      </div>
      <div>
        <Button
          className="flex items-center text-white bg-blue-400"
          onClick={handleAddNewCustomer}>
          Add New Customer
        </Button>
      </div>
    </div>
  );
};

export default CustomerHeader;
