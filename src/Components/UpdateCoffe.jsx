import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateCoffe = () => {
   const coffee=useLoaderData();
//    console.log(coffee   )
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee
        const handleUpdateCoffeSubmit = (e) => {
            e.preventDefault();
            const form = e.target;
            const name = form.coffeName.value;
            const quantity = form.quantity.value;
            const supplier = form.supplier.value;
            const taste = form.taste.value;
            const category = form.category.value;
            const details = form.details.value;
            const photo = form.photoUrl.value;
            const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
            fetch(`http://localhost:5000/coffee/${_id}`, {
                method: "PUT",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(updatedCoffee)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount>0) {
                        Swal.fire({
                            title: "Success!",
                            text:"Coffee updated successfully",
                            icon: "success",
                            draggable: true
                        });
                    }
                })
        }
    return (
       
        <div className='bg-[#F4F3F0] p-24'>
            <h1 className='text-3xl font-extrabold'>Update Coffee:{name}</h1>
            <form onSubmit={handleUpdateCoffeSubmit}>
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className='label'>
                            <span className='label-text'>Coffe Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="coffeName" defaultValue={name} placeholder='Enter coffee name' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-6">
                        <label className='label'>
                            <span className='label-text'>Quantity</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="quantity" defaultValue={quantity} placeholder='Enter coffee quantity' className='input input-bordered w-full' id="" />
                        </label>
                    </div>

                </div>
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className='label'>
                            <span className='label-text'>Supplier</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="supplier" defaultValue={supplier} placeholder='Enter coffee supplier' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-6">
                        <label className='label'>
                            <span className='label-text'>Taste</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="taste" defaultValue={taste} placeholder='Enter coffe taste' className='input input-bordered w-full' id="" />
                        </label>
                    </div>

                </div>
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className='label'>
                            <span className='label-text'>Category</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="category" defaultValue={category} placeholder='Enter coffee category' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-6">
                        <label className='label'>
                            <span className='label-text'>Details</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="details" defaultValue={details} placeholder='Enter coffe details' className='input input-bordered w-full' id="" />
                        </label>
                    </div>

                </div>
                <div className='mb-8'>
                    <div className="form-control w-full">
                        <label className='label'>
                            <span className='label-text'>Photo</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="photoUrl" defaultValue={photo} placeholder='Enter photo URL' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Coffee Update" className='btn btn-neutral w-full' />
            </form >
        </div >
    );
};

export default UpdateCoffe;