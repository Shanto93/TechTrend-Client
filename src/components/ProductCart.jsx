/* eslint-disable react/prop-types */
const ProductCart = ({ product }) => {
    const { category, name, photo, price, rating } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photo} alt="Shoes" className="rounded-xl" />
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
                        <button className="btn btn-primary">Details</button>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary md:ml-5">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;