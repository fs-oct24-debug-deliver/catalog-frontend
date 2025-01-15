import { Card } from '../types/Card';
import { Product } from '../types/Product';
import { getData } from './httpClient';

export const getAllProducts = getData<Card[]>('/products.json');

export const getAllPhones = getData<Product[]>('/phones.json');
export const getAllTablets = getData<Product[]>('/tablets.json');
export const getAllAccessories = getData<Product[]>('/accessories.json');
