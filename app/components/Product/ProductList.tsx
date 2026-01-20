import ProductCard from "./ProductCard";

type Products = {
    id: number,
    image: string,
    name: string,
    price: number
}

type props = {
    products: Products[]
}


const ProductList = ({products}: props) => {
    return(
        <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
            {
                products.map((product) => {
                    return(
                        <ProductCard key={product.id} image={product.image} name={product.name} price={product.price}/>
                    )
                })
            }
        </div>
    );
}

export default ProductList;