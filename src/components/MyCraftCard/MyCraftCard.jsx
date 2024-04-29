import React from 'react';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraftCard = ({ craft, allCraft, setAllCraft }) => {
    const {_id, imageUrl, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, userEmail, userName } = craft;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/craft/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: `${itemName} is Deleted!`,
                            text: "Your craft has been deleted.",
                            icon: "success"
                          });
                          const remaining = allCraft.filter(cof => cof._id !== _id);
                          setAllCraft(remaining);
                          
                    }
                })

             
            }
          });
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className='h-56'><img src={imageUrl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {itemName}
                    <div className="badge badge-secondary">{stockStatus}</div>
                </h2>
                <p>Category: {subcategoryName}</p>
                <p>By: {userName}</p>
                <p>Price: <span className='text-red-500'>${price}</span> </p>
                <p>Rating: <span className='text-yellow-400 font-semibold'>⭐ {rating}</span> </p>
            </div>
            <div className='ml-8 mb-2 flex flex-row gap-8'>
            <Link to={`/CraftDetails/${_id}`}>
            <button className="btn">View Details</button>
            </Link>
            <Link to={`/updateCraft/${_id}`}>
            <button className="btn">Update</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn bg-red-500">Delete</button>
            </div>
            
        </div>
    );
};

export default MyCraftCard;