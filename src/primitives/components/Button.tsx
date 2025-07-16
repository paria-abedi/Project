import React, { ForwardedRef } from 'react';
import { Button } from '@mui/material';

type CustomVariant =
  | 'primary-contained'
  | 'secondary-contained'
  | 'primary-outlined'
  | 'secondary-outlined'
  | 'palnner'
  | 'primary-ghost'
  | 'secondary-ghost';
  
type AppButtonProps = Omit<React.ComponentProps<typeof Button>, 'variant'> & {
  variant?: CustomVariant | React.ComponentProps<typeof Button>['variant'];
  children: React.ReactNode;
};

const AppButton = React.forwardRef<HTMLButtonElement, AppButtonProps>(
  ({ children, variant, ...props }, forwardedRef: ForwardedRef<HTMLButtonElement>) => {
    return (
      <Button disableRipple variant={variant as never} ref={forwardedRef} {...props}>
        {children}
      </Button>
    );
  }
);

AppButton.displayName = 'AppButton';

export default AppButton;
