import React, { useCallback } from 'react';
import { Box, TextField } from '@mui/material';
import { ASTA_CLICK_PALETTE } from '../themes/ACPalette';
import type { ACTextInputProps } from './ACInputProps';

const ACInput: React.FC<ACTextInputProps> = ({ id, label = id, value, setValue, color }) => {
  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      const current = { ...value[id] };
      (current.value = newValue), (current.valid = true);

      setValue({
        ...value,
        [id]: current,
      });
    },
    [id, setValue]
  );

  return (
    <Box>
      <TextField
        id={id}
        label={label}
        value={value[id].value || ''}
        onChange={onChangeHandler}
        required={true}
        error={!value[id].valid}
        helperText={(!value[id].valid && value[id].errMsg) || ''}
        sx={{
          width: '200px',
          marginBottom: '15px',
          '& label.MuiInputLabel-root': {
            color: color || ASTA_CLICK_PALETTE.INPUT.COLOR,
          },

          // Colora anche l'asterisco * in label required
          '& label .MuiFormLabel-asterisk': {
            color: color || ASTA_CLICK_PALETTE.INPUT.COLOR,
          },
          '& .MuiOutlinedInput-root': {
            backgroundColor: `${ASTA_CLICK_PALETTE.INPUT.BG_COLOR}${ASTA_CLICK_PALETTE.INPUT.OPACITY}`,
            '& fieldset': {
              borderWidth: 1,
              borderColor: color || ASTA_CLICK_PALETTE.INPUT.COLOR,
            },
            '&:hover fieldset': {
              borderColor: color || ASTA_CLICK_PALETTE.INPUT.COLOR,
            },
            '&.Mui-focused fieldset': {
              borderWidth: 3,
              borderColor: color || ASTA_CLICK_PALETTE.INPUT.COLOR,
            },
            '&.Mui-error fieldset': {
              borderColor: color || ASTA_CLICK_PALETTE.INPUT.COLOR,
            },
            '&.Mui-error.Mui-focused fieldset': {
              borderWidth: 3,
              borderColor: color || ASTA_CLICK_PALETTE.INPUT.COLOR,
            },
          },

          '& .MuiOutlinedInput-input': {
            color: color || ASTA_CLICK_PALETTE.INPUT.COLOR,
          },

          // ✅ Colore label in stato normale
          '& label': {
            color: color || ASTA_CLICK_PALETTE.INPUT.COLOR,
          },

          // ✅ Colore label in stato focused
          '& label.Mui-focused': {
            color: color || ASTA_CLICK_PALETTE.INPUT.COLOR,
          },

          // ✅ Colore label in stato errore
          '& label.Mui-error': {
            color: color || ASTA_CLICK_PALETTE.INPUT.COLOR,
          },

          // ✅ Colore helperText in stato normale
          '& .MuiFormHelperText-root': {
            color: color || ASTA_CLICK_PALETTE.INPUT.COLOR,
          },

          // ✅ Colore helperText in stato errore
          '& .MuiFormHelperText-root.Mui-error': {
            color: color || ASTA_CLICK_PALETTE.INPUT.COLOR,
          },
        }}
      />
    </Box>
  );
};

export default ACInput;
