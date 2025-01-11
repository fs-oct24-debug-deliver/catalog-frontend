import { Card } from '../types/Card';
import { getData } from '../utils/httpClient';

export const getAllProducts = getData<Card[]>('/products.json');
