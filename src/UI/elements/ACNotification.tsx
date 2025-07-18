import { useEffect, type ComponentType, type ReactEventHandler, type ReactNode } from 'react';
import { Snackbar } from '@mui/material';
import ACIcon from './ACIcon';

export interface ACNotificationProps {
  children: ReactNode;
  open: boolean;
  onClose?: () => void;
  icon?: ComponentType;
  duration?: number;
}

const ACNotification: React.FC<ACNotificationProps> = ({
  children,
  open,
  onClose,
  icon,
  duration,
}) => {
  const notification = (
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      {icon && <ACIcon icon={icon} size={16} sx={{ marginRight: '5px' }} />}
      {children}
    </span>
  );

  useEffect(() => {
    if (onClose && open) {
      const timer = setTimeout(() => {
        onClose();
      }, duration || 3000);

      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  return <Snackbar open={open} message={notification} />;
};

export default ACNotification;
