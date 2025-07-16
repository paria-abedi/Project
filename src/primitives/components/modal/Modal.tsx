'use client';

import { forwardRef } from 'react';

import { Dialog, DialogProps, styled } from '@mui/material';
import { Typography } from '@mui/material';


import { breakpoints, colorPalette } from '@/libs/theme';

import Flex from '../../layout/Flex';
import Grid from '../../layout/Grid';
import Close from '../../../../public/icon/Close';

/**
 * props
 * _______________________________________________________________________________
 */
type Props = {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  title: string;
} & DialogProps;

// Refactored Modal component with forwardRef
const Modal = forwardRef<HTMLDivElement, Props>(
  ({ handleClose, open, children, title, ...props }: Props, ref) => {
    /**
     * const and variables
     * _______________________________________________________________________________
     */

    /**
     * useEffect
     * _______________________________________________________________________________
     */

    /**
     * hooks and methods
     * _______________________________________________________________________________
     */

    /**
     * template
     * _______________________________________________________________________________
     */
    return (
      <ModalStyle onClose={handleClose} open={open} ref={ref} {...props}>
        <Flex
          alignItems={'center'}
          style={{ backgroundColor: `${colorPalette.blue[1]}` }}
          direction={'row'}
          p={'8px 16px'}
          justifyContent={'space-between'}
        >
          <Typography color={colorPalette.gray[1]} fontWeight={'700'} variant='body1'>
            {title}
          </Typography>
          <Flex
            sx={{ backgroundColor: colorPalette.blue[1], cursor: 'pointer' }}
            width={'28px'}
            height={'28px'}
            borderRadius={'8px'}
            justifyContent={'center'}
            alignItems={'center'}
            onClick={handleClose}
          >
            <Close onClick={handleClose} />
          </Flex>
        </Flex>
        <Grid
          component={'section'}
          style={{ backgroundColor: colorPalette.gray[2] }}
          overflow={'scroll'}
          maxHeight={'400px'}
          className='scroll-style'
          width={'100%'}
          minWidth={'700px'}
          maxWidth={'700px'}
        >
          {children}
        </Grid>
      </ModalStyle>
    );
  }
);

Modal.displayName = 'Modal';

export default Modal;

const ModalStyle = styled(Dialog)`
  display: none;

  @media (min-width: ${breakpoints.laptop}) {
    display: block;
  }

  & .MuiPaper-root {
    border-radius: 12px !important;
    overflow: scroll;
    scrollbar-width: none !important;
  }
`;
