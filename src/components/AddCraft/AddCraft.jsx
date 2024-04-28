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
    };


    return (
        <div className="font-roboto">
            <Helmet>
                <title>Add Craft</title>
            </Helmet>
            <form onSubmit={handleAddCraft} className="p-20 items-center gap-20">
                {/* Image Url */}
                <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
                {/* Item Name */}
                <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} placeholder="Item Name" className="input input-bordered w-full max-w-xs" />
                <br />
                {/* Sub Category Name */}
                <select name="subcategoryName" value={formData.subcategoryName} onChange={handleChange} className="input input-bordered w-full max-w-xs">
                    <option value="">Select Sub Category</option>
                    <option value="Landscape Painting">Landscape Painting</option>
                    <option value="Portrait Drawing">Portrait Drawing</option>
                    <option value="Water Color Painting">Water Color Painting</option>
                    <option value="Oil Painting">Oil Painting</option>
                    <option value="Charcoal Sketching">Charcoal Sketching</option>
                    <option value="Cartoon Drawing">Cartoon Drawing</option>
                </select>
                {/* short Description */}
                <input type="text" name="shortDescription" value={formData.shortDescription} onChange={handleChange} placeholder="Short Description" className="input input-bordered w-full max-w-xs" />
                {/* price */}
                <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
                <br />
                {/* rating */}
                <input type="text" name="rating" placeholder="Rating" value={formData.rating} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
               {/* customization */}
                <select name="customization" value={formData.customization} onChange={handleChange} className="input input-bordered w-full max-w-xs">
                    <option value="">Select Customization</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <br />
                 {/* Processing Time */}
                <input type="text" name="processingTime"  value={formData.processingTime} onChange={handleChange} placeholder="Processing Time" className="input input-bordered w-full max-w-xs" />
                {/* Stock Status */}
                <select name="stockStatus" value={formData.stockStatus} onChange={handleChange} className="input input-bordered w-full max-w-xs">
                    <option value="">Select Stock Status</option>
                    <option value="In stock">In stock</option>
                    <option value="Made to Order">Made to Order</option>
                </select>
                {/* Submit Button */}
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddCraft;
