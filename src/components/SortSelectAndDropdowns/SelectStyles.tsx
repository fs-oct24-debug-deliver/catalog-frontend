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
  let inputStyles: SxProps = {};

  const selectStylesBase = {
    'fontFamily': 'Mont',
    'fontSize': '14px',
    'fontWeight': 700,
    'lineHeight': '21px',
    'border-radius': 0,

    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiSvgIcon-root': {
      color: '#75767F',
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
          'border-radius': 0,

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
      'background': colors.white,
      'color': `${colors.black} !important`,
      'border': `1px solid ${colors.secondary}`,
      'border-radius': 0,
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

  const inputStylesBase = {
    'fontFamily': 'Mont',
    'fontSize': '14px',
    'fontWeight': 700,
    'lineHeight': '21px',

    '& .MuiOutlinedInput-root': {
      'borderRadius': 0,
      'backgroundColor': theme === 'dark' ? colors.black : colors.white,
      'color': theme === 'dark' ? colors.white : colors.black,
      '& fieldset': {
        border: `1px solid ${theme === 'dark' ? colors.elements : colors.secondary}`,
      },
      '&:hover fieldset': {
        border: `1px solid ${theme === 'dark' ? colors.surface1 : colors.text}`,
      },
      '&.Mui-focused fieldset': {
        border: `1px solid ${theme === 'dark' ? colors.surface2 : '#0f1121'}`,
      },
    },

    '& .MuiInputLabel-root': {
      'color': theme === 'dark' ? colors.secondary : colors.text,
      '&.Mui-focused': {
        color: theme === 'dark' ? colors.white : '#0f1121',
      },
    },

    '& .MuiInputBase-input': {
      fontFamily: 'Mont',
      color: theme === 'dark' ? colors.white : colors.black,
    },
  };

  inputStyles = {
    ...inputStylesBase,
  };

  return { selectStyles, menuPropsStyles, inputStyles };
};
