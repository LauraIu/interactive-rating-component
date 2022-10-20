import React from 'react';

const RatingButtons = ({setClickedRate}) => {

  const ratingButtons = [
    { number: 1, id: 1 },
    { number: 2, id: 2 },
    { number: 3, id: 3 },
    { number: 4, id: 4 },
    { number: 5, id: 5 },
  ];



    return (
      <>
        <div className="rating-buttons-wrapper">
          {ratingButtons.map((button) => (
            <button 
              key={button.id}
              number={button.number}
              // onClick={() => console.log(button.number)}>
              onClick={() => setClickedRate(button.number)}
            >
              {button.number}
            </button>
          ))}
        </div>
      </>
    );
  };

  export default RatingButtons;