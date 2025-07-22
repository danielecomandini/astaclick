type ValidationMethod = (value: any) => boolean;

export interface ACInputField {
  value: any;
  valid: boolean;
  validation?: {
    method: ValidationMethod;
    errMsg: string;
  };
}

export const validateFormData = (
  formData: Record<string, ACInputField>
): {
  isValid: boolean;
  updatedFormData: Record<string, ACInputField>;
} => {
  console.log();
  return {
    isValid: true,
    updatedFormData: formData,
  };
};
