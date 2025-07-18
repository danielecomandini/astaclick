import React from 'react';
import type { ComponentType } from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';

export interface ACIconProps {
  icon: ComponentType<{
    size?: number | string;
    color?: string;
    strokeWidth?: number;
    className?: string;
  }>;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
  sx?: SxProps<Theme>;
}

const ACIcon: React.FC<ACIconProps> = ({
  icon: Icon,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  className,
  sx,
}) => {
  return (
    <Box sx={sx} display="inline-flex" alignItems="center" justifyContent="center">
      <Icon size={size} color={color} strokeWidth={strokeWidth} className={className} />
    </Box>
  );
};

export default ACIcon;
