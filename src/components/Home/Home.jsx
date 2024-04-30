import React from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from "react-helmet-async";
import CraftItemsSection from '../CraftItemsSection/CraftItemsSection';
import { useLoaderData } from 'react-router-dom';

const home = () => {
    const craftItem = useLoaderData();
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
<div className='text-center font-bold text-4xl text-[#322760] mb-5'>
    <h1 className="text-[#c54899] mb-5">Art & Craft Categories</h1>
    <h1 className="text-[#c54899] mb-5">Relevant</h1>
    <h1 className="text-[#c54899] mb-5">Section</h1>
</div>

            {/* <CraftItemsSection></CraftItemsSection> */}
            <div>
                <Helmet>
                    <title>Artycraftyness | Home</title>
                </Helmet>
            </div>
        </div>
    );
};

export default home;