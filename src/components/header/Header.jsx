import "../header/Header.css"
import swiggyLogo from "../../assets/swiggy-logo.png"

const Header = () => {
  return (
    <div className="header">
        <div className="swiggy-logo-box">
           <img className="swiggy-logo" src={swiggyLogo} alt="swiggy"/> 
        </div>
        
        <div className="vertical-line">
        </div>

        <div className="location-box">
            <svg className="location-logo" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF5200" d="M11.1828 1.84246C13.7623 0.516285 15.0521 -0.146802 15.6759 0.448004C16.2997 1.04281 15.6986 2.36264 14.4965 5.00231L11.0318 12.6101C9.78188 15.3547 9.15692 16.727 8.28744 16.6338C7.41796 16.5407 7.09629 15.0596 6.45294 12.0973C6.29606 11.375 6.21761 11.0138 5.97533 10.7649C5.73305 10.5161 5.37563 10.4285 4.6608 10.2532L4.29783 10.1642C1.65419 9.51589 0.332363 9.19175 0.234059 8.35677C0.135754 7.52179 1.34615 6.89952 3.76695 5.65497L11.1828 1.84246Z"/>
            </svg>
            <div className="location-bar">
                Setup your precise location<i className="arrow-right"></i>
            </div>
        </div>

        <div className="search-box">
              <input type="text" className="search-bar" value="Search for restaurant and food"></input>
        </div>

    </div>
  )
}

export default Header