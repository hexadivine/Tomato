import "./DeliveryInfo.css";

function DeliveryInfo() {
    return (
        <div className="delivery-info">
            <h1>Delivery Information</h1>
            <form action="#" className="delivery-info-form">
                <div className="split-form">
                    <input type="text" placeholder="First Name" className="split-input" />
                    <input type="text" placeholder="Last Name" className="split-input" />
                </div>
                <input type="email" placeholder="Email Address" className="full-input" />
                <input type="text" placeholder="Street" className="full-input" />
                <div className="split-form">
                    <input type="text" placeholder="City" className="split-input" />
                    <input type="text" placeholder="State" className="split-input" />
                </div>
                <div className="split-form">
                    <input type="text" placeholder="Zip Code" className="split-input" />
                    <input type="text" placeholder="Country" className="split-input" />
                </div>
                <input type="text" placeholder="Phone Number" className="full-input" />
            </form>
        </div>
    );
}

export default DeliveryInfo;
