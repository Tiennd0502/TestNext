export const ERROR_MESSAGES = {
  NETWORK_ERROR: "Network is not working",
  DEFAULT_API_ERROR: "Something went wrong. Please try again later.",

  // Validation
  FIELD_REQUIRED: "This field is required.",

  // Dynamic error messages
  FORMAT: (ariaLabel: string) =>
    `${ariaLabel + " does not follow the correct format."}`,
};
