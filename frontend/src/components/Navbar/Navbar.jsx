import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "./../../assets/assets.js";
import "./Navbar.css";
import LoginSignup from "../LoginSignup/LoginSignup.jsx";
import { useLoginCredentials } from "../../contexts/LoginCredentials/LoginCredentials.jsx";

function Navbar() {
    const [activeMenu, setActiveMenu] = useState("home");
    const [showLoginSignup, setShowLoginSignup] = useState(false);
    const { token, setToken } = useLoginCredentials();
    const navigate = useNavigate();

    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <>
            <nav>
                <div className="logo nav-left">Tomato</div>
                <div className="nav-center">
                    <ul>
                        <li
                            className={activeMenu == "home" ? "active" : ""}
                            onClick={() => setActiveMenu("home")}
                        >
                            home
                        </li>
                        <li
                            className={activeMenu == "menu" ? "active" : ""}
                            onClick={() => setActiveMenu("menu")}
                        >
                            menu
                        </li>
                        <li
                            className={activeMenu == "mobile" ? "active" : ""}
                            onClick={() => setActiveMenu("mobile")}
                        >
                            mobile app
                        </li>
                        <li
                            className={activeMenu == "contact" ? "active" : ""}
                            onClick={() => setActiveMenu("contact")}
                        >
                            contact us
                        </li>
                    </ul>
                </div>
                <div className="nav-right">
                    <img src={assets.search_icon} alt="search-icon" />
                    <img src={assets.basket_icon} alt="basket-icon" />
                    {!token ? (
                        <button onClick={() => setShowLoginSignup(true)}>sign in</button>
                    ) : (
                        <div className="profile">
                            <img src={assets.profile_icon} alt="Profile" className="profile-img" />
                            <ul className="profile-more">
                                <li>
                                    <img src={assets.bag_icon} alt="Orders" /> Orders
                                </li>
                                <li onClick={() => logout()}>
                                    <img src={assets.logout_icon} alt="Logout" /> Logout
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
            {showLoginSignup ? <LoginSignup setShowLoginSignup={setShowLoginSignup} /> : null}
        </>
    );
}

export default Navbar;
