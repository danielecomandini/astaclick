import Badge from '@mui/material/Badge';
import ACIcon from './ACIcon';
import type React from 'react';
import type { ComponentType } from 'react';

export interface ACBadgeProps {
  counter: number;
  icon: ComponentType;
  color?: string;
}

const ACBadge: React.FC<ACBadgeProps> = ({ counter, icon, color }) => {
  return (
    <Badge
      badgeContent={counter}
      color="primary"
      sx={{
        color: color,
        '& .MuiBadge-badge': {
          backgroundColor: color,
          color: 'white', // colore del testo dentro il badge
        },
      }}
    >
      <ACIcon icon={icon} />
    </Badge>
  );
};

export default ACBadge;
