import React, { useState } from "react";
import "./App.css";
import RatingButtons from "./Components/RatingButtons";
import ThanksComponent from "./Components/ThanksComponent";
import star from "./images/icon-star.svg";

const App = () => {

  const [submitted, setSubmitted] = useState(false);
  const [clickedRate, setClickedRate] = useState("");

  return (
    <>
      <div className="app">
        {!submitted && (
          <div className="rating-component">
          <div className="star">
            <img src={star} alt="star-icon" />
          </div>

          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feeedback is appreciated to help us improve our offering!
          </p>

          <RatingButtons setClickedRate={setClickedRate}/>
          <button className="submit" onClick={() => setSubmitted(true)}>
            SUBMIT
          </button>
        </div>
        )}

        {submitted && <ThanksComponent clickedRate={clickedRate} />}

        
      </div><small><a href="https://www.frontendmentor.io/home" target="_blank" rel="noopener  noreferrer">Frontend Mentor </a>challenge. Coded by <a href="https://LauraIu.github.io/portfolio" target="_blank" rel="noopener noreferrer">Iula </a></small>
    </>
  );
};

export default App;