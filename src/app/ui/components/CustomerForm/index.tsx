"use client";

import { memo, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import isEqual from "react-fast-compare";
import { useRouter } from "next/navigation";

// Components
import { Button, Input } from "..";
import { ROUTES } from "@/app/lib/constants";
import { Customer } from "@/app/lib/interfaces";
import { isEnableSubmitButton, rulesValidate } from "@/app/lib/utils";
import { createCustomer } from "@/app/lib/actions";

interface IProps {
  customer?: Customer;
}

const CustomerForm = ({ customer }: IProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isValid, dirtyFields },
  } = useForm<Customer>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      ...customer,
    },
  });

  const onSubmit = async (data: Customer) => {
    try {
      setIsLoading(true);
      
      await createCustomer(data);
      setIsLoading(false);

      isLoading && router.back();
      // openToast({
      //   type: TOAST_TYPE.SUCCESS,
      //   message: ADD_NEW_CUSTOMER.SUCCESS,
      // });
    } catch (err: any) {
      // openToast({
      //   type: TOAST_TYPE.ERROR,
      //   message: ADD_NEW_CUSTOMER.FAILED,
      // });
    }
  };

  const REQUIRED_FIELDS = ['firstName', 'lastName', 'email', 'address'];

  // Checking to disable/enable submit button
  const dirtyItems = Object.keys(dirtyFields);
  const isEnableSubmit = useMemo(
    () => isEnableSubmitButton(REQUIRED_FIELDS, dirtyItems, errors),
    [dirtyItems, errors, REQUIRED_FIELDS],
  );

  // Handle disable submit button
  const isDisableSubmit = !isEnableSubmit || !isValid;

  const handleCancel = () => router.push(ROUTES.CUSTOMERS);

  return (
    <div className="rounded-md bg-bgForm p-4 w-2/4 md:p-6 bg-white mt-10">
      <p className="text-center text-xl text-blue-600">Add new customer</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="firstname" className="label--primary">
            First Name
          </label>
          <Input
            id="firstName"
            data-testid="first_name"
            errorMessage={errors?.firstName?.message}
            {...register("firstName", rulesValidate.firstName)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="label--primary">
            Last Name
          </label>
          <Input
            id="firstName"
            data-testid="last_name"
            errorMessage={errors?.lastName?.message}
            {...register("lastName", rulesValidate.lastName)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="label--primary">
            Email
          </label>
          <Input
            id="email"
            errorMessage={errors.email?.message}
            {...register("email", rulesValidate.email)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="label--primary">
            Address
          </label>
          <Input
            id="address"
            errorMessage={errors.address?.message}
            {...register("address", rulesValidate.address)}
          />
        </div>

        <div className="mt-6 flex justify-center">
          <Button
            onClick={handleCancel}
            className="bg-gray-100 w-40 mr-5 text-white">
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isDisableSubmit}
            isLoading={isLoading}
            className="text-white w-40 bg-blue-400">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default memo(CustomerForm, isEqual);
