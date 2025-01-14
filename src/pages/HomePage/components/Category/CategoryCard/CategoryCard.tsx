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
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.count}>{`${modelsCount} models`}</p>
      </div>
    </Link>
  );
};
