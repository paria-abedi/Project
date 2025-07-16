'use client';

import React from 'react';

import { SwipeableDrawerProps, SwipeableDrawer, styled } from '@mui/material';

import { BoxShadow, breakpoints, colorPalette } from '@/libs/theme';

import Flex from '../layout/Flex';
import Grid from '../layout/Grid';
import Typography from './Typography';

interface Props extends SwipeableDrawerProps {
  children: React.ReactNode;
  title: string;
  isTitle?: boolean;
}

// Custom Drawer component
const BottomSheet: React.FC<Props> = ({ children, onClose, open, title, isTitle = true, ...rest }) => {
  /**
   * Template rendering
   */
  return (
    <MuiDrawerStyle
      SlideProps={{
        timeout: {
          enter: 300, // duration for opening
          exit: 300, // duration for closing
        },
      }}
      anchor='bottom'
      open={open}
      onClose={onClose}
      {...rest}
    >
      {isTitle && (
        <Flex
          className='title-style'
          padding={'12px 18px'}
          style={{
            boxShadow: BoxShadow.shadow2,
            borderBottom: `0.5px solid ${colorPalette.gray[7]}`,
            backgroundColor: colorPalette.gray[2],
          }}
        >
          <Typography color={colorPalette.gray[1]} fontWeight='600' variant='body1'>
            {title}
          </Typography>
        </Flex>
      )}
      <Grid
        sx={{ minHeight: '20vh' }}
        className='title-style scroll-style'
        component={'section'}
        style={{ backgroundColor: colorPalette.gray[1] }}
        overflow={'scroll'}
        maxHeight={'80vh'}
      >
        {children}
      </Grid>
    </MuiDrawerStyle>
  );
};

export default BottomSheet;

const MuiDrawerStyle = styled(SwipeableDrawer)`
  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }

  .title-style {
    border-top-right-radius: 8px !important;
    border-top-left-radius: 8px !important;
  }

  & .MuiPaper-root {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
`;
