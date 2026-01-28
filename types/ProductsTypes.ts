export type Params = {
    id: string
}

export type CartItem = {
    id: number;
    image: string;
    name: string;
    price: number;
    quantity: number;
}

export type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
};

export const productToCartItem = (product: Product): CartItem => {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: 1,
  };
};

