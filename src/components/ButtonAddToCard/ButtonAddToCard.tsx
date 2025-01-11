import React from 'react';
import buttonStyle from './ButtonAddToCard.module.scss';

type Props = {
  title: string;
};

export const ButtonAddToCard: React.FC<Props> = ({ title }) => {
  return <button className={buttonStyle.addCard}>{title}</button>;
};
