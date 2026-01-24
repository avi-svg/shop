
type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
};

type ProductDetailProps = {
  product: Product;
  onAddToCart: () => void;
};



import styles from './ProductDetailes.module.css';

const ProductDetail = ({ product, onAddToCart }: ProductDetailProps) => {
  return (
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
        <p className={styles.price}>
          Price: ${product.price.toFixed(2)}
        </p>

        <button className={styles.button} onClick={onAddToCart}>
          Add to Cart
        </button>
      </section>
    </article>
  );
};

export default ProductDetail;
