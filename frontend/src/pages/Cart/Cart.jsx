import "./Cart.css";
import { useCart } from "./../../contexts/Cart/CartContext";

function Cart() {
    const { getCartInfo, setCart, getTotal } = useCart();
    const cartInfo = getCartInfo();
    console.log(cartInfo);
    console.log(getTotal());
    return (
        <div>
            <table className="cart-table">
                <thead>
                    <th>Items</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quntity</th>
                    <th>Total</th>
                    <th>Remove</th>
                </thead>
                <tbody>
                    {cartInfo.map((cartItem) => (
                        <tr>
                            <td>
                                <img src={cartItem.img} alt="" />
                            </td>
                            <td>{cartItem.title}</td>
                            <td>${cartItem.price}</td>
                            <td>
                                <input
                                    type="text"
                                    value={cartItem.quantity}
                                    onChange={(e) =>
                                        setCart((prev) => {
                                            if (e.target.value >= 1 && e.target.value <= 100)
                                                prev[cartItem.id] = e.target.value;
                                            return { ...prev };
                                        })
                                    }
                                />
                            </td>
                            <td>{cartItem.total}</td>
                            <td>
                                <button
                                    onClick={() => setCart((prev) => {
                                        delete prev[cartItem.id];
                                        return { ...prev };
                                    })}
                                >
                                    x
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Cart;
