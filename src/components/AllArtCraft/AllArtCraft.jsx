import React from 'react';
import { Helmet } from "react-helmet-async";
import { useLoaderData } from 'react-router-dom';

const AllArtCraft = () => {
    const allCraft = useLoaderData();
    console.log(allCraft);
    return (
        <div className='flex flex-col items-center'> 
            <Helmet>
                <title>Artycraftyness | All Arts and Craft</title>
            </Helmet>
            <table className="table w-full mt-8">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Item Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Customizable</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {allCraft.map(craft => (
                        <tr key={craft._id}>
                            <td><img src={craft.imageUrl} alt="Craft" className="h-16 w-16" /></td>
                            <td>{craft.itemName}</td>
                            <td>{craft.subcategoryName}</td>
                            <td>${craft.price}</td>
                            <td>{craft.rating}</td>
                            <td>{craft.customization}</td>
                            <td><a href={`/CraftDetails/${craft._id}`} className="text-blue-500 underline">View Details</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllArtCraft;
