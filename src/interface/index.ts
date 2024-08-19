export type TProduct = {
  _id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  stock: number;
  rating?: number;
  price: number;
  image: string;
};
export type TCartItem = {
  id: string;
  name: string;
  category: string;
  brand: string;
  quantity: number;
  stock: number;
  rating?: number;
  price: number;
  image: string;
};
