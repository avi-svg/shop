import { CartItem } from "@/types/ProductsTypes";
import { atom } from "jotai";



export const cartAtom = atom<CartItem[]>(
    []
)


export const addToCartAtom = atom(
  null,
  (get, set, product: Omit<CartItem, "quantity">) => {
    const cart = get(cartAtom);

    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      set(
        cartAtom,
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      set(cartAtom, [...cart, { ...product, quantity: 1 }]);
    }
  }
);

export const decresseItemCartAtom = atom(
  null,
  (get, set, product: Omit<CartItem, "quantity">) => {
    const cart = get(cartAtom);

    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      set(
        cartAtom,
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      set(cartAtom, [...cart, { ...product, quantity: 1 }]);
    }
  }
);