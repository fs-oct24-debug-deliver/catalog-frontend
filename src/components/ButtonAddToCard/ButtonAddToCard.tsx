import React from 'react';
import buttonStyle from './ButtonAddToCard.module.scss';

type Props = {
  title: string;
  onClick?: () => void;
};

export const ButtonAddToCard: React.FC<Props> = ({
  title,
  onClick = () => {},
}) => {
  return (
    <button
      className={buttonStyle.addCard}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
