import "./Container.css";
import swiggyContainerPhoto from "../../assets/swiggy-container-photo.png"

const Container = () => {
  return (
    <div className="main-container">
      <div className="first-box">
        <div className="order-food-head">
            <h1 className="order-food">
              Order Food Online in Bangalore
            </h1>
          </div>
          <div className="order-food-underline-head">
            <svg className="order-food-underline"  viewBox="0 0 78 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5.25939C27 -0.240624 53.5 -0.2406 77 4.25939" stroke="#FF5200" stroke-width="1.5"></path>
            </svg>
          </div>
      </div>

      <div className="second-box">
        <div className="siwggy-container-image-head">
          <img className="swiggy-container-image" src={swiggyContainerPhoto} alt="Swiggy"/>
        </div>
      </div>
    </div>
  )
}

export default Container