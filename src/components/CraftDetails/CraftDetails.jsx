import React from 'react';

const CraftDetails = ({ location }) => {
    const { craft } = location.state || {}; // Destructure craft from location.state, provide empty object as fallback
    if (!craft) {
        // Handle the case where craft data is not available
        return <div>No craft data available</div>;
    }

    // Destructure craft object
    const {
        imageUrl,
        itemName,
        subcategoryName,
        shortDescription,
        price,
        rating,
        customization,
        processingTime,
        stockStatus,
        userEmail,
        userName
    } = craft;

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
                <p>User Email: {userEmail}</p>
                <p>User Name: {userName}</p>
            </div>
        </div>
    );
};

export default CraftDetails;
