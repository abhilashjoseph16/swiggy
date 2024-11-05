import Container from "./components/containers/Container";
import DishCardContainer from "./components/dishes-container/DishCardContainer";
import FoodCultureContainer from "./components/food-culture-container/FoodCultureContainer";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header"
import HorizonalLine from "./components/horizonal-line/HorizonalLine";
import RestaurantSliderContainer from "./components/restaurant-container/RestaurantSliderContainer";
import RestaurantList from "./components/restaurant-list/RestaurantList";
import SwiggyContainer from "./components/swiggy-container/SwiggyContainer";
import swiggydata from "./data/swiggydata/data.json"

function App() {
  return (
    <>
    <Header/>
    <Container/>
    <DishCardContainer/>
    <HorizonalLine/>
    <RestaurantSliderContainer/>
    <HorizonalLine/>
    <RestaurantList/>
    <HorizonalLine width="85%" left="7%"/>
    <FoodCultureContainer/>
    <SwiggyContainer header="Explore localities in and around Bangalore" data={swiggydata.location}/>
    <HorizonalLine height="30px" width="0%" left="0%"/>
    <SwiggyContainer header="What's Bangalore eating! People ordering in Bangalore" data={swiggydata.restaurants}/>
    <HorizonalLine height="30px" width="0%" left="0%"/>
    <SwiggyContainer header="Restaurant Chains in Bangalore" data={swiggydata.restaurantchains}/>
    <HorizonalLine height="30px" width="0%" left="0%"/>
    <SwiggyContainer header="Popular Dishes in Bangalore" data={swiggydata.populardishes}/>
    <HorizonalLine height="30px" width="0%" left="0%"/>
    <SwiggyContainer header="More Food Options Near Me" data={swiggydata.MoreFoodOptionsNearMe}/>
    <HorizonalLine height="80px" width="0%" left="0%"/>
    <Footer/>
    </>
  );
}

export default App;
