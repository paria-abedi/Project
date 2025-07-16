// src/types/mui.d.ts
import '@mui/system';

declare module '@mui/material/Button' {
  interface ButtonProps {
    variant?:
      | 'primary-contained'
      | 'secondary-contained'
      | 'primary-outlined'
      | 'secondary-outlined'
      | 'contained'
      | 'outlined'
      | 'text'
      | 'palnner'
      | 'palnner'
      | 'primary-ghost'
      | 'secondary-ghost';
  }
}

declare module '@mui/system' {
  interface BreakpointOverrides {
    laptop: true;
    tablet: true;
    xtablet: true;
    mobile: true;
    desktop: true;
    // Remove default breakpoints
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}
