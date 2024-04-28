import React from 'react';
import { Link } from "react-router-dom";

const CraftCard = ({ craft }) => {
    const {_id, imageUrl, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, userEmail, userName } = craft;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className='h-56'><img src={imageUrl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {itemName}
                    <div className="badge badge-secondary">{stockStatus}</div>
                </h2>
                <p>Category: {subcategoryName}</p>
                <p>Price: <span className='text-red-500'>${price}</span> </p>
                <p>Rating: <span className='text-yellow-400 font-semibold'>⭐ {rating}</span> </p>
            </div>
            <Link to={{
                    pathname: `/CraftDetails/${_id}`,
                    state: { craft }
                }} className="btn btn-primary">View Details</Link>
            
        </div>
    );
};

export default CraftCard;