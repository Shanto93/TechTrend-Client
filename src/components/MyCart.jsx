import { useLoaderData } from "react-router-dom";
import MyCartLayout from "./MyCartLayout";
import { useContext, useState } from "react";
import { AuthContext } from "../firebase/AuthProvider";

const MyCart = () => {
    const {loading} = useContext(AuthContext)
    const loadmyCartData = useLoaderData();
    const [myCartData, setMyCartData] = useState(loadmyCartData);

    if(loading){
        return <span className="loading loading-spinner text-error"></span>
    }
    // console.log(myCartData);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {
                myCartData.map(cart => <MyCartLayout cart={cart} myCartData={myCartData} setMyCartData={setMyCartData} key={cart._id}></MyCartLayout>)
            }
        </div>
    );
};

export default MyCart;