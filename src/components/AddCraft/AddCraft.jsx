import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import React, { useState } from "react";
import Swal from "sweetalert2";

const AddCraft = () => {
    const { user } = useAuth();
   
    const [formData, setFormData] = useState({
        imageUrl: "",
        itemName: "",
        subcategoryName: "",
        shortDescription: "",
        price: "",
        rating: "",
        customization: "",
        processingTime: "",
        stockStatus: "",
        userEmail: user?.email,
        userName: user?.displayName,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddCraft = (e) => {
        e.preventDefault();
        
        if (formData.itemName !== '' && formData.imageUrl !== '' && formData.price !== '' ){
            console.log(formData); 
        fetch('http://localhost:5000/craft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        Swal.fire({
            title: `${formData.itemName} is Added`,
            text: "Craft Added Successfully",
            icon: "success"
          });
        }
        else{
            Swal.fire({
            title: 'Must Fill Name, ImageURL and Price',
            icon: "error"
          });
        }
        
    };


    return (
        <div className="font-roboto h-full flex justify-center items-center border bg-[#322760] bg-opacity-40 mt-8">
    <Helmet>
        <title>Artycraftyness | Add Craft Item</title>
    </Helmet>
    <form onSubmit={handleAddCraft} className="p-16 gap-20">
        <div className="grid grid-cols-4 gap-6">
            <div>
                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <label htmlFor="itemName">Item Name</label>
                <input type="text" name="itemName" id="itemName" value={formData.itemName} onChange={handleChange} placeholder="Item Name" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <label htmlFor="subcategoryName">Sub Category Name</label>
                <select name="subcategoryName" id="subcategoryName" value={formData.subcategoryName} onChange={handleChange} className="input input-bordered w-full max-w-xs">
                    <option value="">Select Sub Category</option>
                    <option value="Landscape Painting">Landscape Painting</option>
                    <option value="Portrait Drawing">Portrait Drawing</option>
                    <option value="Water Color Painting">Water Color Painting</option>
                    <option value="Oil Painting">Oil Painting</option>
                    <option value="Charcoal Sketching">Charcoal Sketching</option>
                    <option value="Cartoon Drawing">Cartoon Drawing</option>
                </select>
            </div>
            <div>
                <label htmlFor="shortDescription">Short Description</label>
                <input type="text" name="shortDescription" id="shortDescription" value={formData.shortDescription} onChange={handleChange} placeholder="Short Description" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input type="text" name="price" id="price" placeholder="Price" value={formData.price} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <label htmlFor="rating">Rating</label>
                <input type="text" name="rating" id="rating" placeholder="Rating" value={formData.rating} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <label htmlFor="customization">Customization</label>
                <select name="customization" id="customization" value={formData.customization} onChange={handleChange} className="input input-bordered w-full max-w-xs">
                    <option value="">Select Customization</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div>
                <label htmlFor="processingTime">Processing Time</label>
                <input type="text" name="processingTime" id="processingTime" value={formData.processingTime} onChange={handleChange} placeholder="Processing Time" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <label htmlFor="stockStatus">Stock Status</label>
                <select name="stockStatus" id="stockStatus" value={formData.stockStatus} onChange={handleChange} className="input input-bordered w-full max-w-xs">
                    <option value="">Select Stock Status</option>
                    <option value="In stock">In stock</option>
                    <option value="Made to Order">Made to Order</option>
                </select>
            </div>
            <div>
                <label htmlFor="userEmail">User Email</label>
                <input type="text" name="userEmail" id="userEmail" placeholder="User Email" value={formData.userEmail} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <label htmlFor="userName">User Name</label>
                <input type="text" name="userName" id="userName" placeholder="User Name" value={formData.userName} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
            </div>
        </div>
         <div className="flex justify-center"> 
            <button type="submit" className="btn bg-[#322760] hover:bg-[#c54899] text-white px-10 text-xl mt-8">Add</button>
        </div>
    </form>
</div>

    );
};

export default AddCraft;
