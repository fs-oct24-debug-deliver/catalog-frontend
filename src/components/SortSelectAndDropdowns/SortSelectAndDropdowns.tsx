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
  valueSelectSort: string;
  setValueSelectSort: React.Dispatch<React.SetStateAction<string>>;
  valueSelectItems: string;
  setValueSelectItems: React.Dispatch<React.SetStateAction<string>>;
};

export const SortSelectAndDropdowns: React.FC<Props> = ({
  valueSelectSort,
  setValueSelectSort,
  valueSelectItems,
  setValueSelectItems,
}) => {
  const handleSortChange = (event: SelectChangeEvent) => {
    const option = event.target.value as string;
    setValueSelectSort(option);
  };

  const handleItemsOnPage = (event: SelectChangeEvent) => {
    const option = event.target.value as string;
    setValueSelectItems(option);
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
