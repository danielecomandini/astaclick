export interface ACInputField {
  value: any;
  valid: boolean;
  required?: boolean;
  validation?: {
    method: ValidationMethod;
    errMsg: string;
  };
}
