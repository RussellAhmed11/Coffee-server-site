import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const CoffeCard = ({ coffee,coffees,setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee
    const handleDeleteCoffee = (_id) => {
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

                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method:"DELETE"
                })  
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaning=coffees.filter(cof=>cof._id !==_id)
                            setCoffees(remaning);
                        }
                    })
               
            }
        });
    }
    return (
        <div className=''>
            <div className="card card-side bg-base-100 shadow-lg">
                <figure>
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="flex justify-between w-full pr-4">
                    <div>
                        <h2 className="card-title">Name:{name}</h2>
                        <p>Taste:{taste}</p>
                        <p>Category{category}</p>
                        <p>Details:{details}</p>
                    </div>

                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-4">
                            <button className="btn join-item">view</button>
                            <Link to={`updateCoffe/${_id}`} className="btn join-item">Edit</Link>
                            <button onClick={() => handleDeleteCoffee(_id)} className="btn join-item">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeCard;