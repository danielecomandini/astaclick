import React, { useCallback } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { ASTA_CLICK_PALETTE } from '../themes/ACPalette';
import type { ACSelectInputProps } from './ACInputProps';

const ACSelect: React.FC<ACSelectInputProps> = ({ id, label = id, value, setValue, color }) => {
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
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {label} {value[id].required ? '*' : ''}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id={id}
          // value={age}
          label="Age"
          onChange={onChangeHandler}
          sx={{
            width: '200px',
            marginBottom: '15px',

            // Colore label (normale, focused, error)
            '& label': {
              color: color || ASTA_CLICK_PALETTE.INPUT.COLOR,
            },
            '& label.Mui-focused': {
              color: color || ASTA_CLICK_PALETTE.INPUT.COLOR,
            },
            '& label.Mui-error': {
              color: color || ASTA_CLICK_PALETTE.INPUT.COLOR,
            },

            // Colore asterisco * di required nella label
            '& label .MuiFormLabel-asterisk': {
              color: color || ASTA_CLICK_PALETTE.INPUT.COLOR,
            },

            // Stili per il campo input con bordo
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

            // Colore testo dentro l'input
            '& .MuiOutlinedInput-input': {
              color: color || ASTA_CLICK_PALETTE.INPUT.COLOR,
            },

            // Colore helper text (normale e errore)
            '& .MuiFormHelperText-root': {
              color: color || ASTA_CLICK_PALETTE.INPUT.COLOR,
            },
            '& .MuiFormHelperText-root.Mui-error': {
              color: color || ASTA_CLICK_PALETTE.INPUT.COLOR,
            },
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ACSelect;
