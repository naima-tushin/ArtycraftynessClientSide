import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CraftDetails = () => {
    const craft = useLoaderData();
    const { _id, imageUrl, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, userEmail, userName } = craft;

    return (
        <div className="container mx-auto px-5 py-8">
            <h1 className="text-center text-4xl font-bold text-purple-800 mb-6">Craft <span className='text-[#c54899]'>Item</span> <span className='text-gray-500'>Details</span></h1>
            <div className="flex flex-wrap justify-center items-start">
                <div className="w-full md:w-1/2 relative border border-[#322760] rounded-xl">
                    <img className="w-full rounded-lg shadow-md" src={imageUrl} alt={itemName} />
                    <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-purple-800 text-white px-8 py-4 rounded text-xl">{itemName}</h2>
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left md:pl-6 mt-8 md:mt-0 leading-[21px]">
                    <p className="text-gray-700 mb-4"><span className="font-bold text-purple-800">ID:</span> {_id}</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold text-purple-800">Category:</span> {subcategoryName}</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold text-purple-800">Price:</span> ${price}</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold text-purple-800">Processing Time:</span> {processingTime}</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold text-purple-800">Customization:</span> {customization}</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold text-purple-800">Stock Status:</span> {stockStatus}</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold text-purple-800">User Name:</span> {userName}</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold text-purple-800">User Email:</span> {userEmail}</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold text-purple-800">Rating:</span> ⭐ {rating}</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold text-purple-800">Description:</span> {shortDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default CraftDetails;
