import "./SwiggyContainer.css";
import { useState } from "react";
import DownArrow from "../../assets/down-arrow-logo.svg";

const SwiggyContainer = ({header,data}) => {

    const [isExpanded, setIsExpanded] = useState(false); // State to track if items are expanded

    const handleShowMore = () => {
        setIsExpanded(true); // Set to true to show all items
    };

  return (
    <div className="SwiggyContainer-main">
        <div className="SwiggyContainer-header">
            <h2>{header}</h2>
        </div>
        <div className="SwiggyContainer-body">
        <div className="grid">
          {(isExpanded ? data : data.slice(0, 11)).map((item, index) => (
            <div key={index} className="box">
              {item}
            </div>
          ))}
          {!isExpanded && ( 
          <button onClick={handleShowMore} className="show-more">
            Show More<span><img className="SwiggyContainer-button-downarrow" src={DownArrow} alt="..."/></span>
          </button>
        )}
        </div>
      </div>
    </div>
  )
}

export default SwiggyContainer