import { Box, LinearProgress } from '@mui/material';
import type React from 'react';

export interface ACLinearProgressProps {
  color?: string;
}

const ACLinearProgress: React.FC<ACLinearProgressProps> = ({ color }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress
        value={100}
        sx={{
          borderRadius: 5,
          backgroundColor: '#e0e0e0', // colore del background
          '& .MuiLinearProgress-bar': {
            backgroundColor: color, // colore della barra
          },
        }}
      />
    </Box>
  );
};

export default ACLinearProgress;
