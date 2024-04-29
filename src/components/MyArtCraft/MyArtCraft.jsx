import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { useLoaderData } from 'react-router-dom';
import MyCraftCard from '../MyCraftCard/MyCraftCard';

const MyArtCraft = () => {
    const loadedAllCraft = useLoaderData();
    const [allCraft, setAllCraft] = useState(loadedAllCraft);
    console.log(allCraft);
    return (

        <div className='flex flex-col items-center'>
            <Helmet>
                <title>Artycraftyness | My Arts and Craft List</title>
            </Helmet>
            <div className='flex flex-wrap justify-center'>
                {allCraft.map(craft => (
                    <div key={craft._id} className='flex flex-col items-center mx-4 my-2'>
                        <MyCraftCard craft={craft} allCraft={allCraft} setAllCraft={setAllCraft}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyArtCraft;