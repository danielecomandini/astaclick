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
    }
  });

  return {
    isValid: isValid,
    updatedFormData: formData,
  };
};

// GSMP FedEX Carrier Split Delivery
