// Constants
import { ERROR_MESSAGES, REGEX_PATTERN } from "../constants";

export const rulesValidate = {
  firstName: {
    required: ERROR_MESSAGES.FIELD_REQUIRED,
  },
  lastName: {
    required: ERROR_MESSAGES.FIELD_REQUIRED,
  },
  email: {
    required: ERROR_MESSAGES.FIELD_REQUIRED,
    pattern: {
      value: REGEX_PATTERN.EMAIL,
      message: ERROR_MESSAGES.FORMAT("Email"),
    },
  },
  address: {
    required: ERROR_MESSAGES.FIELD_REQUIRED,
  },
};
