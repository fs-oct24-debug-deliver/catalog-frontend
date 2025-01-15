import { Product } from '../types/Product';

export const getModelCount = (products: Product[]) => {
  return {
    phones: products.filter((product) => product.category === 'phones').length,
    tablets: products.filter((product) => product.category === 'tablets')
      .length,
    accessories: products.filter(
      (product) => product.category === 'accessories',
    ).length,
  };
};
