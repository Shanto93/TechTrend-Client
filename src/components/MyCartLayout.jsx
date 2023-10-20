/* eslint-disable react/prop-types */
const MyCartLayout = ({ cart }) => {
    const { category, name, photo, price, description } = cart;
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
                    <button className="btn bg-[#e74c3c] text-white font-bold hover:bg-[#e67e22] mt-3">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default MyCartLayout;