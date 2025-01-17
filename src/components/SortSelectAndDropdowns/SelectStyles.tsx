import { useAppSelector } from '../../app/hooks';
import { colors } from '../../styles/utils/variables';
import { SxProps } from '@mui/material';
import { hexToRgba } from '../../utils';

export const useSelectStyles = () => {
  const theme = useAppSelector(({ theme }) => theme.theme);

  let selectStyles: SxProps = {};
  let menuPropsStyles: { PaperProps: { sx: SxProps } } = {
    PaperProps: { sx: {} },
  };

  const selectStylesBase = {
    'fontFamily': 'Mont',
    'fontSize': '14px',
    'fontWeight': 700,
    'lineHeight': '21px',

    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  };

  if (theme === 'dark') {
    selectStyles = {
      ...selectStylesBase,
    };
    menuPropsStyles = {
      PaperProps: {
        sx: {
          'marginTop': '4px',
          'background': colors.black,
          'border': `1px solid ${colors.elements}`,

          '& .MuiMenuItem-root': {
            'fontFamily': 'Mont, serif',
            'color': `${colors.secondary} !important`,
            'fontSize': '14px',
            'fontWeight': 600,
            'lineHeight': '21px',
            '&:hover': {
              background: colors.surface1,
            },
            '&.Mui-selected': {
              backgroundColor: `${hexToRgba(colors.surface2, 0.7)} !important`,
              color: `${colors.white} !important`,
            },
            '&.Mui-selected:hover': {
              backgroundColor: `${colors.surface2} !important`,
            },
          },
        },
      },
    };
  } else {
    selectStyles = {
      ...selectStylesBase,
      background: colors.white,
      color: `${colors.black} !important`,
      border: `1px solid ${colors.secondary}`,
    };
    menuPropsStyles = {
      PaperProps: {
        sx: {
          'color': colors.secondary,
          'marginTop': '4px',
          'background': colors.white,
          'border': `1px solid ${colors.text}`,

          '& .MuiMenuItem-root': {
            'fontFamily': 'Mont, serif',
            'fontSize': '14px',
            'fontWeight': 600,
            'lineHeight': '21px',
            '&.Mui-selected': {
              backgroundColor: `${hexToRgba(colors.text, 0.4)} !important`,
              color: `${colors.black} !important`,
            },
            '&.Mui-selected:hover': {
              backgroundColor: `${hexToRgba(colors.text, 0.3)} !important`,
            },
          },
        },
      },
    };
  }

  return { selectStyles, menuPropsStyles };
};
