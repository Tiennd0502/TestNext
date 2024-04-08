"use client";

import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import isEqual from "react-fast-compare";
import { useRouter } from "next/navigation";

// Components
import { Button, Input } from "..";

import {
  ERROR_MESSAGES,
  ROUTES,
  SUCCESS_MESSAGES,
  TOAST_TYPE,
} from "@/app/lib/constants";

import { Customer } from "@/app/lib/interfaces";

import { rulesValidate } from "@/app/lib/utils";

import { createCustomer, editCustomer } from "@/app/lib/actions";

import { useToast } from "@/app/lib/hooks/useToast";

interface IProps {
  customer?: Customer;
}

const CustomerForm = ({ customer }: IProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { openToast } = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isDirty },
  } = useForm<Customer>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      ...customer,
    },
  });

  const onSubmit = async (data: Customer) => {
    const isEdit = data?.id;

    try {
      setIsLoading(true);

      isEdit ? await editCustomer(data) : await createCustomer(data);
      setIsLoading(false);

      openToast({
        type: TOAST_TYPE.SUCCESS,
        message: isEdit
          ? SUCCESS_MESSAGES.EDIT_CUSTOMER
          : SUCCESS_MESSAGES.ADD_NEW_CUSTOMER,
      });
      !isLoading && router.back();
    } catch (err) {
      setIsLoading(false);
      openToast({
        type: TOAST_TYPE.ERROR,
        message: ERROR_MESSAGES.DEFAULT_API_ERROR,
      });
    }
  };

  // Handle disable submit button
  const isDisableSubmit = !isDirty || !isValid;

  const handleCancel = () => router.push(ROUTES.CUSTOMERS);

  return (
    <div className="rounded-md bg-bgForm p-4 w-2/4 md:p-6 bg-white mt-10">
      <p className="text-center text-xl text-blue-600">{`${customer?.id ? "Edit" : "Add"} new customer`}</p>
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
