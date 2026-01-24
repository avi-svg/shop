"use client";

import { notFound, useParams } from "next/navigation";
import styles from './page.module.css'
import { useSetAtom } from "jotai";
import { cartAtom } from "@/app/store/CartAtom";
import { usePathname } from "next/navigation";
import { CartItem, Params } from "@/types/ProductsTypes";
import { useState, useEffect } from "react";
import ProductDetail from "./ProductDetailes";

type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
};

export default function ProductDetails() {
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams<Params>();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("unkown error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);



  const setCartItems = useSetAtom(cartAtom);

const handelAddToCart = () => {
  if (!product) return;

  const newItem: CartItem = {
    id: product.id,
    image: product.image,
    name: product.name,
    price: product.price,
    description: product.description
  };

  setCartItems(prev => [...prev, newItem]);
};


  return (

    <main className={styles.container}>
      
      {
        loading && <p>Loading...</p>
      }
      {
        error && <p>{error}</p>
      }


      {!!product && (
        <ProductDetail
        product={product} 
        onAddToCart={handelAddToCart}
        />
      )}
    </main>
  );
}
