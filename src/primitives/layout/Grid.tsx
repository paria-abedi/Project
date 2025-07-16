import React, { forwardRef } from 'react';

import { Grid2Props as MuiGridProps } from '@mui/material/';
import Grid from '@mui/material/Grid2';

const CustomGrid = forwardRef<HTMLDivElement, MuiGridProps>((props, ref) => {
  return <Grid {...props} ref={ref} />;
});

CustomGrid.displayName = 'CustomGrid';

export default CustomGrid;
