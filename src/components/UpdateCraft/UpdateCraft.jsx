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
        fetch(`http://localhost:5000/craft/${_id}`, {
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
   
    // const [formData, setFormData] = useState({
    //     imageUrl: "",
    //     itemName: "",
    //     subcategoryName: "",
    //     shortDescription: "",
    //     price: "",
    //     rating: "",
    //     customization: "",
    //     processingTime: "",
    //     stockStatus: "",
    //     userEmail: user?.email,
    //     userName: user?.displayName,
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleUpdateCraft = (e) => {
    //     e.preventDefault();
    //     console.log(formData); 
    //     fetch('http://localhost:5000/craft', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(formData)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    //     Swal.fire({
    //         title: `${formData.itemName} is Added`,
    //         text: "Craft Added Successfully",
    //         icon: "success"
    //       });
    // };

    return (
        <div className="font-roboto">
        <Helmet>
            <title>Update Craft</title>
        </Helmet>
        <h1>Update Craft {itemName}</h1>
        <form onSubmit={handleUpdateCraft} className="p-20 items-center gap-20">
            {/* Image Url */}
            <input type="text" name="imageUrl" defaultValue={imageUrl}  placeholder="Image URL"  className="input input-bordered w-full max-w-xs" />
            {/* Item Name */}
            <input type="text" name="itemName"  defaultValue={itemName} placeholder="Item Name" className="input input-bordered w-full max-w-xs" />
            <br />
            {/* Sub Category Name */}
            <select name="subcategoryName" defaultValue={subcategoryName} className="input input-bordered w-full max-w-xs">
                <option value="">Select Sub Category</option>
                <option value="Landscape Painting">Landscape Painting</option>
                <option value="Portrait Drawing">Portrait Drawing</option>
                <option value="Water Color Painting">Water Color Painting</option>
                <option value="Oil Painting">Oil Painting</option>
                <option value="Charcoal Sketching">Charcoal Sketching</option>
                <option value="Cartoon Drawing">Cartoon Drawing</option>
            </select>
            {/* short Description */}
            <input type="text" name="shortDescription" defaultValue={shortDescription} placeholder="Short Description" className="input input-bordered w-full max-w-xs" />
            {/* price */}
            <input type="text" name="price" placeholder="Price" defaultValue={price} className="input input-bordered w-full max-w-xs" />
            <br />
            {/* rating */}
            <input type="text" name="rating" placeholder="Rating" defaultValue={rating} className="input input-bordered w-full max-w-xs" />
           {/* customization */}
            <select name="customization" defaultValue={customization} className="input input-bordered w-full max-w-xs">
                <option value="">Select Customization</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            <br />
             {/* Processing Time */}
            <input type="text" name="processingTime"  defaultValue={processingTime} placeholder="Processing Time" className="input input-bordered w-full max-w-xs" />
            {/* Stock Status */}
            <select name="stockStatus" defaultValue={stockStatus} className="input input-bordered w-full max-w-xs">
                <option value="">Select Stock Status</option>
                <option value="In stock">In stock</option>
                <option value="Made to Order">Made to Order</option>
            </select>
            {/* Update Button */}
            <br />
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    </div>
    );
};

export default UpdateCraft;
