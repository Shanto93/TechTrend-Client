import Swal from "sweetalert2";

const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const price = form.price.value;
        const brand_name = form.brand_name.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const newProduct = {name, photo, category, price, brand_name, description, rating};
        // console.log(newProduct);

        // Send data to server
        fetch('http://localhost:5000/product', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Data Inserted Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  form.reset();
            }
        })
        
    }
    return (
        <div className="min-h-screen flex w-full justify-center">
            
            <form onSubmit={handleAddProduct} className="flex justify-center items-center w-full">
                <div className="w-3/4">
                <h2 className="text-center text-4xl font-bold mb-5">Pr<span className="text-[#e74c3c]">odu</span>ct In<span className="text-[#e67e22]">fo</span>rm<span className="text-[#e74c3c]">ati</span>on</h2>
                    {/* Name and Image Column */}
                    <div className="md:flex gap-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Image URL" className="input input-bordered" required />
                        </div>
                    </div>

                    {/* Category and Price Column */}
                    <div className="md:flex gap-5">

                        <div className=" md:w-1/2">
                            <label className="label">
                                <span className="label-text">Select Category</span>
                            </label>
                            <select className="select w-full select-bordered" name="category">
                                <option disabled selected>Phone</option>
                                <option>Computer</option>
                                <option>Headphone</option>
                                <option>PowerBank</option>
                                <option>Processor</option>
                                <option>Phone</option>
                            </select>
                        </div>

                        <div className="md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" className="input w-full input-bordered" required />
                        </div>
                    </div>
                    {/* Short Description and Rating Column */}
                    <div className="md:flex gap-5">
                    <div className=" md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <select className="select w-full select-bordered" name="brand_name">
                                <option disabled selected>Apple</option>
                                <option>Samsung</option>
                                <option>Sony</option>
                                <option>Google</option>
                                <option>Oppo</option>
                                <option>Intel</option>
                                <option>Apple</option>
                            </select>
                        </div>
                        
                        <div className=" md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <select className="select w-full select-bordered" name="rating">
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
                            <input type="text" name="description" placeholder="Write short description" className="input input-bordered" required />
                        </div>
                    <button className="btn w-full mt-7 bg-[#e74c3c] text-white font-bold hover:bg-[#e67e22]">Add to Cart</button>
                </div>

            </form>
        </div>
    );
};

export default AddProduct;