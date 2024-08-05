import "./MenuCategory.css";
import { menu_list } from "./../../assets/assets.js";
import { useCategory } from "../../contexts/Category/CategoryContext.jsx";

function MenuCategory() {
    const {activeCategory, setActiveCategory} = useCategory();
    console.log("category - ", activeCategory);
    return (
        <div className="menu-categories">
            {menu_list.map((menu, index) => (
                <div
                    key={index}
                    className="menu-category"
                    onClick={() =>
                        setActiveCategory((prev) =>
                            prev === "all" || prev != menu.menu_name ? menu.menu_name : "all"
                        )
                    }
                >
                    <img
                        src={menu.menu_image}
                        alt={menu.menu_name}
                        className={
                            activeCategory === menu.menu_name
                                ? "active-menu-category"
                                : "menu-category-img"
                        }
                    />
                    <p>{menu.menu_name}</p>
                </div>
            ))}
        </div>
    );
}

export default MenuCategory;
