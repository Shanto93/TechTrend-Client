import { Link, useLoaderData, useParams } from "react-router-dom";
import ProductCart from "./ProductCart";

const Products = () => {
    const products = useLoaderData();
    const { brand_name } = useParams();
    const remaining = products.filter(product => product.brand_name === brand_name)
    console.log(brand_name);
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-3">
                {
                    remaining.map(product =>
                        <Link to={`/details/${product._id}`} key={product._id}>
                            <ProductCart product={product} ></ProductCart>
                        </Link>)
                }
            </div>
        </div>
    );
};

export default Products;