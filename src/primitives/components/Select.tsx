'use client';

import React, { ForwardedRef, useState } from 'react';
import { FormControl, InputLabel, Select, SelectProps, styled } from '@mui/material';

import { colorPalette } from '@/libs/theme';
import SelectArrow from '../../../public/icon/SelectArrow';

type AppSelectProps = Omit<SelectProps, 'variant'> & {
  variant?: 'outlined' | 'filled' | 'standard';
  label?: string;
  value?: string; // Ensure that value is passed as a controlled prop
  onChange?: (event: React.ChangeEvent<{ value: unknown }>) => void;
};

const AppSelect = React.forwardRef<HTMLDivElement, AppSelectProps>(
  (
    { variant = 'outlined', label, value = '', onChange, children, ...props },
    forwardedRef: ForwardedRef<HTMLDivElement>
  ) => {
    const [open, setOpen] = useState(false);

    return (
      <FormControl fullWidth variant={variant} ref={forwardedRef}>
        <InputLabel
          sx={{
            fontSize: '12px',
            marginRight: '16px',
            top: open || value ? -1 : '0%',
            // transform: open || value ? 'translate(0, 0%) scale(1.1)' : 'translate(0, 0%) scale(1)',
            transition: 'all 0.2s ease-in-out',
            pointerEvents: 'none', // Prevent label from blocking clicks
          }}
          id={`${label}-label`}
        >
          {label}
        </InputLabel>
        <Select
          sx={{
            fontSize: '14px', // Placeholder font size
            '& .MuiSelect-select': {
              fontSize: '14px', // Inside text
            },
          }}
          value={value} // Ensure value is always provided
          onChange={onChange}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          labelId={`${label}-label`}
          label={label}
          style={{ position: 'relative' }}
          {...props} // Spread remaining props like value, onChange, etc.
        >
          {children}
        </Select>
        <SelectArrowIcon
          open={open}
          width={10}
          height={10}
          style={{ position: 'absolute', left: 20, top: 20 }}
        />
      </FormControl>
    );
  }
);

AppSelect.displayName = 'AppSelect';

export default AppSelect;

const SelectArrowIcon = styled(SelectArrow)<{ open: boolean }>(({ open }) => ({
  transition: 'transform 0.3s', // Smooth rotation transition
  transform: open ? 'rotate(180deg)' : 'rotate(0deg)', // Rotate icon based on the open state
  path: {
    fill: colorPalette.gray[9],
  },
}));
