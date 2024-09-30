import "./RestaurantSliderContainer.css"
import { useState, useEffect } from "react"

const RestaurantSliderContainer = () => {
  const [restaurants,setRestaurants] = useState([]);

  useEffect(() => {
    fetch('/restaurant/restaurant.json')
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div className="RestaurantSliderContainer-main-container">
      <div className="restaurantslidercontainer-head">
        <div className="restaurantslidercontainer-heading">
            <h1>Top restaurant chains in Bangalore</h1>
        </div>
        <div className="restaurantslidercontainer-arrow-container">
            <div>
            <button
                className="restaurantslidercontainer-arrow-button">&lt;</button>
            </div>
            <div>
            <button
                className="restaurantslidercontainer-arrow-button">&gt;</button>
            </div>
        </div>
      </div>

      <div className="restaurantslidercontainer-body">
          {restaurants.map((restaurant) => (
            <div key={restaurant.restaurant_id} className="restaurant-card">
              <div className="image-box">
                <img src={restaurant.image_url} alt={restaurant.restaurant_name} className="restaurant-image" />
              </div>
              <div className="restaurant-info">
                <h3 className="restaurant-name">{restaurant.restaurant_name}</h3>
                <div className="rating-delivery">
                  <span className="rating">⭐ {restaurant.avg_rating}</span>
                  <span className="delivery-time">{restaurant.delivery_time}</span>
                </div>
                <p>{restaurant.cuisines}</p>
                <p>{restaurant.location}</p>
              </div>
            </div>
          ))}
      </div>
      </div>
    </>
  )
}

export default RestaurantSliderContainer