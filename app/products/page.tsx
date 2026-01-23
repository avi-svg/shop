'use client';


import ProductList from "../components/Product/ProductList"
import { cartAtom } from "../store/CartAtom";
import { useSetAtom } from "jotai";

const productsArray = [
    {id: 1, image: '/image/placeholder.jpg', name: 'simple 1', price: 1234},
    {id: 2, image: '/image/placeholder.jpg', name: 'simple 2', price: 1234},
    {id: 3, image: '/image/placeholder.jpg', name: 'simple 3', price: 1234}
]

type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
};


export default function Products(){

      const setCartItems = useSetAtom(cartAtom)
    
    
      const handelAddToCart = (product: Product) => {
        setCartItems((prevItems) => {
          return [...prevItems, {...product}]
        })
      }

    return(
        <div>
            <ProductList 
            products={productsArray}
            onProductAddClicked={handelAddToCart}
            />
        </div>
        
    )
};