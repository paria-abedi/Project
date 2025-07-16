// src/components/Typography.tsx

import React from 'react';

import { Typography as MuiTypography, TypographyProps } from '@mui/material';

const CustomTypography: React.FC<TypographyProps> = props => {
  return <MuiTypography {...props} />;
};

export default CustomTypography;
