import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { useLoaderData } from 'react-router-dom';
import MyCraftCard from '../MyCraftCard/MyCraftCard';

const MyArtCraft = () => {
    const loadedAllCraft = useLoaderData();
    const [allCraft, setAllCraft] = useState(loadedAllCraft);
    const [customizationFilter, setCustomizationFilter] = useState('all'); // State to hold the filter value

    // Function to filter crafts based on customization
    const filteredCrafts = allCraft.filter(craft => {
        if (customizationFilter === 'all') {
            return true; // Show all crafts if filter is set to 'all'
        } else {
            return craft.customization === customizationFilter;
        }
    });

    return (
        <div className='flex flex-col items-center'>
            <Helmet>
                <title>Artycraftyness | My Arts and Craft List</title>
            </Helmet>
            <div className='flex justify-center'>
                {/* Buttons to toggle filter */}
                <button onClick={() => setCustomizationFilter('all')} className={customizationFilter === 'all' ? 'selected' : ''}>All</button>
                <button onClick={() => setCustomizationFilter('Yes')} className={customizationFilter === 'Yes' ? 'selected' : ''}>Customized</button>
                <button onClick={() => setCustomizationFilter('No')} className={customizationFilter === 'No' ? 'selected' : ''}>Not Customized</button>
            </div>
            <div className='flex flex-wrap justify-center'>
                {filteredCrafts.map(craft => (
                    <div key={craft._id} className='flex flex-col items-center mx-4 my-2'>
                        <MyCraftCard craft={craft} allCraft={allCraft} setAllCraft={setAllCraft}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyArtCraft;
