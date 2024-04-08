export const ERROR_MESSAGES = {
  NETWORK_ERROR: "Network is not working",
  DEFAULT_API_ERROR: "Something went wrong. Please try again later.",

  // Validation
  FIELD_REQUIRED: "This field is required.",

  // Dynamic error messages
  FORMAT: (ariaLabel: string) =>
    `${ariaLabel + " does not follow the correct format."}`,
};

export const SUCCESS_MESSAGES = {
  ADD_NEW_CUSTOMER: "Add new customer is successful",
  REMOVE_CUSTOMER: "Customer was removed successful",
  EDIT_CUSTOMER: "Customer was edited successful",
};

export const EMPTY_DATA_MESSAGE = "No data to display";
