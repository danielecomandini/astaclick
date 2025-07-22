export interface ACInputField {
  value: any;
  valid: boolean;
  required?: boolean;
  validation?: {
    method: (value: any) => boolean;
    errMsg: string;
  };
}
