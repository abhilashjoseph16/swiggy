import "./RestaurantList.css"
import { useState,useEffect } from "react";
import FilterLogo from "../../assets/filter-logo.svg";
import DownArrow from "../../assets/down-arrow-logo.svg";
const RestaurantList = () => {

    const [restaurantlist, setRestaurantList] = useState([]);

    useEffect(() => {
      fetch("/restaurant/restaurant.json")
        .then((response) => response.json())
        .then((data) => setRestaurantList(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

  return (
    <div className="restaurantlist-main-container">
        <div className="restaurantlist-main-header">
            <div className="restaurantlist-header">
                <h1>Restaurants with online food delivery in Bangalore</h1>
            </div>
        </div>
        <div className="restaurantlist-main-filter-container">
            <div className="restaurantlist-filter-container">
                <div className="restaurantlist-container">
                    <div className="restaurantlist-filter-item">
                        <div className="restaurantlist-filter-item-content">
                            <div className="restaurantlist-filter-item-content-filtertext">
                                Filter
                            </div>
                            <div className="restaurantlist-filter-item-content-filter-logo">
                                <img src={FilterLogo} alt="filter"/>
                            </div>
                        </div>
                    </div>

                    <div className="restaurantlist-filter-item">
                        <div className="restaurantlist-filter-item-content">
                            <div className="restaurantlist-filter-item-content-sortbytext">
                                Sort By
                            </div>
                            <div className="restaurantlist-filter-item-content-sortbytext-downarrow">
                                <img src={DownArrow} alt="sortby"/>
                            </div>
                        </div>
                    </div>

                    <div className="restaurantlist-filter-item">
                        <div className="restaurantlist-filter-item-content">
                            <div className="restaurantlist-filter-item-content-text">
                                Fast Delivery
                            </div>
                        </div>
                    </div>

                    <div className="restaurantlist-filter-item">
                        <div className="restaurantlist-filter-item-content">
                            <div className="restaurantlist-filter-item-content-text">
                                New on Swiggy
                            </div>
                        </div>
                    </div>

                    <div className="restaurantlist-filter-item">
                        <div className="restaurantlist-filter-item-content">
                            <div className="restaurantlist-filter-item-content-text">
                                Rating 4.0+
                            </div>
                        </div>
                    </div>

                    <div className="restaurantlist-filter-item">
                        <div className="restaurantlist-filter-item-content">
                            <div className="restaurantlist-filter-item-content-text">
                                Pure Veg
                            </div>
                        </div>
                    </div>

                    <div className="restaurantlist-filter-item">
                        <div className="restaurantlist-filter-item-content">
                            <div className="restaurantlist-filter-item-content-text">
                                Offers
                            </div>
                        </div>
                    </div>

                    <div className="restaurantlist-filter-item">
                        <div className="restaurantlist-filter-item-content">
                            <div className="restaurantlist-filter-item-content-text">
                                Rs. 300-Rs. 600
                            </div>
                        </div>
                    </div>

                    <div className="restaurantlist-filter-item">
                        <div className="restaurantlist-filter-item-content">
                            <div className="restaurantlist-filter-item-content-text">
                                Less than Rs. 300
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantList