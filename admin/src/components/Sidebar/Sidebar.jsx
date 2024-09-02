import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

function Sidebar() {
    return (
        <div className="admin-sidebar">
            <NavLink to="/add" className={({ isActive }) => (isActive ? "active" : "")}>
                <img src={assets.add_icon} alt="" /> Add
            </NavLink>
            <NavLink to="/list" className={({ isActive }) => (isActive ? "active" : "")}>
                <img src={assets.order_icon} alt="" /> List
            </NavLink>
            <NavLink to="/orders" className={({ isActive }) => (isActive ? "active" : "")}>
                <img src={assets.order_icon} alt="" /> Order
            </NavLink>
        </div>
    );
}

export default Sidebar;
