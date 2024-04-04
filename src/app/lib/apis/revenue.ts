import { API_ROUTES, ERROR_MESSAGES } from "../constants";
import { APIs } from "../services/request-api";
import { Revenue } from "../interfaces";

export const getRevenues = async () => {
  let errorMessage = "";
  let data = [] as Revenue[];
  await APIs.get<Revenue[]>(API_ROUTES.REVENUE)
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
