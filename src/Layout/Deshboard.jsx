import { NavLink, Outlet } from "react-router-dom";
import { FaCartArrowDown, FaWallet, FaRegCalendarAlt, FaHome } from "react-icons/fa";
import useCart from "../hooks/useCart";


const Deshboard = () => {
    const [cart] = useCart();
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
                    <li><NavLink to='/dashboard/myhome'><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History</NavLink></li>
                    <li><NavLink to='/dashboard/reservations'><FaRegCalendarAlt></FaRegCalendarAlt>Reservations</NavLink></li>
                    <li>
                        <NavLink to='/dashboard/mycart'><FaCartArrowDown></FaCartArrowDown>My Cart
                            <div className="badge badge-secondary">+{cart?.length || 0}</div>
                        </NavLink>

                    </li>
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