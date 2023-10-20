import { useLoaderData } from "react-router-dom";
import MyCartLayout from "./MyCartLayout";

const MyCart = () => {
    const myCartData = useLoaderData();
    // console.log(myCartData);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {
                myCartData.map(cart => <MyCartLayout cart={cart} key={cart._id}></MyCartLayout>)
            }
        </div>
    );
};

export default MyCart;