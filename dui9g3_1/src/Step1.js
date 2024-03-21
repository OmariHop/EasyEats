import React from "react";
import "./Step1.css";
import "./HomePage.css";
import Navbar from "./components/navbar";
import GreenBottomBorder from "./components/greenBottomBorder";

export default function Step1({ setValue, nextPage }) {
  return (
    
    <div className="background">
      <Navbar/>
      <div className="mainSelectionLayout">
        <h1>What is your dietary preferance?</h1>
      <button className="veganOption"
        onClick={() => {
          setValue("vegan");
          nextPage();
        }}
      >
        Vegan
      </button>
      <button className="vegetarianOption"
        onClick={() => {
          setValue("vegetarian");
          nextPage();
        }}
      >
        Vegetarian
      </button>
      <button className="noRestrictionsOption"
        onClick={() => {
          setValue("normal");
          nextPage();
        }}
      >
        No Restrictions
      </button>

      </div>
      <GreenBottomBorder/>
    </div>

  );
}
