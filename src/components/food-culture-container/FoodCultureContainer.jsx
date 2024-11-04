import { useState } from "react"
import "./FoodCultureContainer.css"
import ArrowDown from "../../assets/orangedownarrow.png";


const FoodCultureContainer = () => {
    
    const [expanded,setExpanded] = useState(false);

    const handleToggle = () =>{
        setExpanded(true);
    };

  return (
    <div className="foodculturecontainer-main">
        <div className="foodculturecontainer-header">
            <div className="foodculturecontainer-header-content">
                <h2>Food culture in Bangalore</h2>
            </div>
        </div>
        <div className="foodculturecontainer-body">
            <div className={`foodculturecontainer-description-box ${expanded ? 'expanded': ''}`}>
                <div className={`foodculturecontainer-description-box-content ${expanded ? 'expanded': ''}`}>
                    <h2>Reasons to Order Food Online in Bangalore via Swiggy</h2>
                    <p>
                        Bangalore, the IT hub of the country, is the city that is a home to millions of young techies 
                        staying far away from their homes. If you are also one of those, who does not have a proper 
                        functional kitchen, you can understand the pain of missing out on your favourite food. Imagine 
                        one day you are having a hectic day at work, and suddenly you find its lunchtime. The rats have 
                        already started growling in your stomach as it’s already Food O’clock, but you can’t visit the food 
                        court due to your ongoing work. Bummer? But no worries, as Swiggy is here to help you. Just take a 
                        pause, order food online in Bangalore, and you can resume work.
                        <a href="https://www.swiggy.com/">Swiggy</a> assures you of lightning-fast delivery, and the 
                        delivery agents will deliver your food within 45 minutes, fresh and hot from the restaurant. 
                    </p>
                    <h4>Get your food delivery in Bangalore to experience its food culture</h4>
                    <p>
                        The services of food delivery in Bangalore make it easy for you to taste the delicious dishes 
                        that this city has to offer. From authentic pizzas and burgers to crispy masala dosa, idli, 
                        vada and droolworthy filter coffee, the city has it all. If you want to start with the famous 
                        food of Bangalore, try Ragi Mudde, which are traditional gluten-free balls made with finger 
                        millet flour. Next on the platter can be Mangaluru buns, which is a banana-based food, served 
                        with delicious coconut chutney and kurma. Biryani lovers must try the Anand Dum Biryani served 
                        at Hostoke. Bisi Bele Bath is an authentic vegetarian dish made with a combination of rice, 
                        veggies, lentils, and ghee and has the flavour of rich spices. The combination of akki roti 
                        and chutney pudi is comfort food at its best. Don’t forget to gorge on Chow Chow Bath, a popular 
                        street food and dessert of Bangalore.
                    </p>
                    <h4>Places to order food online in Bangalore</h4>
                    <p>You will not have a dearth of places to order food online, as there are many restaurants offering
                         online food delivery in Bangalore. There is a long list of restaurants that deliver fine dining
                          or delectable multiple cuisines in food leaving you in an out-of-the-world gastronomical 
                          experience. With Swiggy, you can order your favourite food from any near or distant restaurant
                           citywide, without stressing over the quality of food or the time of its delivery.</p>
                    <h4>Trust Swiggy to tantalize your taste buds</h4>
                    <p>If you are constantly searching for food delivery options near you, Swiggy is your best bet. 
                        We connect customers who want to place online food orders with restaurant partners. We provide a
                        single window for ordering from a wide range of restaurants and delivering tasty food to your 
                        doorstep at the earliest. There is no restriction in order value. Hence, you can place an order
                        for a minimum amount for yourself and your friends. The live tracking feature helps you track the 
                        live location of the delivery agent, and you will get an estimate of how long it will take for the 
                        food to be delivered.</p>
                    <h4>FAQs:</h4>
                    <h4>Q. When can I expect my food to be delivered once the order has been placed?</h4>
                    <p>A. Once the order has been placed, the delivery agent will deliver the food within 45 minutes.</p>
                    <h4>Q. Which areas of Bangalore are served by Swiggy?</h4>
                    <p>A. Currently, we are available at Yeshwanthpur, Koramangala, HSR, Banashankari, Kammanahalli/Kalyan Nagar,
                         Battarahalli, Bellandur/Serjapur, Yelahanka, R.T. Nagar, Rajarajeshwari Nagar, Shantinagar, Wilson Garden,
                          Geddalahalli, JP Nagar, Arekere, Whitefield, Kumaraswamy Layout & Uttarahalli, Banaswadi, Frazer Town, 
                          Majestic, Kadugodi, CV Raman Nagar, Kudlo Gate, Jayanagar, Basavanavugi, Mahadevpura, Indiranagar, BTM, 
                          Basaveshwaranagar, Sanjay Nagar, New BEL Road, Kanakapura Road, Marathahalli, Electronic City, 
                          Central Bangalore and Kadubeesanahalli.</p>
                </div>
                {!expanded && (
                    <div className="expandable-button-container">
                        <button onClick={handleToggle}>
                            See more
                            <span>
                            <img className="expandable-button-container-arrow" src={ArrowDown} alt="Arrow Down" />
                            </span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default FoodCultureContainer