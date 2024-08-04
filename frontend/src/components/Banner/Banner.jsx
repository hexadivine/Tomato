import "./Banner.css";

function Banner() {
    return (
        <div className="banner">
            <div className="banner-content">
                <p>
                    Order your favourite food here
                </p>
                <p>
                    Choose from a diverse menu featuring a delectable array of dishes.Our mission is
                    to satisfy your cravings and elevate your dining experience.One delicious meal
                    at a time
                </p>
                <input type="button" value="View Menu" />
            </div>
        </div>
    );
}

export default Banner;
