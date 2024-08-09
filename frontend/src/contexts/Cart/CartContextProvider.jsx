import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { food_list, menu_list } from "../../assets/assets";

function CartContextProvider(props) {
    const [cart, setCart] = useState({});

    useEffect(() => {
        Object.keys(cart).forEach((cartKey) => cart[cartKey] === 0 ? delete cart[cartKey] : '')
    }, [cart])

    const addToCart = (id) => {
        console.log(id);
        if (!cart[id]) setCart((prev) => ({ ...prev, [id]: 1 }));
        else setCart((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    };

    const removeFromCart = (id) => {
        if (cart[id] === 1){
            delete cart[id];
            setCart({...cart});
        }
        else
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
