import "./ExploreMenu.css";
import { menu_list } from "./../../assets/assets.js";
import MenuCategory from "../MenuCategory/MenuCategory.jsx";

function ExploreMenu() {
    console.log(menu_list);
    return (
        <div className="explore-menu">
            <h1>Explore our menu</h1>
            <p>
                Choose from a diverse menu featuring a delectable array of dishes. Our mission is to
                satisfy your cravings and elevate your dining experience. One delicious meal at a time
            </p>
            <div className="menu-categories">
                {menu_list.map((menu, index) => (
                    <MenuCategory
                        key={index}
                        menu_image={menu.menu_image}
                        menu_name={menu.menu_name}
                    />
                ))}
            </div>
        </div>
    );
}

export default ExploreMenu;
