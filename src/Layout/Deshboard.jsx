import { Link, Outlet } from "react-router-dom";
import { FaCartArrowDown, FaWallet, FaRegCalendarAlt, FaHome } from "react-icons/fa";


const Deshboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    <li><Link><FaHome></FaHome>User Home</Link></li>
                    <li><Link><FaWallet></FaWallet>Payment History</Link></li>
                    <li><Link><FaRegCalendarAlt></FaRegCalendarAlt>Reservations</Link></li>
                    <li><Link><FaCartArrowDown></FaCartArrowDown>Payment History</Link></li>
                    <div className="divider"></div>
                    <li><Link to="/"><FaHome></FaHome>Home</Link></li>
                    <li><Link to='/menu'>Our Menu</Link></li>
                    <li><Link to='/order/salad'>Order</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Deshboard;