import { useLoaderData } from "react-router-dom";

const AvailableBrands = () => {
    const brands = useLoaderData();
    return (
        <div>
            <h2 className="my-10 text-4xl font-bold text-center">Available Brands</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    brands.map(brand => <div key={brand.id} className="card bg-[#e74c3c] shadow-xl">
                        <figure className=" ">
                            <img src={brand.image} alt="Shoes" className=" h-52 w-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-white">{brand.name} </h2>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default AvailableBrands;