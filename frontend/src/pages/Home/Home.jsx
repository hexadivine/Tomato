import "./Home.css";
import Banner from "../../components/Banner/Banner";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Menu from "../../components/Menu/Menu";
import PrimaryBtn from "../../components/PrimaryBtn/PrimaryBtn";
import AppPromotion from "./../../components/AppPromotion/AppPromotion";
import { useCart } from "../../contexts/Cart/CartContext";
import { Link } from "react-router-dom";

function Home() {
    const { cart } = useCart();
    console.log(cart);

    return (
        <div>
            <Banner />
            <ExploreMenu />
            <hr />
            <Menu />
            <div className="fix-btn-bottom-right">
                {Object.keys(cart).length === 0 ? (
                    ""
                ) : (
                    <PrimaryBtn
                        message={<Link to="/cart"> Go to cart </Link>}
                    />
                )}
            </div>

            <AppPromotion />
        </div>
    );
}

export default Home;
