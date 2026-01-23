'use client';

import { notFound, useParams } from "next/navigation";
import styles from "../[id]/page.module.css";
import { useSetAtom } from "jotai";
import { cartAtom } from "@/app/store/CartAtom";
import { usePathname } from "next/navigation";
import { Params } from "@/types/ProductsTypes";




function getProduct(id: string) {
  const products = [
    {
      id: 1,
      image: "/image/placeholder.jpg",
      name: "simple 1",
      price: 1234,
      description: "nice",
    },
    {
      id: 2,
      image: "/image/placeholder.jpg",
      name: "simple 2",
      price: 1234,
      description: "nice",
    },
    {
      id: 3,
      image: "/image/placeholder.jpg",
      name: "simple 3",
      price: 1234,
      description: "nice",
    },
  ];

  return products.find((product) => product.id.toString() === id);
}

export default  function ProductDetails() {
  const {id} = useParams<Params>();
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  const setCartItems = useSetAtom(cartAtom)


  const handelAddToCart = () => {
    setCartItems((prevItems) => {
      return [...prevItems, {...product}]
    })
  }


  return (
    <main className={styles.container}>
      {!!product.name && (
        <article className={styles.product}>
          <h1 className={styles.title}>{product.name}</h1>
          <section className={styles.content}>
            <div className={styles.descriptionSection}>
              <p className={styles.description}>{product.description}</p>
            </div>
            <div className={styles.imageSection}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.image}
              />
            </div>
          </section>
          <hr className={styles.divider} />
          <section className={styles.bottomSection}>
            <p className={styles.price}>Price: ${product.price.toFixed(2)}</p>
            <button className={styles.button} onClick={handelAddToCart}>Add to Cart</button>
          </section>
        </article>
      )}
    </main>
  );
}
