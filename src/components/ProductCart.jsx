import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCart = ({ product }) => {
    const { category, name, photo, price, rating } = product;
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-10">
                    <img src={photo} alt="Shoes" className="rounded-xl h-56" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{category}</p>

                    <div className="md:flex justify-around">
                        <h3>Price: {price} </h3>
                        <h2 className="ml-7">Rating: {rating} </h2>
                    </div>


                    <div className="md:flex">
                        <div className="card-actions">
                            <Link to={`/details/${product._id}`}>
                                <button className="btn bg-[#e74c3c] hover:bg-[#e67e22] text-white font-bold">Details</button>
                            </Link>

                        </div>
                        <Link to={`/update/${product._id}`}>
                            <div className="card-actions">
                                <button className="btn bg-[#e74c3c] hover:bg-[#e67e22] text-white font-bold md:ml-5">Update</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;