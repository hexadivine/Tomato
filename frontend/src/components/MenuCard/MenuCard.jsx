import { useState } from "react";
import { assets, food_list } from "../../assets/assets";
import "./MenuCard.css";

function MenuCard() {
    const [itemCount, setItemCount] = useState(0);

    return food_list.map((food, index) => (
        <div key={index} className="menu-card">
            <div className="menu-img">
                <img src={food.image} alt="" />
                {itemCount === 0 ? (
                    <img
                        className="add-to-cart"
                        src={assets.add_icon_white}
                        onClick={() => setItemCount((prev) => prev + 1)}
                    />
                ) : (
                    <div className="add-to-cart add-remove">
                        <img
                            src={assets.remove_icon_red}
                            onClick={() => setItemCount((prev) => prev - 1)}
                        />
                        {itemCount}
                        <img
                            src={assets.add_icon_green}
                            onClick={() => setItemCount((prev) => prev + 1)}
                        />
                    </div>
                )}
            </div>
            <div className="menu-card-info">
                <div className="menu-card-info-heading">
                    <h3>{food.name}</h3>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="menu-description">{food.description}</p>
                <p className="menu-price">${food.price}</p>
            </div>
        </div>
    ));
}

export default MenuCard;
