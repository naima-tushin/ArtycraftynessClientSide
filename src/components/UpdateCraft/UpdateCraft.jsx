import { Helmet } from "react-helmet-async";
import { useLoaderData } from 'react-router-dom';
import React from "react";
import Swal from "sweetalert2";

const UpdateCraft = () => {

    const craft = useLoaderData();
    const {_id, imageUrl, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, userEmail, userName } = craft;

    const handleUpdateCraft = event => {
        event.preventDefault();
        const form =  event.target;

        const name =  form.itemName.value;
        const imageUrl =  form.imageUrl.value;
        const subcategoryName =  form.subcategoryName.value;
        const shortDescription =  form.shortDescription.value;
        const price =  form.price.value;
        const rating =  form.rating.value;
        const customization =  form.customization.value;
        const processingTime =  form.processingTime.value;
        const stockStatus =  form.stockStatus.value;
     

        const updateCraft = {name, imageUrl, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus}
        
        console.log(updateCraft);
        fetch(`https://users-management-server-five.vercel.app/craft/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updateCraft)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.modifiedCount> 0){
                        Swal.fire({
                            title: `${updateCraft.name} Updated`,
                            text: "Craft Update Successfully",
                            icon: "success"
                          });
                    }
                })
               

    }
   
    return (
        <div className="font-roboto h-full flex justify-center items-center border bg-[#322760] bg-opacity-40 mt-8">
    <Helmet>
        <title>Artycraftyness | Update Craft</title>
    </Helmet>
    <form onSubmit={handleUpdateCraft} className="p-20 items-center gap-20">
        <div className="grid grid-cols-3 gap-6">
            <div>
                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" name="imageUrl" defaultValue={imageUrl} placeholder="Image URL" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <label htmlFor="itemName">Item Name</label>
                <input type="text" name="itemName" defaultValue={itemName} placeholder="Item Name" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <label htmlFor="subcategoryName">Sub Category Name</label>
                <select name="subcategoryName" defaultValue={subcategoryName} className="input input-bordered w-full max-w-xs">
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
                <input type="text" name="shortDescription" defaultValue={shortDescription} placeholder="Short Description" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input type="text" name="price" placeholder="Price" defaultValue={price} className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <label htmlFor="rating">Rating</label>
                <input type="text" name="rating" placeholder="Rating" defaultValue={rating} className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <label htmlFor="customization">Customization</label>
                <select name="customization" defaultValue={customization} className="input input-bordered w-full max-w-xs">
                    <option value="">Select Customization</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div>
                <label htmlFor="processingTime">Processing Time</label>
                <input type="text" name="processingTime" defaultValue={processingTime} placeholder="Processing Time" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <label htmlFor="stockStatus">Stock Status</label>
                <select name="stockStatus" defaultValue={stockStatus} className="input input-bordered w-full max-w-xs">
                    <option value="">Select Stock Status</option>
                    <option value="In stock">In stock</option>
                    <option value="Made to Order">Made to Order</option>
                </select>
            </div>
        </div>
        <div className="flex justify-center">
            <button type="submit" className="btn bg-[#322760] hover:bg-[#c54899] text-white px-10 text-xl mt-8">Update</button>
        </div>
    </form>
</div>

    );
};

export default UpdateCraft;
