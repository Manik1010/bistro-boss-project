import { NavLink, Outlet } from "react-router-dom";
import { FaWallet,  FaHome, FaUsers, FaBook, FaUtensils, FaCartArrowDown, FaRegCalendarAlt } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Deshboard = () => {
    const [cart] = useCart();
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A045]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A045] text-base-content">
                    {/* // TODO: ........... */}
                    {/* <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                    <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add Items</NavLink></li>
                    <li><NavLink to="/dashboard/manageItem"><FaWallet></FaWallet> Manage Items</NavLink></li>
                    <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li> */}
                    
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add Items</NavLink></li>
                                <li><NavLink to="/dashboard/manageItem"><FaWallet></FaWallet> Manage Items</NavLink></li>
                                <li><NavLink to="/dashboard/manageBooking"><FaBook></FaBook> Manage Bookings</NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                                <li>
                                    <NavLink to='/dashboard/mycart'><FaCartArrowDown></FaCartArrowDown>My Cart
                                        <div className="badge badge-secondary">+{cart?.length || 0}</div>
                                    </NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li><NavLink to='/dashboard/myhome'><FaHome></FaHome>User Home</NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History</NavLink></li>
                                <li><NavLink to='/dashboard/reservations'><FaRegCalendarAlt></FaRegCalendarAlt>Reservations</NavLink></li>
                                <li>
                                    <NavLink to='/dashboard/mycart'><FaCartArrowDown></FaCartArrowDown>My Cart
                                        <div className="badge badge-secondary">+{cart?.length || 0}</div>
                                    </NavLink>
                                </li>
                            </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/menu'>Our Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Deshboard;