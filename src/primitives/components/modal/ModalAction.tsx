'use client';

import { colorPalette } from '@/libs/theme';

import Flex from '../../layout/Flex';
import Button from '../Button';
import Typography from '../Typography';

/**
 * props
 * _______________________________________________________________________________
 *
 *
 */

type ModalActionProps = {
  onConfirm?: () => void;
  onCancel?: () => void;
  closeButtonText: string;
  submitButtonText: string;
  isLoading: boolean;
};

const ModalAction = ({
  onConfirm,
  onCancel,
  closeButtonText,
  submitButtonText,
  isLoading,
}: ModalActionProps) => {
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
    <Flex
      zIndex={10}
      borderTop={`0.5px solid ${colorPalette.gray[7]}`}
      style={{ backgroundColor: colorPalette.gray[2] }}
      position={{ mobile: 'fixed', laptop: 'sticky' }}
      marginBlockStart={'auto'}
      bottom='0'
      right={0}
      left={0}
      p='10px 16px'
    >
      <Flex
        width={{
          mobile: '100%',
          laptop: 'fit-content',
        }}
        direction={'row'}
        gap={'8px'}
      >
        <Button
          type='submit'
          loading={isLoading}
          style={{ width: '100%', minWidth: '100px' }}
          variant='primary-contained'
          size='medium'
          onClick={onConfirm}
        >
          <Typography style={{ textWrap: 'nowrap' }} variant='body2'>
            {submitButtonText}
          </Typography>
        </Button>

        <Button
          style={{ width: '100%', minWidth: '100px', cursor: 'pointer' }}
          variant='secondary-outlined'
          size='medium'
          onClick={onCancel}
        >
          <Typography style={{ textWrap: 'nowrap' }} variant='body2'>
            {closeButtonText}
          </Typography>
        </Button>
      </Flex>
    </Flex>
  );
};

export default ModalAction;

/**
 * styled-component
 * _______________________________________________________________________________
 */
