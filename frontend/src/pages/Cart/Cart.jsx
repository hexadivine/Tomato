import "./Cart.css";
import CartOrders from "../../components/CartOrders/CartOrders";
import CartTotal from "../../components/CartTotal/CartTotal";
import PromoCode from "../../components/PromoCode/PromoCode";
import { useCart } from "../../contexts/Cart/CartContext";
import { useLoginCredentials } from "../../contexts/LoginCredentials/LoginCredentials";

function Cart() {
    const { token } = useLoginCredentials();
    if (!token) return;

    const { cart } = useCart();

    return (
        <>
            {Object.keys(cart).length === 0 ? (
                <h1 className="error-msg">
                    {" "}
                    You need to add food items to the cart before visiting this page{" "}
                </h1>
            ) : (
                <>
                    <CartOrders />
                    <div className="bottom-div">
                        <CartTotal />
                        <PromoCode />
                    </div>
                </>
            )}
        </>
    );
}

export default Cart;
