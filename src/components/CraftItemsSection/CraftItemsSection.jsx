import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const CraftItemsSection = ({ craftItems }) => {
    const { _id, itemName, price, customization, processingTime, stockStatus, imageUrl } = craftItems;

    return (
        <div className="container mx-auto w-10/12 lg:w-[75%]">

            <Helmet>
                <title>Artycraftyness | Craft Items Section</title>
            </Helmet>


            <div className="card lg:w-96 bg-gradient-to-b from-[transparent] to-[#322760] border-2 border-[#322760] mt-4">
                <figure className="px-10 pt-10">
                    <img src={imageUrl} className="rounded-xl bg-[#F3F3F3] border border-[#322760] h-[230px] w-[350px] md:w-[800px] md:h-[200px] lg:w-[800px] lg:h-[200px]" />
                </figure>
                <div className="card-body ">
                    <div className="flex flex-col lg:flex-row lg:gap-14 gap-6">
                        <h2 className="font-bold text-[19px] font-roboto text-white"><span className="font-normal font-sedan">{itemName}</span></h2>
                    </div>

                    <p className="lg:text-[16px] font-bold font-roboto text-white">Processing Time: <span className="font-normal font-roboto">{processingTime}</span></p>

                    <p className="lg:text-[16px] font-bold font-roboto text-white">Customizable: <span className="font-normal font-roboto">{customization}</span></p>

                    <p className="lg:text-[16px] font-bold font-roboto text-white">Stock Status: <span className="font-normal font-roboto">{stockStatus}</span></p>

                    <p className="lg:text-xl font-bold font-roboto text-[#c54899]">Price: <span className="font-normal font-roboto text-[#c54899]">${price}</span></p>

                    <Link to={`/CraftDetails/${_id}`}>
                        <button className="btn bg-[#c54899] text-white hover:bg-gray-500">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default CraftItemsSection;
