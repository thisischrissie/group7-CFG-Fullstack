import React from "react";
import ReactCardFlip from "react-card-flip";

function Breeds()
{
    return 
    (
        <div>
            <ReactCardFlip>
                <div className="card"></div>
                <h1>Front</h1>
                <div className="card card-back"></div>
                <h1>Back</h1>
            </ReactCardFlip>
        </div>
    )

}

export default Breeds;