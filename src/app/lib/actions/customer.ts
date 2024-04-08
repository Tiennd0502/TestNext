"use server";
import { API_ROUTES, ERROR_MESSAGES } from "../constants";
import { APIs } from "../services/request-api";
import { Customer } from "../interfaces";

export const getCustomer = async () => {
  let errorMessage = "";
  let data = [] as Customer[];

  await APIs.get<Customer[]>(API_ROUTES.CUSTOMER)
    .then(results => {
      data = results;
    })
    .catch(error => {
      errorMessage = error || ERROR_MESSAGES.DEFAULT_API_ERROR;
    });

  return {
    errorMessage,
    data,
  };
};

export const getCustomerDetail = async (customerId: string) => {
  let errorMessage = "";
  let data = {} as Customer;
  let isLoading = true;

  await APIs.get<Customer>(API_ROUTES.CUSTOMER_DETAIL(customerId))
    .then(results => {
      data = results;
      isLoading = false;
    })
    .catch(error => {
      errorMessage = error || ERROR_MESSAGES.DEFAULT_API_ERROR;
      isLoading = false;
    });

  return {
    errorMessage,
    data,
    isLoading,
  };
};

export const createCustomer = async (payload: Customer) => {
  try {
    await APIs.post<Customer>(API_ROUTES.CUSTOMER, payload);
  } catch (error) {
    return {
      message: error || ERROR_MESSAGES.DEFAULT_API_ERROR,
    };
  }
};

export const removeCustomer = async (customerId: string) => {
  try {
    await APIs.delete(API_ROUTES.CUSTOMER_DETAIL(customerId));
  } catch (error) {
    return {
      message: error || ERROR_MESSAGES.DEFAULT_API_ERROR,
    };
  }
};

export const editCustomer = async (customer: Customer) => {
  try {
    await APIs.put<Customer>(API_ROUTES.CUSTOMER_DETAIL(customer.id), customer);
  } catch (error) {
    return {
      message: error || ERROR_MESSAGES.DEFAULT_API_ERROR,
    };
  }
};
