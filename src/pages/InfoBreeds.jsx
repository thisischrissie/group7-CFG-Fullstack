import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

function Breeds() {
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
                    <h1>Front</h1>
                </div>
                
                {/* Back side */}
                <div key="back" onClick={flipCard}>
                    <div className="card card-back"></div>
                    <h1>Back</h1>
                </div>
            </ReactCardFlip>
        </div>
    );
}



export default Breeds;