import { useNavigate } from 'react-router-dom';
import styleButton from './ButtonBack.module.scss';
import { useTranslation } from 'react-i18next';

export const ButtonBack = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <button
      type="button"
      className={styleButton.button}
      onClick={() => navigate(-1)}
    >
      <img
        src="/img/icons/arrow-back.svg"
        alt="arrow-back-icon"
      />
      <span>{t('buttons.back')}</span>
    </button>
  );
};
