import { useLoaderData, useParams } from "react-router-dom";
import ProductCart from "./ProductCart";

const Products = () => {
    const products = useLoaderData();
    const { brand_name } = useParams();
    const remaining = products.filter(product => product.brand_name === brand_name)
    console.log(brand_name);
    return (
        <div>

            {/* Carousel */}
            <div className="w-full mb-10">
                <div className="flex justify-center">

                    {/* Apple Carousel */}
                    {
                        brand_name == "Apple" &&
                        <div className="carousel md:w-96">
                            <div id="slide1" className="carousel-item relative w-full">
                                <img src="https://i.postimg.cc/1z5KBGp1/Apple-i-Phone-7.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                                <img src="https://i.postimg.cc/PxbrqwRN/Apple-i-Phone-XS.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                <img src="https://i.postimg.cc/fLcdZszd/Apple-i-Pad-Air.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>

                        </div>
                    }

                    {/* Samsung Carousel */}
                    {
                        brand_name == "Samsung" &&
                        <div className="carousel md:w-96">
                            <div id="slide1" className="carousel-item relative w-full">
                                <img src="https://i.postimg.cc/9F95t8Kv/Samsung-Galaxy-F22.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                                <img src="https://i.postimg.cc/8cp8pNtW/Samsung-Galaxy-Note-10.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                <img src="https://i.postimg.cc/sxXnHXTn/Samsung-Galaxy-Note-20.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>

                        </div>
                    }

                    {/* Sony Carousel */}
                    {
                        brand_name == "Sony" &&
                        <div className="carousel md:w-96">
                            <div id="slide1" className="carousel-item relative w-full">
                                <img src="https://i.postimg.cc/Bncj6RPJ/Sony-Xperia-Z3.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                                <img src="https://i.postimg.cc/15V7N1Sh/Sony-Xperia-L.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                <img src="https://i.postimg.cc/8PT390Qq/Sony-Xperia-Z5-Premium-Dual.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>

                        </div>
                    }

                    {/* Realme Carousel */}
                    {
                        brand_name == "Realme" &&
                        <div className="carousel md:w-96">
                            <div id="slide1" className="carousel-item relative w-full">
                                <img src="https://i.postimg.cc/mkhjdKwH/Realme-Narzo-50.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                                <img src="https://i.postimg.cc/Dyx6VvDb/Realme-9-Pro.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                <img src="https://i.postimg.cc/hjjT5BGp/Realme-8-Pro.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>

                        </div>
                    }



                    {/* Oppo Carousel */}
                    {
                        brand_name == "Oppo" &&
                        <div className="carousel md:w-96">
                            <div id="slide1" className="carousel-item relative w-full">
                                <img src="https://i.postimg.cc/tCW4Mkg1/Oppo-Reno6.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                                <img src="https://i.postimg.cc/fRqpjnhY/Oppo-A77s.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                <img src="https://i.postimg.cc/Z5Xj5TSs/OPPO-F21s-Pro.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>

                        </div>
                    }
                </div>
            </div>

            {/* Producs */}
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {
                        remaining.length > 0 ?
                            remaining.map(product =>
                                <ProductCart key={product._id} product={product} ></ProductCart>
                            ) :
                            <div className="h-[100vh] w-screen">
                                <div className="flex justify-center items-center h-full">
                                    <div class="bg-white rounded-lg p-8 shadow-md w-96 text-center">
                                        <h1 class="text-2xl font-bold text-gray-700">No Data Added</h1>
                                        <p class="text-gray-600 mt-4">Sorry, there is currently no data available on this page.</p>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default Products;