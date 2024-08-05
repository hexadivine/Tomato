import "./ExploreMenu.css";
import MenuCategory from "../MenuCategory/MenuCategory.jsx";

function ExploreMenu() {
    return (
        <div className="explore-menu">
            <h1>Explore our menu</h1>
            <p>
                Choose from a diverse menu featuring a delectable array of dishes. Our mission is to
                satisfy your cravings and elevate your dining experience. One delicious meal at a
                time
            </p>
            <MenuCategory />
        </div>
    );
}

export default ExploreMenu;
