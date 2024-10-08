import "./MenuCard.css";
import { assets } from "../../assets/assets";
import { useCategory } from "../../contexts/Category/CategoryContext";
import { useCart } from "../../contexts/Cart/CartContext";
import { useFoodList } from "../../contexts/FoodList/FoodList";

function MenuCard() {
    const { cart, addToCart, removeFromCart } = useCart();
    const { activeCategory } = useCategory();
    const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_ENDPOINT;
    const { foodList } = useFoodList();

    return foodList.map((food, index) =>
        activeCategory === food.category || activeCategory === "all" ? (
            <div key={index} className="menu-card">
                <div className="menu-img">
                    <img src={BACKEND_ENDPOINT + "/images/" + food.image} alt="" />
                    {!cart[food._id] ? (
                        <img
                            className="add-to-cart"
                            src={assets.add_icon_white}
                            onClick={() => addToCart(food._id)}
                        />
                    ) : (
                        <div className="add-to-cart add-remove">
                            <img
                                src={assets.remove_icon_red}
                                onClick={() => removeFromCart(food._id)}
                            />
                            {cart[food._id]}
                            <img src={assets.add_icon_green} onClick={() => addToCart(food._id)} />
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
        ) : (
            ""
        )
    );
}

export default MenuCard;
