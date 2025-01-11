import { getAllProducts } from './getAllData';

export const getProductsByCategory = (category: string) => {
  return getAllProducts.then((products) =>
    products.filter((product) => product.category === category),
  );
};
