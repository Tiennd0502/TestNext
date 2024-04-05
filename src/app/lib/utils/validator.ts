// Constants
import { ERROR_MESSAGES, REGEX_PATTERN } from "../constants";

/**
 * @param requiredFields [] The required fields on form
 * @param dirtyFields [] The fields, which the users touched and fill data on
 * @param errors {} The errors fields
 * NOTE: If the user touched and fill data for the fields, which defined on array requiredFields and without errors message
 *  ==> The button should enable.
 * When the button enable AND user focusing on the last element
 * the UX: hit `enter` on the last field to submit form should work
 */
export const isEnableSubmitButton = (
  requiredFields: string[] = [],
  dirtyFields: string[] = [],
  errors: Record<string, unknown>,
): boolean => {
  const isMatchAllRequiredFields: boolean = requiredFields.every(field =>
    dirtyFields.includes(field),
  );

  return isMatchAllRequiredFields && errors && !Object.keys(errors).length;
};

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
