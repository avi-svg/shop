import { notFound } from "next/navigation";
import styles from "../[id]/page.module.css";


type ParamsProps = {
  params: Promise<{
    id: string
  }>
};

async function getProduct(id: string) {
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

export default async function ProductDetails({params}: ParamsProps) {
  const {id} =  await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
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
            <button className={styles.button}>Add to Cart</button>
          </section>
        </article>
      )}
    </main>
  );
}
