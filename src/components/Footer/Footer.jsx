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
        <footer className="bg-[#322760] bg-opacity-20 text-white pt-12  ">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center lg:px-32 md:px-8 ">
                <div className="flex flex-col items-center md:items-start mb-10">
                    <img src={logo} alt="Logo" className="w-32 mb-2 mx-auto" />
                    <div className="flex space-x-4">
                        <FaGoogle className="lg:text-3xl md:text-xl text-2xl text-[#c54899] hover:text-[#322760] cursor-pointer" />
                        <FaGithub className="lg:text-3xl md:text-xl text-2xl text-[#c54899] hover:text-[#322760] cursor-pointer" />
                        <FaInstagram className="lg:text-3xl md:text-xl text-2xl text-[#c54899] hover:text-[#322760] cursor-pointer" />
                        <FaFacebook className="lg:text-3xl md:text-xl text-2xl text-[#c54899] hover:text-[#322760] cursor-pointer" />
                        <FaLinkedin className="lg:text-3xl md:text-xl text-2xl text-[#c54899] hover:text-[#322760] cursor-pointer" />
                    </div>
                </div>
                <p className="lg:w-7/12 text-center  lg:text-sm text-xs  text-[#322760] font-black lg:mb-6">
                Welcome to Artycraftyness, your premier destination for unique artisanal creations and craft supplies. <br /> Our personalized approach ensures that your artistic vision finds the perfect tools and inspiration to flourish. Discover endless possibilities that redefine creativity with our expert guidance. Immerse yourself in a world of artistic excellence, exclusively at Artisan's Haven.

                </p>
                

                <nav className="mt-8 md:mt-0 ">
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                        <div>
                            <h6 className="font-semibold text-lg mb-4 text-[#c54899] text-center">Contact Information</h6>
                            <p className='text-gray-500'>Email: naimatushin21@gmail.com</p>
                        </div>
                    </div>
                </nav>
            </div>
            
            {/* Copyright Footer */}
            <div className="bg-[#322760] bg-opacity-30 py-4 mt-10">
                <div className="container mx-auto text-center text-[#c54899] lg:text-sm text-xs font-bold">
                    <p>&copy; {new Date().getFullYear()} Artycraftyness. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
