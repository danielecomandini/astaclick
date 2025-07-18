import React from 'react';
import { Typography, type SxProps, type Theme, type TypographyProps } from '@mui/material';
import type { ReactNode } from 'react';

export interface ACTextProps {
  children: ReactNode;
  color?: string;
  bold?: boolean;
  variant?: TypographyProps['variant'];
  sx?: SxProps<Theme>;
}

const ACText: React.FC<ACTextProps> = ({ children, color = 'black', variant = 'h6', sx, bold }) => {
  return (
    <Typography variant={variant} color={color} fontWeight={bold ? 'bold' : ''} sx={sx}>
      {children}
    </Typography>
  );
};

export default ACText;
