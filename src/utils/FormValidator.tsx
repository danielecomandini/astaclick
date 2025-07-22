import type { ACInputField } from '../UI/forms/ACInputField';

export const validateFormData = (
  formData: Record<string, ACInputField>
): {
  isValid: boolean;
  updatedFormData: Record<string, ACInputField>;
} => {
  let isValid = true;

  Object.keys(formData).forEach((id) => {
    const { value, required } = formData[id];
    if (required && value.trim().length === 0) {
      formData[id].valid = false;
      formData[id].errMsg = `Questo campo e' obbligatorio`;
    } else if (formData[id].validation) {
      const { method, errMsg } = formData[id].validation;
      const result = eval(`(${method})`)(value);
      if (!result) {
        formData[id].valid = false;
        formData[id].errMsg = errMsg;
      }
    }
  });

  return {
    isValid: isValid,
    updatedFormData: { ...formData },
  };
};
