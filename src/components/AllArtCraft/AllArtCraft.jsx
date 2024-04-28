import React from 'react';
import { Helmet } from "react-helmet-async";
import { useLoaderData } from 'react-router-dom';
import CraftCard from '../CraftCard/CraftCard';

const AllArtCraft = () => {
    const allCraft = useLoaderData();
    console.log(allCraft);
    return (
       
        <div className='flex flex-col items-center'> 
         <Helmet>
                <title>All Arts and Craft</title>
            </Helmet>
            <h1>Our All Painting and Drawing</h1>
            <div className='flex flex-wrap justify-center'>
                {allCraft.map(craft => (
                    <div key={craft._id} className='flex flex-col items-center mx-4 my-2'> 
                        <CraftCard craft={craft} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllArtCraft;
