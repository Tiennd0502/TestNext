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
