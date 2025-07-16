// components/Box.tsx
import React, { forwardRef } from 'react';

import Box, { BoxProps as MuiBoxProps } from '@mui/material/Box';

const CustomBox = forwardRef<HTMLDivElement, MuiBoxProps>((props, ref) => {
  return <Box {...props} ref={ref} />;
});

CustomBox.displayName = 'CustomBox';

export default CustomBox;
