import "./RestaurantList.css";
import { useState, useEffect } from "react";
import FilterLogo from "../../assets/filter-logo.svg";
import DownArrow from "../../assets/down-arrow-logo.svg";
const RestaurantList = () => {
  const [restaurantlist, setRestaurantList] = useState([]);
  const [visible, setVisible] = useState(10);

  const showMore = () => {
    setVisible((prevValue) => prevValue + 10);
  };

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
                  <img src={FilterLogo} alt="filter" />
                </div>
              </div>
            </div>

            <div className="restaurantlist-filter-item">
              <div className="restaurantlist-filter-item-content">
                <div className="restaurantlist-filter-item-content-sortbytext">
                  Sort By
                </div>
                <div className="restaurantlist-filter-item-content-sortbytext-downarrow">
                  <img src={DownArrow} alt="sortby" />
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

      <div className="restaurantlist-main-list">
        <div className="restaurantlist-list-container">
          <div className="restaurantlist-list-box">
            {restaurantlist.slice(0, visible).map((restaurantdata) => (
              <div className="restaurantlist-list-box-item">
                <div key={restaurantdata.restaurant_id}>
                  <div className="restaurantlist-image-box">
                    <img
                      src={restaurantdata.image_url}
                      alt={restaurantdata.restaurant_name}
                      className="restaurantlist-restaurant-image"
                    />
                    {/* <div className="restaurantlist-offer-box">
                      <p>ITEMS AT &#8377;{restaurantdata.offers}</p>
                    </div> */}
                  </div>
                  <div className="restaurantlist-restaurant-info">
                    <div className="restaurantlist-restaurant-name">
                      <h3 className="restaurantlist-restaurant-name">
                        {restaurantdata.restaurant_name}
                      </h3>
                    </div>
                    <div className="restaurantlist-rating-delivery">
                      <span className="restaurantlist-rating-star">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          role="img"
                          aria-hidden="true"
                          strokecolor="rgba(2, 6, 12, 0.92)"
                          fillcolor="rgba(2, 6, 12, 0.92)"
                        >
                          <circle
                            cx="10"
                            cy="10"
                            r="9"
                            fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                          ></circle>
                          <path
                            d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                            fill="white"
                          ></path>
                          <defs>
                            <linearGradient
                              id="StoreRating20_svg__paint0_linear_32982_71567"
                              x1="10"
                              y1="1"
                              x2="10"
                              y2="19"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#21973B"></stop>
                              <stop offset="1" stop-color="#128540"></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="restaurantlist-rating">{restaurantdata.avg_rating}</span>
                      <span>•</span>
                      <span className="restaurantlist-delivery-time">
                        {restaurantdata.delivery_time}
                      </span>
                    </div>
                    <div className="restaurantlist-restaurant-cuisine">
                      <p>{restaurantdata.cuisines.join(", ")}</p>
                    </div>
                    <div className="restaurantlist-restaurant-location">
                      <p>{restaurantdata.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="restaurantlist-main-list-button-container">
            <button className="restaurantlist-main-list-button" onClick={showMore}>
              Show More<span><img className="restaurantlist-main-list-button-downarrow" src={DownArrow} alt="..."/></span>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
