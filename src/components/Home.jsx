import AvailableBrands from "./AvailableBrands";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import FeedBack from "./FeedBack";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AvailableBrands></AvailableBrands>
            <FeedBack></FeedBack>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;