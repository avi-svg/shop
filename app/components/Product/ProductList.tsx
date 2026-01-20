import ProductCard from "./ProductCard";
import Link from "next/link";

type Products = {
  id: number;
  image: string;
  name: string;
  price: number;
};

type props = {
  products: Products[];
};

const ProductList = ({ products }: props) => {
  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {products.map((product) => {
        return (
          <Link key={product.id} href={`/products/${product.id}`}>
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
