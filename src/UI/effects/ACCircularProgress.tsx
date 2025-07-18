import { Box, CircularProgress } from '@mui/material';
import type React from 'react';

export interface ACCircularProgressProps {
  color?: string;
}

const ACCircularProgress: React.FC<ACCircularProgressProps> = ({ color }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <CircularProgress
        value={100}
        sx={{
          color: color,
          borderRadius: 5,
          backgroundColor: '#e0e0e0', // colore del background
        }}
      />
    </Box>
  );
};

export default ACCircularProgress;
