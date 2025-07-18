import { Button, type ButtonProps } from '@mui/material';
import type { ComponentType, ReactElement, ReactEventHandler, ReactNode } from 'react';
import ACIcon from './ACIcon';

export interface ACButtonProps {
  children: ReactNode;
  onClick: ReactEventHandler<HTMLButtonElement>;
  variant?: ButtonProps['variant'];
  icon?: ComponentType;
  iconSize?: number;
  iconPosition?: 'left' | 'right';
}

const ACButton: React.FC<ACButtonProps> = ({
  children,
  onClick,
  variant = 'contained',
  icon,
  iconSize = 16,
  iconPosition = 'left',
}) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {icon && iconPosition === 'left' && (
        <ACIcon icon={icon} size={iconSize} sx={{ marginRight: '5px' }} />
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <ACIcon icon={icon} size={iconSize} sx={{ marginLeft: '5px' }} />
      )}
    </Button>
  );
};

export default ACButton;
