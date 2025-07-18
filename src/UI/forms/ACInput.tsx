import React, { useState } from 'react';
import { TextField } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';

export interface ACInputField {
  value: string;
  valid: boolean;
  errorMsg?: string;
}

interface AdditionalValidation {
  method: (value: string) => boolean;
  errorMsg: string;
}

export interface ACInputProps {
  id: string;
  label?: string;
  required?: boolean;
  value: Record<string, ACInputField>;
  setValue: (updated: Record<string, ACInputField>) => void;
  additionalValidation?: AdditionalValidation;
  color?: string; // colore unico per tutto
  type?: 'input' | 'password' | 'number' | 'date' | 'time';
}

const ACInput: React.FC<ACInputProps> = ({
  id,
  label,
  required = false,
  value,
  setValue,
  additionalValidation,
  color,
  type = 'input',
}) => {
  const field = value[id] || { value: '', valid: true, errorMsg: '' };
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [id]: { ...field, value: event.target.value },
    });
  };

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => {
    setIsFocused(false);
    const trimmed = field.value.trim();
    let valid = true;
    let errorMsg = '';

    if (required && trimmed === '') {
      valid = false;
      errorMsg = 'Campo obbligatorio';
    }

    if (valid && additionalValidation) {
      const passed = additionalValidation.method(trimmed);
      if (!passed) {
        valid = false;
        errorMsg = additionalValidation.errorMsg;
      }
    }

    setValue({
      ...value,
      [id]: { value: trimmed, valid, errorMsg },
    });
  };

  const isInvalid = !field.valid;

  const customColor = color ? color : undefined;

  const sx: SxProps<Theme> = color
    ? {
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: customColor,
          },
          '&:hover fieldset': {
            borderColor: customColor,
          },
          '&.Mui-focused fieldset': {
            borderColor: customColor,
          },
          '&.Mui-error fieldset': {
            borderColor: customColor,
          },
        },
        '& label': {
          fontWeight: 'bold',
          color: isInvalid || isFocused ? customColor : undefined,
        },
        '& label.Mui-focused': {
          color: customColor,
        },
        '& label.Mui-error': {
          color: customColor,
        },
        '& .MuiFormHelperText-root.Mui-error': {
          color: customColor,
        },
      }
    : {};

  return (
    <TextField
      id={id}
      type={type}
      label={label || id}
      value={field.value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      error={isInvalid}
      helperText={isInvalid ? field.errorMsg : ''}
      fullWidth
      required={required}
      margin="normal"
      sx={sx}
    />
  );
};

export default ACInput;
