import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import '../styles/Breeds.css';

function BreedCard(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    function flipCard() {
        setIsFlipped(!isFlipped);
    }

    return(
        <div>
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
                {/* Front side */}
                <div key="front" onClick={flipCard}>
                    <div className="card">
                    <img src={props.imageUrl} alt={props.imageAlt} />
                    <div className="breedName"><h1>{props.dogBreed}</h1></div>
                    
                </div>
                </div>
                {/* Back side */}
                <div key="back" onClick={flipCard}>
                    <div className="card card-back">
                        <div className="breedInfo">
                        <h3>Qualities</h3>
                        <p>{props.quality}</p>
                        <h3>Temperament</h3>
                        <p>{props.temper}</p>
                        <h3>Need to knows</h3>
                        <p>{props.knows}</p>

                        </div>
                    
                </div>
                </div>
            </ReactCardFlip>
        </div>
    );
}



export default BreedCard;