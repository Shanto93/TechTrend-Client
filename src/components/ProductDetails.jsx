import { useLoaderData, useParams } from "react-router-dom";
import ProductDetailsPage from "./ProductDetailsPage";

const ProductDetails = () => {
    const products = useLoaderData();
    // console.log(products);
    const {_id} = useParams();
    const product = products.filter(product => product._id == _id);
    // console.log(single);
    return (
        <div>
            
            {
                product.map(prod => <ProductDetailsPage prod={prod} key={prod._id}></ProductDetailsPage>)
            }
            
        </div>
    );
};

export default ProductDetails;