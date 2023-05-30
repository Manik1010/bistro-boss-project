import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart, refetch] = useCart()
    // console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0)

    const handelDelete = item =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

              fetch(`http://localhost:5000/carts/${item._id}`, {
                method: 'DELETE'
              })
              .then( res => res.json())
              .then(data =>{
                console.log(data)
                if(data.deletedCount > 0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })
            }
          })
    }
    return (
        <div className='w-full mt-8'>
            <Helmet>
                <title>Restaurant | MyCart</title>
            </Helmet>
            <div className='flex justify-evenly h-[60px] items-center font-semibold'>
                <h3 className='text-3xl uppercase'> Total Items: {cart.length}</h3>
                <h3 className='text-3xl uppercase'> Total Price: ${total}</h3>
                <button className='btn btn-warning btn-sm'>Pay</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{item.name}</span>
                                </td>
                                <td className="text-end">${item.price}</td>
                                <td>
                                    <button onClick={ ()=> handelDelete(item)} className="btn btn-ghost btn-lg bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;