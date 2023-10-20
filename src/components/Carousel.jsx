const Carousel = () => {
    return (
        <div className="w-full mb-10">
            <div className="flex justify-center">
                <div className="h-96 carousel carousel-vertical rounded-box">
                    <div className="carousel-item h-full">
                        <img src="https://i.postimg.cc/zXQ7mnTf/Samsung-Galaxy-A51.jpg" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://i.postimg.cc/nzVB9zq5/Samsung-Galaxy-Note-10.jpg" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://i.postimg.cc/RCyX3kZR/Samsung-Galaxy-Note-20.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;