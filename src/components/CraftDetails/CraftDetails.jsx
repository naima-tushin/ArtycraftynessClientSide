import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CraftDetails = () => {
    const craft = useLoaderData();
    const {_id, imageUrl, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, userEmail, userName } = craft;

    return (
        <div>
            <h1>Craft Details</h1>
            <div>
                <img src={imageUrl} alt={itemName} />
                <h2>{itemName}</h2>
                <p>Category: {subcategoryName}</p>
                <p>Description: {shortDescription}</p>
                <p>Price: ${price}</p>
                <p>Rating: ⭐ {rating}</p>
                <p>Customization: {customization}</p>
                <p>Processing Time: {processingTime}</p>
                <p>Stock Status: {stockStatus}</p>
                
            </div>
        </div>
    );
};

export default CraftDetails;
