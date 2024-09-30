import Container from "./components/containers/Container";
import DishCardContainer from "./components/dishes-container/DishCardContainer";
import Header from "./components/header/Header"
import HorizonalLine from "./components/horizonal-line/HorizonalLine";
import RestaurantSliderContainer from "./components/restaurant-container/RestaurantSliderContainer";

function App() {
  return (
    <>
    <Header/>
    <Container/>
    <DishCardContainer/>
    <HorizonalLine/>
    <RestaurantSliderContainer/>
    <HorizonalLine/>
    </>
  );
}

export default App;
