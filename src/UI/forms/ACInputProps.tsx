import type { ACInputField } from './ACInputField';

export interface ACGenericInputProps {
  id: string;
  label?: string;
  value: Record<string, ACInputField>;
  setValue: (newValue: Record<string, ACInputField>) => void;
  color?: string;
}

export interface ACTextInputProps extends ACGenericInputProps {
  type?: string;
}

export interface ACSelectInputProps extends ACGenericInputProps {}
