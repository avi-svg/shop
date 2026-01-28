"use client";

import ProductList from "../components/Product/ProductList";
import styles from "./page.module.css";
import { addToCartAtom, cartAtom } from "../store/CartAtom";
import { useSetAtom } from "jotai";
import { useState, useEffect } from "react";
import { Product, productToCartItem } from "@/types/ProductsTypes";


export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
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

  const setCartItems = useSetAtom(addToCartAtom);

  const handelAddToCart = (product: Product) => {
    const tempProduct = productToCartItem(product);
    setCartItems(tempProduct);
  };

  return (
    <div className={styles.container}>
      {
        loading && <p>Loading...</p>
      }
      {
        error && <p>{error}</p>
      }
      <ProductList products={products} onProductAddClicked={handelAddToCart} />
    </div>
  );
}
