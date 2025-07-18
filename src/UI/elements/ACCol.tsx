import React from 'react';
import { Grid, Paper, styled, type GridProps, type PaperProps } from '@mui/material';

type BreakpointSize = number | boolean | 'auto' | undefined;

export interface ACColProps extends Omit<GridProps, 'container'> {
  children: React.ReactNode;
  align?: 'left' | 'right' | 'center' | 'justify';
  xs?: BreakpointSize;
  sm?: BreakpointSize;
  md?: BreakpointSize;
  lg?: BreakpointSize;
  xl?: BreakpointSize;
}

interface ItemProps extends PaperProps {
  align?: 'left' | 'right' | 'center' | 'justify';
}

const Item = styled(Paper)<ItemProps>(({ theme, align }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: align,
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const ACCol: React.FC<ACColProps> = ({
  children,
  align = 'center',
  xs,
  sm,
  md,
  lg,
  xl,
  ...props
}) => {
  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl} {...props}>
      <Item align={align}>{children}</Item>
    </Grid>
  );
};

export default ACCol;
