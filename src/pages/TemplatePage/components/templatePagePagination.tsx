import { Pagination } from '@mui/material';
import templateStyles from './templatePagePagination.module.scss';
import React from 'react';
import { colors } from '../../../styles/utils/variables';

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
          'color': colors.white,
          'backgroundColor': colors.surface1,
          '&:hover': {
            backgroundColor: colors.surface1,
          },
        },
        '& .MuiPaginationItem-page.Mui-selected': {
          'backgroundColor': colors.accent,
          '&:hover': {
            backgroundColor: colors.accent,
          },
        },
        '& .MuiPaginationItem-previousNext': {
          'backgroundColor': colors.surface2,
          '&:hover': {
            backgroundColor: colors.surface2,
          },
        },
      }}
    />
  );
};
