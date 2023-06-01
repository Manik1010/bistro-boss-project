import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const FoodCard = ({item}) => {
    const navigate = useNavigate();
    const location = useLocation()

    const {name, image, price, recipe, _id} = item;
    // console.log(image);
    const {user} = useContext(AuthContext)

    const [, refetch] = useCart()
    const handelAddToCart = item => {
        // console.log(item);
        if(user && user.email){
            const orderItem = {orderFoodId: _id, name, image, price, email: user.email}
            // fetch('http://localhost:5000/carts', {
                fetch('https://bistro-boss-server-sandy.vercel.app/carts', {
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)// pas backend orderItem
            })
            .then(res => res.json())
            .then( data => {
                console.log(data)
                if(data.insertedId){
                    refetch();
                    Swal.fire(
                        'Good job!',
                        'Food added on the caart!',
                        'success'
                      )
                }
            })
        }
        else{
            Swal.fire({
                title: 'Requred login for oder food?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}} )
                }
              })
        }

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handelAddToCart(item)} className="btn btn-outline bg-slate-200 border-0 border-b-4 mt-2">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;