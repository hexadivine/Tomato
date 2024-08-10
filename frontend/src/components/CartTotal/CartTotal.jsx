import { useCart } from "../../contexts/Cart/CartContext";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import "./CartTotal.css";

function CartTotal() {
    const { getTotal } = useCart();

    return (
        <div className="cart-totals">
            <h1>Cart Totals</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Subtotal</td>
                        <td>${getTotal()}</td>
                    </tr>
                    <tr>
                        <td>Delivery Fee</td>
                        <td>$2</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>${getTotal() + 2}</td>
                    </tr>
                </tbody>
            </table>
            <PrimaryBtn message="Proceed to Checkout" className="checkout-btn" />
        </div>
    );
}

export default CartTotal;
