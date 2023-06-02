import { useEffect, useState } from "react";
import Table from "./Table";
import Swal from "sweetalert2";
import SectionTitle from "../../../componements/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItem = () => {
    const [menus, setMenus, refetch ] = useState([]);

    useEffect(() => {
        fetch("https://bistro-boss-server-sandy.vercel.app/menu")
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                setMenus(result);
            })
    }, [])
    // console.log(menus);
    // const handelDeleteMenu = _id => {
    //     // console.log('delete person ID: ', _id);

    //     fetch(`https://bistro-boss-server-sandy.vercel.app/deleteMenu/${_id}`, {
    //         method: "DELETE"
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.deletedCount > 0) {

    //                 Swal.fire({
    //                     title: 'Successfully Deleted 🔥',
    //                     showClass: {
    //                         popup: 'animate__animated animate__fadeInDown'
    //                     },
    //                     hideClass: {
    //                         popup: 'animate__animated animate__fadeOutUp'
    //                     }
    //                 })
    //                 const remaining = menus.filter(menu => menu._id !== _id);
    //                 setMenus(remaining);
    //             }
    //         })
    // }
    const handelDeleteMenu = item => {
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

                useAxiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
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
        <div className="overflow-x-auto w-full">
            <SectionTitle
                heading='Manage All Items'
                sunHeading='Hurry Up'
            ></SectionTitle>
            <h3 className='text-3xl font-extrabold text-center'>Total Items : {menus.length}</h3>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    menus?.map((menu, index) => (
                        <Table
                            key={menu._id}
                            index={index}
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