import { useEffect, useState } from 'react';
import styles from './Category.module.scss';
import { getData } from '../../../../servises/httpClient';
import { getModelCount } from '../../../../servises/getModelCounts';
import { Product } from '../../../../types/Product';
import { CategoryCard } from './CategoryCard';

export const Category = () => {
  const [count, setCount] = useState({
    phones: 0,
    tablets: 0,
    accessories: 0,
  });

  useEffect(() => {
    getData<Product[]>('/products.json')
      .then((products) => {
        const modelCount = getModelCount(products);
        setCount(modelCount);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setCount({ phones: 0, tablets: 0, accessories: 0 });
      });
  }, []);

  return (
    <div className={styles.categories}>
      <h2 className={styles.title}>Shop by category</h2>
      <div className={styles.container}>
        <CategoryCard
          imageSrc="./img/category-phones.png"
          title="Mobile phones"
          modelsCount={count.phones}
          link="/phones"
        />
        <CategoryCard
          imageSrc="./img/category-tablets.png"
          title="Tablets"
          modelsCount={count.tablets}
          link="/tablets"
        />
        <CategoryCard
          imageSrc="./img/category-accessories.png"
          title="Accessories"
          modelsCount={count.accessories}
          link="/accessories"
        />
      </div>
    </div>
  );
};
