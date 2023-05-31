import { useEffect, useState } from "react";
import Table from "./Table";
import Swal from "sweetalert2";

const ManageItem = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/menu")
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                setMenus(result);
            })
    }, [])
    // console.log(menus);
    const handelDeleteMenu = _id => {
        // console.log('delete person ID: ', _id);

        fetch(`http://localhost:5000/deleteMenu/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {

                    Swal.fire({
                        title: 'Successfully Deleted 🔥',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                    const remaining = menus.filter(menu => menu._id !== _id);
                    setMenus(remaining);
                }
            })
    }

    return (
        <div className="overflow-x-auto w-full">
            <h3 className='text-3xl font-extrabold text-center'>Total Items : {menus.length}</h3>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Item Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    menus?.map(menu => (
                        <Table
                            key={menu._id}
                            menu={menu}
                            handelDeleteMenu={handelDeleteMenu}
                        ></Table>
                    ))
                }
            </table>
        </div>
    );
};
export default ManageItem;