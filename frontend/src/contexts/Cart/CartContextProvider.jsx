import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { food_list } from "../../assets/assets";

function CartContextProvider(props) {
    const [cart, setCart] = useState({});

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

    const getCartInfo = () => {
        const cartInfo = [];
        Object.keys(cart).forEach((key) => {
            const food = food_list.find((foodItem) => foodItem._id == key);
            let newFoodItem = {};
            newFoodItem['id'] = food._id;
            newFoodItem['img'] = food.image;
            newFoodItem['title'] = food.name;
            newFoodItem['price'] = food.price;
            newFoodItem['quantity'] = cart[key];
            newFoodItem['total'] = newFoodItem['price'] * newFoodItem['quantity'];
            cartInfo.push(newFoodItem)
        })
        console.log(cartInfo)
        return cartInfo;
    }

    const getTotal = () => {
        const cartInfo = getCartInfo();
        const totalPrice = cartInfo.reduce((prev, newItem) => prev+newItem.total, 0)
        return totalPrice;
    }


    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, getCartInfo, getTotal }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
