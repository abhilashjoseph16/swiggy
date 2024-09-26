import "./RestaurantSliderContainer.css"

const RestaurantSliderContainer = () => {
  return (
    <>
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

      </div>
    </>
  )
}

export default RestaurantSliderContainer