"use client";

import styles from "./page.module.css";
import { addToCartAtom, cartAtom, decresseItemCartAtom} from "../store/CartAtom";
import { useAtom, useSetAtom } from "jotai";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";


const Card = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useAtom(cartAtom);

  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("no token");
      }
    } catch (e) {
      localStorage.removeItem("token");
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const enptyCart = () => {
    setCartItems([]);
  };

  const handelPayNow = async () => {
    try {
      console.log('CLIENT SEND');
      const totalQuantity = cartItems.reduce((sum, current) => (sum += current.quantity), 0);
      if(totalQuantity == 0){
        alert("No orders!")
        return;
      }
      const response = await fetch("http://localhost:3001/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          totalAmount: totalPrice,
          totalQuantity: totalQuantity,
          cartItems: cartItems.map(({id: product_id,quantity: quantity, price: price}) => ({
            product_id,
            quantity,
            price,
          }))
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch order");
      }

      const data = await response.json();

      console.log(data)
      alert("sucses");     

    } catch (e) {
      console.log(e, "error");
    }
  };

  const encreaseQuantity = useSetAtom(addToCartAtom) 
  const decresse = useSetAtom(decresseItemCartAtom)
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeader}>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className={styles.cartItem}>
            <button onClick={() => (encreaseQuantity(item))}>+</button>
            <span className={styles.itemName}>{item.name}</span>
            <span className="">Quantity: {item.quantity}</span>
            <span className={styles.itemPrice}>₪{item.price.toFixed(2)}</span>
            <button onClick={() => (decresse(item))}>-</button>
          </li>
        ))}
      </ul>

      <div className={styles.total}>
        <span>Total:</span>
        <span className={styles.totalPrice}>₪{totalPrice.toFixed(2)}</span>
      </div>

      <div className={styles.actions}>
        <button className={styles.payButton} onClick={handelPayNow}>Pay Now</button>
        <button className={styles.emptyButton} onClick={enptyCart}>
          Empty the Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
