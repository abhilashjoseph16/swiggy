import { useState } from "react";
import "../dishes-container/DishCardContainer.css"

const DishCardContainer = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const dishes = [
        { name: "Burger", image: require('../../assets/dishes/burger.jpeg') },
        { name: "Pizza", image: require('../../assets/dishes/Pizzas.jpeg') },
        { name: "Biriyani", image: require('../../assets/dishes/biriyani.jpeg') },
        { name: "Rolls", image: require('../../assets/dishes/Rolls.png') },
        { name: "Cakes", image: require('../../assets/dishes/cake.jpeg') },
        { name: "Chinese", image: require('../../assets/dishes/Chinese.jpeg') },
        { name: "Momos", image: require('../../assets/dishes/Momos.jpeg') },
        { name: "South Indian", image: require('../../assets/dishes/southindian.jpeg') },
        { name: "Samosa", image: require('../../assets/dishes/samosa.jpeg') },
        { name: "Pastry", image: require('../../assets/dishes/pastry.jpeg') },
        { name: "Pasta", image: require('../../assets/dishes/pasta.jpeg') },
        { name: "Shake", image: require('../../assets/dishes/Shake.jpeg') },
        { name: "Shawarma", image: require('../../assets/dishes/shawarma.jpeg') },
        { name: "Noodles", image: require('../../assets/dishes/Noodles.jpeg') },
        { name: "Pav Bhaji", image: require('../../assets/dishes/pavbhaji.jpeg') },
        { name: "Salad", image: require('../../assets/dishes/Salad.jpeg') },
        { name: "Dosa", image: require('../../assets/dishes/Dosa.jpeg') },
    ];

    const cardWidth = 103;

    const updateSlider = () => {
        const maxIndex = dishes.length - 1;
        return {
            transform: `translateX(-${Math.min(currentIndex * cardWidth, maxIndex * cardWidth)}px)`
        };
    };    
    
  return (
    <>
    <div className="dish-card-container-main-head">
        <div className="dishes-container-heading">
            <h1>What's on your mind?</h1>
        </div>
        <div className="arrow-container">
            <div>
            <button
                    className="arrow-button"
                    onClick={() => setCurrentIndex(Math.max(currentIndex - 1, 0))}
                    disabled={currentIndex === 0}>&lt;</button>
            </div>
            <div>
            <button
                className="arrow-button"
                onClick={() => setCurrentIndex(Math.min(currentIndex + 1, dishes.length - 1))}
                disabled={currentIndex === dishes.length - 1}>&gt;</button>
            </div>
        </div>
    </div>

    <div className="dish-container">
        <div id="slider-container">
            <div className="video-cards" style={updateSlider()}>
                {dishes.map((dish, index) => (
                    <div key={index} className="dish-card">
                        <img src={dish.image} alt={dish.name} className="dish-image" />
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default DishCardContainer