import "./Footer.css"
import SwiggyLogo from "../../assets/swiggy-logo.png"
import DownArrowBtn from "../../assets/down-arrow-logo.svg"
import linkedinLogo from "../../assets/social-media-icons/linkedin-icon.png"
import instagramLogo from "../../assets/social-media-icons/instagram-icon.png"
import facebookLogo from "../../assets/social-media-icons/facebook-icon.png"
import pinterestLogo from "../../assets/social-media-icons/pinterest-icon.png"
import twitterLogo from "../../assets/social-media-icons/twitter-icon.png"
import HorizonalLine from "../horizonal-line/HorizonalLine";
import playStoreImg from "../../assets/playstore.png"
import appStoreImg from "../../assets/appstore.png"

const Footer = () => {
  return (
    <div className="footer-main">
        <div className="footer-detail-box">
            <div className="footer-detail-swiggylogo">
                <div className="footer-detail-swiggylogo-content">
                    <img src={SwiggyLogo} alt="Swiggy"/>
                    <h2>© 2024 Swiggy Limited</h2>
                </div>
            </div>
            <div className="footer-detail-company">
                <div className="footer-detail-company-content">
                    <h2>Company</h2>
                    <div>
                        <h4>About Us</h4>
                        <h4>Swiggy Corporate</h4>
                        <h4>Careers</h4>
                        <h4>Team</h4>
                        <h4>Swiggy One</h4>
                        <h4>Swiggy Instamart</h4>
                        <h4>Swiggy Dineout</h4>
                        <h4>Swiggy Genie</h4>
                    </div>
                </div>
            </div>
            <div className="footer-detail-contactus">
                <div className="footer-detail-contactus-content">
                    <h2>Contact us</h2>
                    <div>
                        <h4>Help & Support</h4>
                        <h4>Partner with us</h4>
                        <h4>Ride with us</h4>
                    </div>
                </div>
            </div>
            <div className="footer-detail-legal">
                <div className="footer-detail-legal-content">
                    <h2>Legal</h2>
                    <div>
                        <h4>Terms & <br/>Conditions</h4>
                        <h4>Cookie Policy</h4>
                        <h4>Privacy Policy</h4>
                        <h4>Investor Relations</h4>
                    </div>
                </div>
            </div>
            <div className="footer-detail-availablein">
                <div className="footer-detail-availablein-content">
                    <h2>Available in</h2>
                    <div>
                        <h4>Bangalore</h4>
                        <h4>Gurgaon</h4>
                        <h4>Hyderabad</h4>
                        <h4>Delhi</h4>
                        <h4>Mumbai</h4>
                        <h4>Pune</h4>
                        <button>679 cities<span><img className="footer-detail-availablein-content-btn-arrow" src={DownArrowBtn} alt=""/></span></button>
                    </div>
                </div>
            </div>
            <div className="footer-detail-lifeatswiggy">
                <div className="footer-detail-lifeatswiggy-content">
                    <h2>Life at Swiggy</h2>
                    <div>
                        <h4>Explore with Swiggy</h4>
                        <h4>Swiggy News</h4>
                        <h4>Snackables</h4>
                    </div>
                </div>
            </div>
            <div className="footer-detail-sociallinks">
                <div className="footer-detail-sociallinks-content">
                    <h2>Social Links</h2>
                    <div>
                        <img src={linkedinLogo} alt=""/>
                        <img src={instagramLogo} alt=""/>
                        <img src={facebookLogo} alt=""/>
                        <img src={pinterestLogo} alt=""/>
                        <img src={twitterLogo} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <HorizonalLine height="20px" width="69%" left="15%" backgroundColor="#000000"/>
        <div className="footer-swiggyappdownload-main">
            <div className="footer-swiggyappdownload-box">
                <div className="footer-swiggyappdownload-text">
                    <h1>For better experience,download the Swiggy app now</h1>
                </div>
                <div className="footer-swiggyappdownload-img-box">
                    <img src={playStoreImg} alt=""/>
                    <img src={appStoreImg} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer