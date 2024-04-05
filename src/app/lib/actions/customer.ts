"use server";
import { API_ROUTES, ERROR_MESSAGES, ROUTES } from "../constants";
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

export const createCustomer = async (payload: Customer) => {
  try {
    await APIs.post<Customer>(API_ROUTES.CUSTOMER, payload);
  } catch (error) {
    return {
      message: ERROR_MESSAGES.DEFAULT_API_ERROR,
    };
  }
};
