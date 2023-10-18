import { Link, useLoaderData } from "react-router-dom";

const AvailableBrands = () => {
    const brands = useLoaderData();
    return (
        <div>
            <h2 className="mt-10 mb-3 text-4xl font-bold text-center">Ava<span className="text-[#e67e22]">ila</span>ble Br<span className="text-[#e74c3c]">an</span>ds</h2>
            <p className="text-center mb-7">Presented below are our available brands. <br />Feel free to explore the products offered by each brand.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    brands.map(brand => <Link to={`/home/${brand.id}`} key={brand.id}>
                        <div className="card bg-[#e74c3c] shadow-xl">
                            <figure className=" ">
                                <img src={brand.image} alt="Shoes" className=" h-52 w-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-white">{brand.name} </h2>
                            </div>
                        </div>
                    </Link>)
                }
            </div>

        </div>
    );
};

export default AvailableBrands;