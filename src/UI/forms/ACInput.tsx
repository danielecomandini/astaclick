import React from 'react';
import { Box, TextField } from '@mui/material';
import { ASTA_CLICK_PALETTE } from '../themes/ACPalette';
import type { ACInputField } from './ACInputField';

export interface ACInputProps {
  id: string;
  label?: string;
  value: Record<string, ACInputField>;
  setValue: (newValue: Record<string, ACInputField>) => void;
  color?: string;
}

const ACInput: React.FC<ACInputProps> = ({ id, label = id, value, setValue, color }) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const newValue = e.target.value;

    setValue({
      ...value,
      [id]: {
        value: newValue,
        valid: true,
      },
    });
  };

  return (
    <Box>
      <TextField
        id={id}
        label={label}
        value={value[id].value || ''}
        onChange={onChangeHandler}
        sx={{
          marginBottom: '15px',
          '& .MuiOutlinedInput-root': {
            backgroundColor: `${ASTA_CLICK_PALETTE.DEFAULT.PRIMARY}${ASTA_CLICK_PALETTE.INPUT.OPACITY}`,
            '& fieldset': {
              borderWidth: 1,
              borderColor: color || ASTA_CLICK_PALETTE.DEFAULT.SECONDARY,
            },
            '&:hover fieldset': {
              borderColor: color || ASTA_CLICK_PALETTE.DEFAULT.SECONDARY,
            },
            '&.Mui-focused fieldset': {
              borderWidth: 3,
              borderColor: color || ASTA_CLICK_PALETTE.DEFAULT.SECONDARY,
            },
          },
          '& .MuiOutlinedInput-input': {
            color: color || ASTA_CLICK_PALETTE.DEFAULT.SECONDARY,
          },
          '& label': {
            color: color || ASTA_CLICK_PALETTE.DEFAULT.SECONDARY,
          },
          '& label.Mui-focused': {
            color: color || ASTA_CLICK_PALETTE.DEFAULT.SECONDARY,
          },
          '& .MuiFormHelperText-root': {
            color: color || ASTA_CLICK_PALETTE.DEFAULT.SECONDARY,
          },
        }}
      />
    </Box>
  );
};

export default ACInput;
