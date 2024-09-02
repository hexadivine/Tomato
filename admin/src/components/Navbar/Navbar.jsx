import "./Navbar.css";
import { assets } from "../../assets/assets.js";

function Navbar() {
    return (
        <nav className="admin-navbar">
            <img src={assets.logo} alt="logo" />
            <img src={assets.profile_image} alt="profile image" />
        </nav>
    );
}

export default Navbar;
