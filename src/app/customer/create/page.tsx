import { Metadata } from "next";

// Components
import { CustomerForm } from "@/app/ui/components";

export const metadata: Metadata = {
  title: "Create Customer Page",
};

const CreateCustomer = () => {
  return (
    <>
      <div className="flex justify-center w-full">
        <CustomerForm />
      </div>
    </>
  );
};

export default CreateCustomer;
