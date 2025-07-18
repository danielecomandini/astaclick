import type { ReactNode } from 'react';
import { Alert, type AlertProps } from '@mui/material';
import type { ACIconProps } from './ACIcon';

export interface ACAlertProps {
  children: ReactNode;
  severity: 'success' | 'error' | 'info' | 'warning';
  icon?: ACIconProps;
  variant?: AlertProps['variant'];
}

const ACAlert: React.FC<ACAlertProps> = ({
  children,
  severity = 'success',
  variant = 'standard',
}) => {
  return (
    <Alert severity={severity || 'success'} variant={variant}>
      {children}
    </Alert>
  );
};

export default ACAlert;
