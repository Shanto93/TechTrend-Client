/* eslint-disable react/prop-types */
const ProductDetailsPage = ({ prod }) => {
    const { category, name, photo, price, brand_name, description
    } = prod;
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
            <button className="btn w-full my-7 bg-[#e74c3c] text-white font-bold">Add to Cart</button>
        </div>
    );
};

export default ProductDetailsPage;