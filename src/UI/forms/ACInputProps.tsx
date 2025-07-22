import type { ACInputField } from './ACInputField';

export interface ACInputProps {
  id: string;
  label?: string;
  value: Record<string, ACInputField>;
  setValue: (newValue: Record<string, ACInputField>) => void;
  color?: string;
}
