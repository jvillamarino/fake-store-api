import { randomUUID } from 'crypto';
import { API_URL } from '../config';
import { Category } from '@/models';

async function fetcherProvider(url: string, hostname?: string): Promise<Response> {
  return fetch(`${hostname ?? API_URL}/${url}`);
}

/**
 *  Get all products
 *
 * @export
 * @param {string} [category]
 * @return {*}
 */
export async function getProducts(category?: string) {
  const url: string = category ? `products/category/${category}` : 'products';
  const response: Response = await fetcherProvider(url);
  return response.json();
}

/**
 * Get all categories
 *
 * @export
 * @return {*}
 */
export async function getCategories() {
  const response: string[] = await fetcherProvider('products/categories').then((res) => res.json());
  const mappedCategories: Category[] = await response.map((category: string) => ({
    link: `/products?category=${category}`,
    text: category,
    id: randomUUID(),
  }));
  mappedCategories.unshift({ link: '/products', text: 'All', id: randomUUID() });
  return mappedCategories;
}
