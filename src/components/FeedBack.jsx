const FeedBack = () => {
    return (
        <div>
            <h2 className="text-4xl text-center font-bold mt-10 mb-7">Customers Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {/* first */}
                <div className="card w-72 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-4">
                        <img src="https://i.postimg.cc/Kv8vMTkx/women01.jpg" alt="Shoes" className="rounded-full w-16 h-16" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Salena williams</h2>
                        <p>The mobile is a beast! Super-fast processor, excellent camera, and a sleek design. It is a tech marvel!</p>
                    </div>
                </div>
                {/* second */}
                <div className="card w-72 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-4">
                        <img src="https://i.postimg.cc/kGDzn7G3/men02.jpg" alt="Shoes" className="rounded-full w-16 h-16" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Will Young</h2>
                        <p>This laptop is a powerhouse. It handles my heavy tasks effortlessly. The display is stunning, and the keyboard is a dream to type on.</p>
                    </div>
                </div>
                {/* third */}
                <div className="card w-72 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-4">
                        <img src="https://i.postimg.cc/NjV1VBq2/men03.webp" alt="Shoes" className="rounded-full w-16 h-16" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Sadab Khan</h2>
                        <p>I adore this mobile! It is not just stylish but also efficient. The camera captures stunning photos. Love it!</p>
                    </div>
                </div>
                {/* fourth */}
                <div className="card w-72 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-4">
                        <img src="https://i.postimg.cc/wvzs8BWM/istockphoto-1271198248-170667a.jpg" alt="Shoes" className="rounded-full w-16 h-16" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Maria Sarapova</h2>
                        <p>The headphones are a must-have. The sound is clear, and they are so comfortable, making my music experience enjoyable.</p>
                    </div>
                </div>
                {/* fifth */}
                <div className="card w-72 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-4">
                        <img src="https://i.postimg.cc/XvLnq7jp/images.jpg" alt="Shoes" className="rounded-full w-16 h-16" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shahbaz khan</h2>
                        <p>This laptop is perfect for my needs. Lightweight, long battery life, and the display is so vivid. I am impressed!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;