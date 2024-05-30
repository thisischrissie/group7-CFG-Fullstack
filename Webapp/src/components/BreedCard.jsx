import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "../styles/Breeds.css";
import "../styles/Global.css";

/*Component Definition*/
function BreedCard(props) {
  const [isFlipped, setIsFlipped] = useState(false); /*State management*/

  /*Event handler Function*/
  function flipCard() {
    setIsFlipped(!isFlipped); /*When called toggles value of 'isFlipped'*/
  }

  return (
    <div>
      <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
        {/* Front side */}
        <div key="front" onClick={flipCard}>
          <div className="cardDog">
            <img className = "card-image" src={props.imageUrl} alt={props.imageAlt} />
            <div className="breedName">
              <h1 className="h1Breeds" >{props.dogBreed}</h1>
            </div>
          </div>
        </div>
        {/* Back side */}
        <div key="back" onClick={flipCard}>
          <div className="cardDog cardDog-back">
            <div className="breedInfo">
              {/*Props*/}
              <h3>Qualities</h3>
              <p className="pBreeds">{props.quality}</p>
              <h3>Temperament</h3>
              <p className="pBreeds">{props.temper}</p>
              <h3>Need to knows</h3>
              <p className="pBreeds">{props.knows}</p>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
    
  );
  
}

export default BreedCard;
