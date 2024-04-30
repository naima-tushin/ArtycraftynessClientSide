import React, { useState, useEffect } from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from "react-helmet-async";
import CraftItemsSection from '../CraftItemsSection/CraftItemsSection';
import { useLoaderData } from 'react-router-dom';
import CraftCard from '../CraftCard/CraftCard';
import PaintingDrawingSection from '../PaintingDrawingSection/PaintingDrawingSection';

const home = () => {
    const craftItem = useLoaderData();
    const [craftSubcategoryItems, setCraftSubcategoryItems] = useState([]);
    useEffect(() => {
        // Fetch data from the API when the component mounts
        fetch('http://localhost:5000/craftSubcategory')
            .then(response => response.json())
            .then(data => setCraftSubcategoryItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    console.log(craftSubcategoryItems);

    return (
        <div>
            <Banner></Banner>
            <div className='text-center font-bold text-4xl text-[#322760] mb-5'>
                <h1>Craft <span className="text-[#c54899]">Items</span></h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
    {
        craftItem.slice(0, 6).map(craftItems => (
            <CraftItemsSection key={craftItems._id} craftItems={craftItems}></CraftItemsSection>
        ))
    }
    
</div>
<h1 className="text-center font-bold text-4xl text-[#322760] my-14">Art & Craft Categories</h1>
<div className='flex flex-wrap justify-center'>
                {craftSubcategoryItems.map(craft => (
                    <div key={craft._id} className='flex flex-col items-center mx-4 my-2'> 
                        <CraftCard craft={craft} />
                    </div>
                ))}
            </div>
            {
        craftItem.slice(0, 1).map(craftItems => (
            <PaintingDrawingSection key={craftItems._id} craftItems={craftItems}></PaintingDrawingSection>
        ))
    }
<div className='text-center font-bold text-4xl text-[#322760] mb-5'>
    <h1 className="text-[#c54899] mb-5">Section</h1>
</div>

            <div>
                <Helmet>
                    <title>Artycraftyness | Home</title>
                </Helmet>
            </div>
        </div>
    );
};

export default home;