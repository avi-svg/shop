import ProductList from "../components/Product/ProductList"

const productsArray = [
    {id: 1, image: '/image/placeholder.jpg', name: 'simple 1', price: 1234},
    {id: 2, image: '/image/placeholder.jpg', name: 'simple 2', price: 1234},
    {id: 3, image: '/image/placeholder.jpg', name: 'simple 3', price: 1234}
]




export default function Products(){
    return(
        <div>
            <ProductList products={productsArray}/>
        </div>
        
    )
};