import React from "react";
import "../App.css";
import thanks_img from "../images/illustration-thank-you.svg";


const ThanksComponent = ({ clickedRate }) => {
  return (
    <>
      <div className="thanks-component">
        <img
          src={thanks_img}
          alt="illustration-thank-you"
        ></img>
        <div className="rating-selected">
          <p className="rating-selected-p">
            You selected {clickedRate} out of 5
          </p>
        </div>
        <div>
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </>
  );
};

export default ThanksComponent;