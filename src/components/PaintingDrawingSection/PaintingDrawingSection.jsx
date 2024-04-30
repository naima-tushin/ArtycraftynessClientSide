import React from 'react';
import { Link } from "react-router-dom";

const PaintingDrawingSection = () => {
    return (
        <section className="my-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-[#322760]">
                    Welcome to <span className='text-[#c54899]'>Our World</span> of <span className='text-gray-500'>Creativity</span>
                </h2>
            <div className="bg-[#c54899] bg-opacity-20 py-16 container mx-auto px-4">
                
                <p className="text-xl font-semibold text-black leading-relaxed mb-8 text-center">
                    Unlock Your Imagination and Dive into a World of Colors
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="max-w-lg mx-auto">
                        <h3 className="text-2xl font-semibold text-[#322760] mb-4">Explore Our Collections</h3>
                        <p className="text-lg text-[#322760] leading-relaxed mb-6">
                            Delve into our curated collections, where each piece is carefully selected to ignite your passion for creativity. From vibrant acrylics to delicate watercolors, our range caters to every artist's palette.
                        </p>
                    </div>
                    <div className="max-w-lg mx-auto">
                        <h3 className="text-2xl font-semibold text-[#322760] mb-4">Discover Your Muse</h3>
                        <p className="text-lg text-[#322760] leading-relaxed mb-6">
                            Unleash your inner artist and let your imagination soar. Our diverse selection of mediums, brushes, and canvases provides endless possibilities for expression.
                        </p>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <Link to="/allartcraft">
                                <button className="bg-[#c54899] text-white py-3 px-6 font-medium rounded-md hover:bg-[#322760] transition duration-300 ease-in-out">All Art & Craft Items</button>
                            </Link>
                </div>
            </div>
        </section>
    );
};

export default PaintingDrawingSection;
