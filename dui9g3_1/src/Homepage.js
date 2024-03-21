import React from "react";
import seafoodIcon from "./components/seafoodIcon";
import Navbar from "./components/navbar";
import GreenBottomBorder from "./components/greenBottomBorder";
import seaFoodIcon from "./components/seafoodIcon";



export default function HomePage({nextPage}) {
    return ( 
        
        <div className="background">
            <Navbar/>
            <div className="mainLayoutPosition">    
            <div className="mainLayout">
                <h1>Welcome to Easy Eats</h1>
                <p>At EasyEats, we understand that finding the perfect dining spot that caters to your unique dietary needs and preferences can be a challenge. That's why we're here to transform your dining experience in Orlando. Whether you're vegan, gluten-free, keto, or have any other dietary restrictions, we've got you covered.</p>
                <p>Our mission is to connect you with local Orlando restaurants that not only understand your dietary needs but also celebrate them with delicious and innovative menus. We believe that everyone deserves to enjoy a wonderful dining experience, regardless of dietary restrictions or choices.</p>
                <button className="homepageButton" onClick={nextPage}>Get Started</button>
            </div>
            
        </div>

        <div className="pictureLayout">
            <div className="BurgerIcon">

            </div>
            <div className="SeaFoodIcon">
            
            </div>
            <div className="ChiliIcon">
                
            </div> 

        <div className="CookieIcon">
        
        </div>  
            
        </div>
        
        <GreenBottomBorder/>
        </div>

    );



}