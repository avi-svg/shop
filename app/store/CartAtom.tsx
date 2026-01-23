import { CartItem } from "@/types/ProductsTypes";
import { atom } from "jotai";



export const cartAtom = atom<CartItem[]>(
    []
)
