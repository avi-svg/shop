export type Params = {
    id: string
}

export type CartItem = {
    id?: number
    name: string
    price: number
}

export type props = {
  id: number;
  image: string;
  name: string;
  price: number;
  onProductAddClicked: () => ProductArray
};

export type ProductArray = {
  id: number;
  image: string;
  name: string;
  price: number;
};