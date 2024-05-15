import React from 'react';
import { Helmet } from "react-helmet-async";
import { useLoaderData } from 'react-router-dom';

const AllSubcategoryCraft = () => {
    const allCraft = useLoaderData();
    console.log(allCraft);
    return (
        <div className='flex flex-col items-center'> 
            <Helmet>
                <title>Artycraftyness | All Subcategory Craft</title>
            </Helmet>
            <h1 className='text-center font-bold text-4xl text-[#322760] my-5'>All Subcategory Craft</h1>
            <table className="table w-full mt-8">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Subcategory Name</th>
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
                            <td><a href={`/allCraftCategoryDetails/${craft._id}`} className="text-white bg-[#322760] hover:bg-[#c54899] px-8 py-4 rounded-xl">View Details</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllSubcategoryCraft;
