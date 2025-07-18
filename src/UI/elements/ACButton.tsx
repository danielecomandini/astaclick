import { Button, type ButtonProps } from '@mui/material';
import type { ReactEventHandler, ReactNode } from 'react';

export interface ACButtonProps {
  children: ReactNode;
  variant?: ButtonProps['variant'];
  onClick: ReactEventHandler<HTMLButtonElement>;
}

const ACButton: React.FC<ACButtonProps> = ({ children, onClick, variant = 'contained' }) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ACButton;
