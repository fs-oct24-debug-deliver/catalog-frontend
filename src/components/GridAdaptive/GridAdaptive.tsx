import React from 'react';
import stylesGrid from '../../components/GridAdaptive/styles/blocks/index.module.scss';
import { Card } from '../../types/Card';
import { ProductCard } from '../CardComponent/ProductCard';

type Props = {
  products: Card[];
};

export const GridAdaptive: React.FC<Props> = ({ products }) => {
  return (
    <main>
      <div className={stylesGrid.container}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            card={product}
          />
        ))}
      </div>
    </main>
  );
};
