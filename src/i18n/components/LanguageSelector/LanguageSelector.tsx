import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSelector.module.scss';

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'uk', label: 'UK' },
    { code: 'pl', label: 'PL' },
  ];

  return (
    <div className={styles.languageSelector}>
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => changeLanguage(code)}
          className={`${styles.languageButton} ${i18n.language === code ? styles.active : ''}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
