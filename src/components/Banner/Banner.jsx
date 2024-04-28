import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import banner4 from '../../assets/images/banner4.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full mb-28">

                {/* Slide1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='overlay lg:overlay md:overlay'></div>
                    <img src={banner1} className="h[200px] md:h-[650px] lg:w-full lg:h-[650px] md:object-cover lg:object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#b99954] opacity-50"></div>
                    <div className="opacity-45 absolute inset-0 flex flex-col justify-center items-center mb-52 md:mb-72 text-white md:gap-8 lg:gap-8">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold ml-8">Elite Estates</h2>
                    </div>

                    <div className="overlay absolute inset-0 flex flex-col justify-center items-center text-white md:gap-8 lg:gap-8 mb-20 lg:mb-0 text-center">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold ml-8">Discover Commercial Real Estate Opportunities</h2>
                        <p className="text-[14px] md:text-xl lg:text-2xl font-bold ml-8 lg:ml-0 md:ml-0">Explore our collection of commercial properties for investment or lease</p>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-[#b99954] hover:bg-gray-500 border-black text-xl mt-28 lg:mt-0">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#b99954] hover:bg-gray-500 border-black text-xl mt-28 lg:mt-0">❯</a>
                    </div>
                </div>

                {/* Slide2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='overlay lg:overlay md:overlay'></div>
                    <img src={banner2} className="h[200px] md:h-[650px] lg:w-full lg:h-[650px] md:object-cover lg:object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#b99954] opacity-50"></div>
                    <div className="opacity-45 absolute inset-0 flex flex-col justify-center items-center mb-52 md:mb-72  text-white md:gap-8 lg:gap-8">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold ml-8">Elite Estates</h2>
                    </div>

                    <div className="overlay absolute inset-0 flex flex-col justify-center items-center text-white md:gap-8 lg:gap-8 mb-20 lg:mb-0 text-center">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold ml-8">Your Ideal Commercial Space Awaits</h2>
                        <p className="text-[14px] md:text-xl lg:text-2xl font-bold text-center">Discover premium commercial properties tailored to your business needs</p>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-[#b99954] hover:bg-gray-500 border-black text-xl mt-28 lg:mt-0">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#b99954] hover:bg-gray-500 border-black text-xl mt-28 lg:mt-0">❯</a>
                    </div>
                </div>

                {/* Slide3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='overlay lg:overlay md:overlay'></div>
                    <img src={banner3} className="h[200px] md:h-[650px] lg:w-full lg:h-[650px] md:object-cover lg:object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#b99954] opacity-50"></div>
                    <div className="opacity-45 absolute inset-0 flex flex-col justify-center items-center mb-52 md:mb-72 text-white md:gap-8 lg:gap-8">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold ml-8">Elite Estates</h2>
                    </div>
                    <div className="overlay absolute inset-0 flex flex-col justify-center items-center text-white md:gap-8 lg:gap-8 mb-20 lg:mb-0 text-center">
                        <h2 className="text-xl md:text-4xl lg:text-5xl font-bold">Experience Unmatched Commercial Excellence</h2>
                        <p className="text-[14px] md:text-xl lg:text-2xl font-bold text-center">Discover top-tier commercial properties for your business ventures</p>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-[#b99954] hover:bg-gray-500 border-black text-xl mt-28 lg:mt-0">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-[#b99954] hover:bg-gray-500 border-black text-xl mt-28 lg:mt-0">❯</a>
                    </div>
                </div>

                {/* Slide4 */}
                <div id="slide4" className="carousel-item relative w-full">
                    <div className='overlay lg:overlay md:overlay'></div>
                    <img src={banner4} className="h[200px] md:h-[650px] lg:w-full lg:h-[650px] md:object-cover lg:object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#b99954] opacity-50"></div>
                    <div className="opacity-45 absolute inset-0 flex flex-col justify-center items-center mb-52 md:mb-72 text-white md:gap-8 lg:gap-8">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold ml-8">Elite Estates</h2>
                    </div>

                    <div className="overlay absolute inset-0 flex flex-col justify-center items-center text-white md:gap-8 lg:gap-8 mb-20 lg:mb-0 text-center">
                        <h2 className="text-xl md:text-4xl lg:text-5xl font-bold ml-6">Where Elegance Meets Functionality</h2>
                        <p className="text-[14px] md:text-xl lg:text-2xl font-bold text-center ml-6 lg:ml-0 md:ml-0">Experience a harmonious blend of sophistication and practicality in our commercial properties</p>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-[#b99954] hover:bg-gray-500 border-black text-xl mt-28 lg:mt-0">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#b99954] hover:bg-gray-500 border-black text-xl mt-28 lg:mt-0">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;