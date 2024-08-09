import { assets } from "../../assets/assets";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-left footer-content">
                <h1 className="logo">Tomato</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa provident eum
                    autem fugit reiciendis deserunt praesentium. Deleniti expedita, enim impedit
                    molestias, optio hic odio minus cupiditate officia saepe labore eius aut dicta
                    nisi dignissimos iste quia beatae placeat? Tenetur accusantium corporis dolor
                    iusto consectetur delectus. Beatae, consequuntur cumque. Unde veritatis, odit
                    explicabo magnam impedit quis architecto, repellendus nam placeat molestiae
                    corrupti maiores. Nihil, fugit. Itaque quidem fuga culpa magni enim labore,
                    iusto doloribus rem necessitatibus, quas sequi quasi. Sit explicabo officiis
                    minima tempore nam? Vel harum, nihil non quos unde saepe, quis enim, ipsam ex
                    eum ratione sequi magnam totam.
                </p>
                <div className="icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-center footer-content">
                <h1>Company</h1>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-right footer-content">
                <h1>Get in touch</h1>
                <ul>
                    <li>+61-323-434-1343</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
