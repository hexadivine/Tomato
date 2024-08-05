import { useState } from "react";
import { CartContext } from "./CartContext";
import { food_list, menu_list } from "../../assets/assets";

function CartContextProvider(props) {
    const [cart, setCart] = useState({});

    const addToCart = (id) => {
        console.log(cart);
        console.log(id);
        if (!cart[id]) setCart((prev) => ({ ...prev, [id]: 1 }));
        else setCart((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    };

    const removeFromCart = (id) => {
        setCart((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    };

    const getTotal = () => {
        let totalPrice = 0;
        Object.keys(cart).forEach((id) => {
            const food = food_list.find((food_item) => food_item._id == id);
            const food_price = cart[id] * food.price;
            totalPrice += food_price;
        });
        return totalPrice;
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
