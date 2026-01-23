
import ProductCard from "./ProductCard";




type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
};

type Props = {
  products: Product[];
  onProductAddClicked: (p: Product) => void;
};




const ProductList = ({ products, onProductAddClicked}: Props) => {
  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            onClick={() => onProductAddClicked(product)}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
