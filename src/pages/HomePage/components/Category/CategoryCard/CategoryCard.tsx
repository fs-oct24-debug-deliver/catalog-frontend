import { useTranslation } from 'react-i18next';
import styles from './CategoryCard.module.scss';
import { Link } from 'react-router-dom';

type CategoryBlockProps = {
  imageSrc: string;
  title: string;
  modelsCount: number;
  link: string;
};

export const CategoryCard: React.FC<CategoryBlockProps> = (props) => {
  const { imageSrc, title, modelsCount, link } = props;
  const { t } = useTranslation();

  const formattedTitle = title.toLowerCase();

  return (
    <Link
      to={link}
      className={styles.block}
    >
      <div className={styles.wrapper}>
        <img
          src={imageSrc}
          alt={title}
          className={styles.img}
        />
        <h3 className={styles.title}>{t(`categories.${formattedTitle}`)}</h3>
        <p className={styles.count}>
          {t(`categories.${formattedTitle}Count`, {
            count: modelsCount,
          })}
        </p>
      </div>
    </Link>
  );
};
