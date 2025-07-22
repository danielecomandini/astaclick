export interface ACInputField {
  value: any;
  valid: boolean;
  required?: boolean;
  errMsg?: string;
  validation?: {
    method: (value: any) => boolean;
    errMsg: string;
  };
}
