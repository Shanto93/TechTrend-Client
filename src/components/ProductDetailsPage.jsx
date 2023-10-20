import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const ProductDetailsPage = ({ prod }) => {
    // console.log(prod);
    const { _id, category, name, photo, price, brand_name, description} = prod;
    const newData = { _id, category, name, photo, price, brand_name, description};
    console.log(newData);
    const handleAddtoCard = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully added to My Cart',
            showConfirmButton: false,
            timer: 1500
        })

        fetch('http://localhost:5000/myCart', {
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newData),
        }) 
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

    }
    return (
        <div>
            <div className="flex justify-center">
                <img className=" mb-5 w-96" src={photo} alt="" />
            </div>
            <div className="space-y-4">
                <h2 className="text-xl"> <span className="text-2xl font-bold">Product Name:</span> {name} </h2>
                <h2 className="text-xl"> <span className="text-xl font-bold">Brand:</span> {brand_name} </h2>
                <h2 className="text-xl"> <span className="text-xl font-bold">Category:</span> {category}</h2>
                <h2 className="text-xl"> <span className="text-xl font-bold">Price:</span > {price} </h2>
                <p className="text-lg"> <span className="text-xl font-bold">About Product:</span> {description} </p>
            </div>
            <button onClick={handleAddtoCard} className="btn w-full my-7 bg-[#e74c3c] text-white font-bold">Add to Cart</button>
        </div>
    );
};

export default ProductDetailsPage;