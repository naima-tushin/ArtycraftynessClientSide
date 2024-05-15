import React from 'react';
import { Link } from 'react-router-dom';

const SubcategoryCraftCard = ({ craft }) => {
    const { imageUrl, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, userEmail, userName } = craft;

    return (
        <Link to="/AllSubcategoryCraft">
        <div className="card w-96 bg-gray-500 bg-opacity-20 shadow-xl">
            <figure className='h-56'><img src={imageUrl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {itemName}
                    <div className="badge badge-secondary">{stockStatus}</div>
                </h2>
                <p>Category: {subcategoryName}</p>
                <p>Price: <span className='text-[#c54899]'>${price}</span> </p>
                <p>Rating: <span className='text-[#c54899] font-semibold'>⭐ {rating}</span> </p>
                <p>Customizable: <span className='text-[#c54899] font-semibold'> {customization}</span> </p>
            </div> 
        </div>
        </Link>
    );
};

export default SubcategoryCraftCard;