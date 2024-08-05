import "./MenuCategory.css";
import { useState } from "react";
import { menu_list } from "./../../assets/assets.js";

function MenuCategory() {
    const [activeCategory, setActiveCategory] = useState('all');
console.log(activeCategory)
    return (
        <div className="menu-categories">
            {menu_list.map((menu, index) => (
                <div
                    key={index}
                    className="menu-category"
                    onClick={() => setActiveCategory((prev) => prev === 'all' || prev != menu.menu_name  ? menu.menu_name : 'all')}
                >
                    <img
                        src={menu.menu_image}
                        alt={menu.menu_name}
                        className={activeCategory === menu.menu_name ? "active-menu-category" : "menu-category-img"}
                    />
                    <p>{menu.menu_name}</p>
                </div>
            ))}
        </div>
    );
}

export default MenuCategory;
