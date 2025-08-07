import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import "../style/Footer.css"; // Assuming you have a CSS file for styling


export const Footer = ()=>{
    return <>
        <div className="footer-container">
            <div className="footer-first">
                <span>
                    <img src="vitra-logo-wP7ad19i_t.jpg" alt="" />
                </span>
                <span>
                    <img src="logo_louispoulsen_minimum-removebg-preview.png" alt="" />
                </span>
                <span>
                    <img src="klober-01-removebg-preview.png" alt="" />
                </span>
                <span>
                    <img src="1449501009981ROSHULTS_LOGO_SVART-removebg-preview.png" alt="" />
                </span>
                <span>
                    <img src="images-removebg-preview.png" alt="" />
                </span>
                <span>
                    <img src="Magisso-removebg-preview.png" alt="" />
                </span>
                <span>
                    <img src="Niche-Logo-RGB_horizontal-CBgreen__1_-removebg-preview.png" alt="" />
                </span>
            </div>
            <div className="footer-second">
                <div className="footer-info-first">
                    <div className="footer-logo">
                        <span><img src="ecommerce-websites-logo-design20-removebg-preview.png" alt="" /></span>
                    </div>
                    <div className="footer-logo-text">
                        <p>Condimentum adipiscing vel neque dis nam parturient orci at scelerisque neque dis nam parturient.</p>
                    </div>
                    <div className="footer-contact">
                        <div className="footer-location">
                            <span><FaLocationArrow /></span>
                            <span>Dhaka 1216 Bangladesh</span>
                        </div>
                        <div className="footer-number">
                            <span><MdOutlinePhoneIphone /></span>
                            <span>+880 178176 3367</span>
                        </div>
                        <div className="footer-email">
                            <span><MdOutlineEmail /></span>
                            <span>rashedalikhan12@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="footer-info-second">
                    <div className="footer-header">
                        <h6>RECENT POSTS</h6>
                    </div>
                    <div className="footer-content">
                        <div>
                            <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/blog-12-75x65.jpg" alt="" />
                        </div>
                        <div className="footer-content-text">
                            <p>A companion for extra sleeping</p>
                            <p>july 23,2016 1 Comment</p>
                        </div>
                    </div>
                    <div className="footer-content">
                        <div>
                            <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/blog-11-75x65.jpg" alt="" />
                        </div>
                        <div className="footer-content-text">
                            <p>Outdor seating collection inspiration</p>
                            <p>july 23,2016 1 Comment</p>
                        </div>
                    </div>
                </div>
                <div className="footer-info-third">
                    <h6>OUR STORES</h6>
                    <p>New York</p>
                    <p>London SF</p>
                    <p>Edinburgh</p>
                    <p>Los Angeles</p>
                    <p>Chicago</p>
                    <p>Las Vegas</p>
                </div>
                <div className="footer-info-fourth">
                    <h6>USEFUL LINKS</h6>
                    <p>Privacy Policy</p>
                    <p>Returns</p>
                    <p>Terms & Conditions</p>
                    <p>Contact Us</p>
                    <p>Latest News</p>
                    <p>Our Sitemap</p>
                </div>
                <div className="footer-info-fifth">
                    <h6>FOOTER MENU</h6>
                    <p>Instragram profile</p>
                    <p>New Collection</p>
                    <p>Woman Dress</p>
                    <p>Contact Us</p>
                    <p>Latest News</p>
                    <p>Purchase Theme</p>
                </div>
            </div>
            <div className="footer-third">
                <div>
                    @2025 E-SHOP. All rights reserved.
                </div>
                <div className="footer-payment">
                    <span>
                        <img src="360_F_425383660_cLLE2tW2JDSBJ62sBaiVcnYYWCqWgD88-removebg-preview.png" alt="" />
                    </span>
                </div>
            </div>
        </div>
    </>
}



