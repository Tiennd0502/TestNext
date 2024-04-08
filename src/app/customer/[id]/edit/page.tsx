import { Metadata } from "next";

// Components
import { CustomerForm } from "@/app/ui/components";
import { getCustomerDetail } from "@/app/lib/actions";

export const metadata: Metadata = {
  title: "Edit Customer Page",
};

const EditCustomer = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { data } = await getCustomerDetail(id);

  return (
    <>
      <div className="flex justify-center w-full">
        <CustomerForm customer={data}/>
      </div>
    </>
  );
};

export default EditCustomer;

