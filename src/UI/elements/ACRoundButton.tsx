import { Chip } from '@mui/material';
import type React from 'react';
import type { ComponentType, ReactNode } from 'react';
import ACIcon from './ACIcon';

export interface ACChipProps {
  children: ReactNode;
  color?: string;
  icon?: ComponentType;
  iconPosition?: 'left' | 'right';
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const ACRoundButton: React.FC<ACChipProps> = ({
  children,
  color = 'black',
  icon,
  iconPosition = 'left',
  onClick, // <--- aggiunto qui
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
      onClick={onClick}
      sx={{
        color: color,
        borderColor: color,
        borderStyle: 'solid',
        borderWidth: 1,
      }}
      variant="outlined"
    />
  );
};

export default ACRoundButton;
