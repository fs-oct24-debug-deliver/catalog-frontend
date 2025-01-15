import { useNavigate } from 'react-router-dom';
import styleButton from './ButtonBack.module.scss';

export const ButtonBack = () => {
  const navigate = useNavigate();

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
      <span>Back</span>
    </button>
  );
};
