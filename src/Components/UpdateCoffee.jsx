import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffees = useLoaderData()
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffees


    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }

        console.log(updatedCoffee)

        //   send data to the server
        fetch(`https://coffee-store-server-dgfm.onrender.com/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Coffee Updated successfully",
                        icon: 'success',
                        confirmButtonText: 'ok'
                    });
                }
            })

    }








    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-extrabold">Update coffee {name}</h1>
            <form onSubmit={handleUpdateCoffee}>

                {/* form name and quantity row */}
                <div className="md:flex  mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" id="" className="input input-bordered w-full" defaultValue={name} placeholder="Coffee-Name" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" id="" defaultValue={quantity} className="input input-bordered w-full" placeholder="Available Quantity" />
                        </label>
                    </div>
                </div>
                {/* form supplier test row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" id="" defaultValue={supplier} className="input input-bordered w-full" placeholder="Supplier Name" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" id="" defaultValue={taste} className="input input-bordered w-full" placeholder="Taste" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={category} name="category" id="" className="input input-bordered w-full" placeholder="Category Name" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={details} type="text" name="details" id="" className="input input-bordered w-full" placeholder="Details" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" id="" defaultValue={photo} className="input input-bordered w-full" placeholder="Photo URL" />
                        </label>
                    </div>

                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block bg-gray-400" />

            </form>
        </div>
    );
};

export default UpdateCoffee;