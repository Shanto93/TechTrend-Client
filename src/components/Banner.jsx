const Banner = () => {
    return (
        <div className="hero h-[85vh]" style={{ backgroundImage: 'url(https://i.postimg.cc/d1Vg78t7/Banner.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-2xl md:text-4xl font-bold">Welcome to <span className="text-[#e67e22]">Trend<span className="text-[#e74c3c]">Tech</span></span></h1>
                    <p className="mb-5 text-sm md:text-xl">Unveil a world of innovation with renowned brands like Apple, Samsung, Sony, Google, Intel, and Oppo. From mobiles to laptops, we offer exclusive deals and exceptional service.</p>
                    <button className="btn bg-[#e67e22] text-white font-bold hover:bg-[#e74c3c] border-0">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;