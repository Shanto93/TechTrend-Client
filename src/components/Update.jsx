import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const loaderProduct = useLoaderData();
    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const price = form.price.value;
        const brand_name = form.brand_name.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const newProduct = { name, photo, category, price, brand_name, description, rating };
        console.log(newProduct);

        fetch(`http://localhost:5000/product/${loaderProduct._id}`,{
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully data updated',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        
    }
    return (
        <div className="min-h-screen flex w-full justify-center">

            <form onSubmit={handleUpdateProduct} className="flex justify-center items-center w-full">
                <div className="w-3/4">
                    <h2 className="text-center text-4xl font-bold mb-5">Pr<span className="text-[#e74c3c]">odu</span>ct In<span className="text-[#e67e22]">fo</span>rm<span className="text-[#e74c3c]">ati</span>on</h2>
                    {/* Name and Image Column */}
                    <div className="md:flex gap-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={loaderProduct?.name} className="input input-bordered" required />
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name="photo" defaultValue={loaderProduct?.photo} className="input input-bordered" required />
                        </div>
                    </div>

                    {/* Category and Price Column */}
                    <div className="md:flex gap-5">

                        <div className=" md:w-1/2">
                            <label className="label">
                                <span className="label-text">Select Category</span>
                            </label>
                            <select className="select w-full select-bordered" name="category" defaultValue={loaderProduct?.category}>
                                <option disabled selected>Phone</option>
                                <option>Computer</option>
                                <option>Headphone</option>
                                <option>Tablet</option>
                                <option>Processor</option>
                                <option>Phone</option>
                            </select>
                        </div>

                        <div className="md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" defaultValue={loaderProduct?.price} className="input w-full input-bordered" required />
                        </div>
                    </div>
                    {/* Short Description and Rating Column */}
                    <div className="md:flex gap-5">
                        <div className=" md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <select className="select w-full select-bordered" name="brand_name" defaultValue={loaderProduct?.brand_name}>
                                <option disabled selected>Apple</option>
                                <option>Samsung</option>
                                <option>Sony</option>
                                <option>Realme</option>
                                <option>Oppo</option>
                                <option>Intel</option>
                                <option>Apple</option>
                            </select>
                        </div>

                        <div className=" md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <select className="select w-full select-bordered" name="rating" defaultValue={loaderProduct?.rating}>
                                <option disabled selected>5</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" defaultValue={loaderProduct?.description} className="input input-bordered" required />
                    </div>
                    <button className="btn w-full mt-7 bg-[#e74c3c] text-white font-bold hover:bg-[#e67e22]">Update Information</button>
                </div>

            </form>
        </div>
    );
};

export default Update;