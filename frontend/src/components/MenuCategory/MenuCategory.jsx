import "./MenuCategory.css";
import {useState} from 'react'

function MenuCategory({ menu_image, menu_name }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="menu-category" onClick={() => setIsActive((prev) => !prev)}>
            <img
                src={menu_image}
                alt={menu_name}
                className={isActive ? "active-menu-category" : "menu-category-img"}
            />
            <p>{menu_name}</p>
        </div>
    );
}

export default MenuCategory;
