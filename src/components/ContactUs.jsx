import { ImLocation } from 'react-icons/im';
import { BiMobile } from 'react-icons/bi';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FaFax } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div >
            <h2 className="text-4xl font-bold text-center mt-10 mb-7">Contact Us</h2>
            <div className="md:flex justify-between">
                {/* first cart */}
                <div className="card md:w-60 shadow-xl bg-yellow-600">
                    <div className="card-body items-center text-center">
                        <p className='text-4xl text-white'><HiOutlineMailOpen></HiOutlineMailOpen></p>
                        <h2 className="card-title text-white">Email</h2>
                        <p className="text-white">shantoislam7363@gmail.com</p>
                    </div>
                </div>
                {/* second cart */}
                <div className="card md:w-60 shadow-xl bg-amber-800">
                    <div className="card-body items-center text-center">
                    <p className='text-4xl text-white'><BiMobile></BiMobile></p>
                        <h2 className="card-title text-white">Mobile</h2>
                        <p className="text-white">01997266467</p>
                    </div>
                </div>
                {/* third cart */}
                <div className="card md:w-60 shadow-xl bg-lime-600">
                    <div className="card-body items-center text-center">
                        <p className='text-4xl text-white'><ImLocation></ImLocation></p>
                        <h2 className="card-title text-white">Office Location</h2>
                        <p className="text-white">Hathazari,Chittagong</p>
                    </div>
                </div>
                <div className="card md:w-60 shadow-xl bg-red-600">
                    <div className="card-body items-center text-center">
                        <p className='text-4xl text-white'><FaFax></FaFax></p>
                        <h2 className="card-title text-white">Fax</h2>
                        <p className="text-white">1-23-45-678900</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;