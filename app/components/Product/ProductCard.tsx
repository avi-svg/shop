import Link from "next/link";
import styles from "./Product.module.css";


type props = {
  id: number;
  image: string;
  name: string;
  price: number;
  onClick: () => void
};



const ProductCard = ({ id, image, name, price, onClick}: props) => {
  return (
    <div className={styles.card}>
      <Link href={`/products/${id}`}>
        <img className={styles.image} src={image} alt={name} />
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.price}>₪{price.toFixed(2)}</p>
      </Link>
      <button className={styles.button} onClick={onClick}>ADD</button>
    </div>
  );
};

export default ProductCard;
