import React from "react";
import "./Step2.css";
import "./HomePage.css";
import Navbar from "./components/navbar";
import GreenBottomBorder from "./components/greenBottomBorder";

export default function Step2({ setValue, nextPage }) {
  return (
    <div className="background">
      <Navbar />
      <div className="headingLayout">
        <h1>Choose one of the following cultures</h1>
           </div>
      <div className="countryLayout">
      <button className="mexicoOption"
        onClick={() => {
          setValue("mexico");
          nextPage();
        }}
      >
        <p>Mexico</p>
      </button>
      <button className="chinaOption"
        onClick={() => {
          setValue("china");
          nextPage();
        }}
      >
        <p>China</p>
      </button>
      <button className="americaOption"
        onClick={() => {
          setValue("america");
          nextPage();
        }}
      >
        <p>America</p>
      </button>
      <button className="italyOption"
        onClick={() => {
          setValue("italy");
          nextPage();
        }}
      >
        <p>Italy</p>
      </button>
      <button className="koreaOption"
        onClick={() => {
          setValue("korea");
          nextPage();
        }}
      >
        <p>Korea</p>
      </button>
      <button className="philippinesOption"
        onClick={() => {
          setValue("philipines");
          nextPage();
        }}
      >
        <p>Philipines</p>
      </button>
      <button className="indiaOption"
        onClick={() => {
          setValue("india");
          nextPage();
        }}
      >
        <p>India</p>
      </button>
      <button  className="jamaicaOption"
        onClick={() => {
          setValue("jamaica");
          nextPage();
        }}
      >
        <p>Jamaica</p>
      </button>
      <button className="japanOption"
        onClick={() => {
          setValue("japan");
          nextPage();
        }}
      >
        <p>Japan</p>
      </button>
      </div>
      <GreenBottomBorder />
    </div>
  );
}
