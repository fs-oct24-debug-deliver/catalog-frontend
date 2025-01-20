import styles from './SortSelectAndDropdowns.module.scss';
import {
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import React from 'react';
import '../../styles/utils/variables.scss';
import '../../styles/index.scss';
import { useSelectStyles } from './SelectStyles';
import { useTranslation } from 'react-i18next';

type Props = {
  searchParams: URLSearchParams;
  setSearchParams: (params: URLSearchParams) => void;
};

// Опції для сортування та кількості елементів на сторінці з локалізованими мітками
const optionsForSort = [
  { value: 'all', label: 'all' },
  { value: 'newest', label: 'newest' },
  { value: 'priceLowToHigh', label: 'priceLowToHigh' },
  { value: 'priceHighToLow', label: 'priceHighToLow' },
];

const optionsForItemsOnPage = [
  { value: '8', label: 'items8' },
  { value: '16', label: 'items16' },
  { value: '32', label: 'items32' },
  { value: 'all', label: 'all' },
];

export const SortSelectAndDropdowns: React.FC<Props> = ({
  searchParams,
  setSearchParams,
}) => {
  const { t } = useTranslation(); // Ініціалізація функції перекладу

  // Отримуємо значення для сортування та кількості елементів на сторінці з searchParams
  const valueSelectSort = searchParams.get('sort') || 'all';
  const valueSelectItems = searchParams.get('perPage') || 'all';
  const searchInput = searchParams.get('query') || '';
  const params = new URLSearchParams(searchParams);
  const { selectStyles, menuPropsStyles, inputStyles } = useSelectStyles();

  // Функція для обробки зміни сортування
  const handleSortChange = (event: SelectChangeEvent) => {
    const option = event.target.value as string;

    if (option === 'all') {
      params.delete('sort');
    } else {
      params.set('sort', option);
    }
    setSearchParams(params);
  };

  // Функція для обробки зміни кількості елементів на сторінці
  const handleItemsOnPage = (event: SelectChangeEvent) => {
    const option = event.target.value as string;

    if (option === 'all') {
      params.delete('perPage');
    } else {
      params.set('perPage', option);
    }
    setSearchParams(params);
  };

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value as string;

    if (input.trim() === '') {
      params.delete('query');
    } else {
      params.set('query', input);
    }

    setSearchParams(params);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <TextField
            id="filled-search"
            label="Search"
            type="search"
            variant="filled"
            value={searchInput}
            sx={inputStyles}
            onChange={handleSearchInput}
          />
        </div>
        <div>
          <InputLabel
            className={styles.input_label}
            id="sortBy"
          >
            {t('sort_and_items.labels.sort_by')}
          </InputLabel>
          <Select
            className={`${styles.selectSort} defaultSmallTextStyles`}
            labelId="sortBy"
            value={valueSelectSort}
            onChange={handleSortChange}
            sx={selectStyles}
            MenuProps={menuPropsStyles}
          >
            {optionsForSort.map((option, index) => (
              <MenuItem
                value={option.value}
                key={index}
                className={`${styles.option} defaultSmallTextStyles`}
              >
                {t(`sort_and_items.options.${option.label}`)}{' '}
                {/* Використовуємо t() для перекладу */}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div>
          <InputLabel
            className={styles.input_label}
            id="itemOnPage"
          >
            {t('sort_and_items.labels.items_on_page')}
          </InputLabel>
          <Select
            className={`${styles.selectItemOnPage} defaultSmallTextStyles`}
            labelId="itemOnPage"
            value={valueSelectItems}
            onChange={handleItemsOnPage}
            sx={selectStyles}
            MenuProps={menuPropsStyles}
          >
            {optionsForItemsOnPage.map((option, index) => (
              <MenuItem
                value={option.value}
                key={index}
                className={`${styles.option} defaultSmallTextStyles`}
              >
                {t(`sort_and_items.options.${option.label}`)}{' '}
                {/* Використовуємо t() для перекладу */}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
    </>
  );
};
