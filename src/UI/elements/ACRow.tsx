import React from 'react';
import { Box, Grid, type GridProps } from '@mui/material';

export interface ACRowProps extends GridProps {
  children: React.ReactNode;
  spacing?: number;
}

const ACRow: React.FC<ACRowProps> = ({ children, spacing = 2, ...props }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={spacing} {...props} sx={{ width: '100%', ...props.sx }}>
        {children}
      </Grid>
    </Box>
  );
};

export default ACRow;
