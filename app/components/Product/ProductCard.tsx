import styles from "./Product.module.css";

type props = {
  image: string;
  name: string;
  price: number;
};

const ProductCard = ({ image, name, price }: props) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={name} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.price}>₪{price.toFixed(2)}</p>
      <button className={styles.button}>ADD</button>
    </div>
  );
};

export default ProductCard;
