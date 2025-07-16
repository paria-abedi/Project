'use client';

import React, { ForwardedRef } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type AppTextFieldProps = Omit<TextFieldProps, 'variant'> & {
  variant?: 'outlined' | 'filled' | 'standard'; // Optionally restrict variant types
  children?: React.ReactNode; // Optional if you want to add child components
};
const AppTextField = React.forwardRef<HTMLInputElement, AppTextFieldProps>(
  ({ variant = 'outlined', children, ...props }, forwardedRef: ForwardedRef<HTMLInputElement>) => {
    return (
      <TextField variant={variant} inputRef={forwardedRef} {...props}>
        {children}
      </TextField>
    );
  }
);

AppTextField.displayName = 'AppTextField';

export default AppTextField;
