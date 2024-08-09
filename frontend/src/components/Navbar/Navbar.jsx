import { useState } from "react";
import { assets } from "./../../assets/assets.js";
import "./Navbar.css";

function Navbar() {
    const [activeMenu, setActiveMenu] = useState('home');

    return (
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
                <button>sign in</button>
            </div>
        </nav>
    );
}

export default Navbar;
