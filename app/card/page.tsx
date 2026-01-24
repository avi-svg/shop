"use client";

import styles from "./page.module.css";
import { cartAtom } from "../store/CartAtom";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Card = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useAtom(cartAtom);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login?redirect=/card");
    }
  }, [router]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const enptyCart = () => {
    setCartItems([]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeader}>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className={styles.cartItem}>
            <span className={styles.itemName}>{item.name}</span>
            <span className={styles.itemPrice}>₪{item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <div className={styles.total}>
        <span>Total:</span>
        <span className={styles.totalPrice}>₪{totalPrice.toFixed(2)}</span>
      </div>

      <div className={styles.actions}>
        <button className={styles.payButton}>Pay Now</button>
        <button className={styles.emptyButton} onClick={enptyCart}>
          Empty the Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
