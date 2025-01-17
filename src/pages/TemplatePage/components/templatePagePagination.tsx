import { Pagination } from '@mui/material';
import templateStyles from './templatePagePagination.module.scss';
import React from 'react';
import { colors } from '../../../styles/utils/variables';
import { useAppSelector } from '../../../app/hooks';

type Props = {
  count: number;
  countOnPages: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  currentPage: number;
};

export const TemplatePagePagination: React.FC<Props> = ({
  count,
  countOnPages,
  handleChange,
  currentPage,
}) => {
  const theme = useAppSelector((state) => state.theme.theme);

  const isDark = theme === 'dark';

  return (
    <Pagination
      className={templateStyles.pagination}
      count={Math.ceil(count / countOnPages)}
      onChange={handleChange}
      page={currentPage}
      variant="outlined"
      shape="rounded"
      sx={{
        '& .MuiPaginationItem-root': {
          'color': isDark ? 'var(--text)' : 'var(--icons)',
          'backgroundColor': isDark ? 'var(--surface1)' : 'var(--surface2)',
          '&:hover': {
            backgroundColor: isDark ? 'var(--surface1)' : 'var(--surface2)',
          },
        },
        '& .MuiPaginationItem-page.Mui-selected': {
          'backgroundColor': colors.accent,
          '&:hover': {
            backgroundColor: colors.accent,
          },
        },
        '& .MuiPaginationItem-previousNext': {
          'backgroundColor': isDark ? 'var(--surface2)' : 'var(--surface1)',
          '&:hover': {
            backgroundColor: isDark ? 'var(--surface2)' : 'var(--surface1)',
          },
        },
      }}
    />
  );
};
