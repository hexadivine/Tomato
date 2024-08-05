import MenuCard from "../MenuCard/MenuCard";
import './Menu.css'

function Menu() {
    return (
        <div className="menu">
            <h1>Top dishes near you</h1>
            <div className="show-menu">
                <MenuCard />
            </div>
        </div>
    );
}

export default Menu;
