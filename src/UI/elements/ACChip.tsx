import { Chip } from '@mui/material';
import type React from 'react';
import type { ComponentType, ReactEventHandler, ReactNode } from 'react';
import ACIcon from './ACIcon';

export interface ACChipProps {
  children: ReactNode;
  color?: string;
  icon?: ComponentType;
  iconPosition?: 'left' | 'right';
}

const ACChip: React.FC<ACChipProps> = ({
  children,
  color = 'black',
  icon,
  iconPosition = 'left',
}) => {
  const label = (
    <>
      {icon && iconPosition === 'left' && (
        <ACIcon size={12} icon={icon} color={color} sx={{ marginRight: '5px' }} />
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <ACIcon size={12} icon={icon} color={color} sx={{ marginLeft: '5px' }} />
      )}
    </>
  );

  return (
    <Chip
      label={label}
      sx={{
        color: color, // colore testo
        borderColor: color, // colore bordo uguale al testo
        borderStyle: 'solid',
        borderWidth: 1,
      }}
      variant="outlined" // serve il bordo visibile
    />
  );
};

export default ACChip;
