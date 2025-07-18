import React from 'react';
import { Avatar, type SxProps, type Theme } from '@mui/material';

export interface ACAvatarProps {
  src?: string;
  alt?: string;
  label?: string; // Iniziali o fallback text
  size?: number; // dimensione in pixel
  color?: string; // colore testo
  bgcolor?: string; // colore sfondo
  sx?: SxProps<Theme>; // stile aggiuntivo
  onClick?: () => void;
}

const ACAvatar: React.FC<ACAvatarProps> = ({
  src,
  alt,
  label,
  size = 40,
  color = '#fff',
  bgcolor = '#1976d2',
  sx,
  onClick,
}) => {
  return (
    <Avatar
      src={src}
      alt={alt ?? label}
      onClick={onClick}
      sx={{
        width: size,
        height: size,
        bgcolor,
        color,
        fontSize: size * 0.4,
        cursor: onClick ? 'pointer' : 'default',
        ...sx,
      }}
    >
      {!src && label ? label : null}
    </Avatar>
  );
};

export default ACAvatar;
