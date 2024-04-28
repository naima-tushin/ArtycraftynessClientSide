import { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { FaGoogle, FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 300) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 300) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop);

    return (
        <footer className="bg-black text-white pt-12  ">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center lg:px-32 md:px-8 ">
                <div className="flex flex-col items-center md:items-start mb-10">
                    <img src={logo} alt="Logo" className="w-32 mb-2 mx-auto" />
                    <div className="flex space-x-4">
                        <FaGoogle className="lg:text-3xl md:text-xl text-2xl hover:text-[#b99954] cursor-pointer" />
                        <FaGithub className="lg:text-3xl md:text-xl text-2xl hover:text-[#b99954] cursor-pointer" />
                        <FaInstagram className="lg:text-3xl md:text-xl text-2xl hover:text-[#b99954] cursor-pointer" />
                        <FaFacebook className="lg:text-3xl md:text-xl text-2xl hover:text-[#b99954] cursor-pointer" />
                        <FaLinkedin className="lg:text-3xl md:text-xl text-2xl hover:text-[#b99954] cursor-pointer" />
                    </div>
                </div>
                <p className="lg:w-7/12 text-center  lg:text-sm text-xs  text-gray-500 font-black lg:mb-6">
                    Welcome to Elite Estates, your ultimate destination for prime commercial real estate solutions.<br /> Our bespoke approach ensures your business finds the perfect space to thrive. Unlock opportunities that redefine success with our expert guidance. Experience excellence in every transaction, exclusively at Elite Estates.
                </p>
                

                <nav className="mt-8 md:mt-0 ">
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                        <div>
                            <h6 className="font-semibold text-lg mb-4 text-[#b99954] text-center">Explore</h6>
                            <ul className="text-white text-center">
                                <li><Link to="/" className="hover:text-[#b99954] font-bold">Home</Link></li>
                                <li><Link to="/membership" className="hover:text-[#b99954] font-bold">Membership</Link></li>
                                <li><Link to="/updateprofile" className="hover:text-[#b99954] font-bold">Update Profile</Link></li>
                                <li><Link to="/userprofile" className="hover:text-[#b99954] font-bold">User Profile</Link></li>
                                <li><Link to="/login" className="hover:text-[#b99954] font-bold">Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            
            {/* Copyright Footer */}
            <div className="bg-gray-500 py-4 mt-10">
                <div className="container mx-auto text-center text-white lg:text-sm text-xs font-bold">
                    <p>&copy; {new Date().getFullYear()} Your Elite Estate Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
