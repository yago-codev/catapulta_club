import {AxiosResponse} from 'axios';
import {api} from '..';

interface IRating {
  rate: number;
  count: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}

export const productsAPI = async (): Promise<AxiosResponse> => {
  const response = await api.get('/products');
  return response;
};

export const singleProductAPI = async (
  productId: number,
): Promise<AxiosResponse> => {
  const response = await api.post(`/products/${productId}`);
  return response;
};
