import './Home.css'
import Banner from "../../components/Banner/Banner";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Menu from "../../components/Menu/Menu";
import PrimaryBtn from "../../components/PrimaryBtn/PrimaryBtn";
import AppPromotion from "./../../components/AppPromotion/AppPromotion"
import { useCart } from '../../contexts/Cart/CartContext';

function Home() {

    const {cart} = useCart()
    console.log(cart);

    return (
        <div>
            <Banner />
            <ExploreMenu />
            <hr />
            <Menu />
            {Object.keys(cart).length === 0 ? '' : <PrimaryBtn message={"Add to cart"} className='fix-btn-bottom-right' /> }
            
            <AppPromotion />
        </div>
    );
}

export default Home;
