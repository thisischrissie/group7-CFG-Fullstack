import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

function Breeds(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    function flipCard() {
        setIsFlipped(!isFlipped);
    }

    return(
        <div>
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
                {/* Front side */}
                <div key="front" onClick={flipCard}>
                    <div className="card"></div>
                    <img src={props.imageUrl} alt={props.imageAlt} />
                </div>
                
                {/* Back side */}
                <div key="back" onClick={flipCard}>
                    <div className="card card-back"></div>
                    <h1>{props.dogBreed}</h1>
                </div>
            </ReactCardFlip>
        </div>
    );
}



export default Breeds;