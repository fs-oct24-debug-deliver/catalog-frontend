import styles from './SortSelectAndDropdowns.module.scss';
import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import '../../styles/utils/variables.scss';
import '../../styles/index.scss';

const optionsForSort = [
  { value: 'all', label: 'All' },
  { value: 'newest', label: 'Newest' },
  { value: 'priceLowToHigh', label: 'Low to high price' },
  { value: 'priceHighToLow', label: 'High to low price' },
];

const optionsForItemsOnPage = [
  { value: '8', label: '8' },
  { value: '16', label: '16' },
  { value: '32', label: '32' },
  { value: 'all', label: 'All' },
];

type Props = {
  searchParams: URLSearchParams;
  setSearchParams: (params: URLSearchParams) => void;
};

export const SortSelectAndDropdowns: React.FC<Props> = ({
  searchParams,
  setSearchParams,
}) => {
  const valueSelectSort = searchParams.get('sort') || 'all';
  const valueSelectItems = searchParams.get('perPage') || 'all';
  const params = new URLSearchParams(searchParams);

  const handleSortChange = (event: SelectChangeEvent) => {
    const option = event.target.value as string;

    if (option === 'all') {
      params.delete('sort');
    } else {
      params.set('sort', option);
    }
    setSearchParams(params);
  };

  const handleItemsOnPage = (event: SelectChangeEvent) => {
    const option = event.target.value as string;

    if (option === 'all') {
      params.delete('perPage');
    } else {
      params.set('perPage', option);
    }
    setSearchParams(params);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <InputLabel
            className={styles.input_label}
            id="sortBy"
          >
            Sort by
          </InputLabel>
          <Select
            className={`${styles.selectSort} defaultSmallTextStyles`}
            labelId="sortBy"
            value={valueSelectSort}
            onChange={handleSortChange}
          >
            {optionsForSort.map((option, index) => (
              <MenuItem
                value={option.value}
                key={index}
                className={`${styles.option} defaultSmallTextStyles`}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div>
          <InputLabel
            className={styles.input_label}
            id="itemOnPage"
          >
            Items on page
          </InputLabel>
          <Select
            className={`${styles.selectItemOnPage} defaultSmallTextStyles`}
            labelId="itemOnPage"
            value={valueSelectItems}
            onChange={handleItemsOnPage}
          >
            {optionsForItemsOnPage.map((option, index) => (
              <MenuItem
                value={option.value}
                key={index}
                className={`${styles.option} defaultSmallTextStyles`}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
    </>
  );
};
