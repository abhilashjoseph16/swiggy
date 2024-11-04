import Container from "./components/containers/Container";
import DishCardContainer from "./components/dishes-container/DishCardContainer";
import FoodCultureContainer from "./components/food-culture-container/FoodCultureContainer";
import Header from "./components/header/Header"
import HorizonalLine from "./components/horizonal-line/HorizonalLine";
import RestaurantSliderContainer from "./components/restaurant-container/RestaurantSliderContainer";
import RestaurantList from "./components/restaurant-list/RestaurantList";

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
    <HorizonalLine width="0%"/>
    </>
  );
}

export default App;
