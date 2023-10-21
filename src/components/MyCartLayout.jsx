import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const MyCartLayout = ({ cart, myCartData, setMyCartData }) => {
    const { _id, category, name, photo, price, description } = cart;

    const handleRemove = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/myCart/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.deletedCount > 0)
                {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Deleted Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    const remaining = myCartData.filter( data => data._id !== _id)
                    setMyCartData(remaining);
                }
            });

    }
    return (
        <div className="hero md:w-[500px] bg-base-200 rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
                <img src={photo} className="w-52 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-xl font-bold">{name} </h1>
                    <p className="py-3 font-semibold">{category} </p>
                    <p><span className="font-semibold">Price:</span> {price}</p>
                    <p className="mt-3">
                        {
                            description.slice(0, 100)
                        } <span className="text-orange-500 hover:text-red-600"> Read More...</span>
                    </p>
                    <button onClick={() => handleRemove(_id)} className="btn bg-[#e74c3c] text-white font-bold hover:bg-[#e67e22] mt-3">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default MyCartLayout;