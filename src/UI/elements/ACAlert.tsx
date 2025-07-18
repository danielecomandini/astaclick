import type { ReactNode } from 'react';
import { Alert } from '@mui/material';
import type { ACIconProps } from './ACIcon';

export interface ACAlertProps {
  children: ReactNode;
  severity: 'success' | 'error' | 'info' | 'warning';
  icon?: ACIconProps;
}

const ACAlert: React.FC<ACAlertProps> = ({ children, severity = 'success' }) => {
  return <Alert severity={severity || 'success'}>{children}</Alert>;
};

export default ACAlert;
