import {
  getAllAccessories,
  getAllPhones,
  getAllProducts,
  getAllTablets,
} from './getAllData';

export const getProductsByCategory = (category: string) => {
  return getAllProducts.then((products) =>
    products.filter((product) => product.category === category),
  );
};

export const getProductById = (id: string, category: string) => {
  switch (category) {
    case 'phones':
      return getAllPhones.then(
        (phones) => phones.find((phone) => phone.id === id) || null,
      );
    case 'tablets':
      return getAllTablets.then(
        (tablets) => tablets.find((tablet) => tablet.id === id) || null,
      );
    case 'accessories':
      return getAllAccessories.then(
        (accessories) =>
          accessories.find((accessorie) => accessorie.id === id) || null,
      );
    default:
      return Promise.resolve(null);
  }
};
