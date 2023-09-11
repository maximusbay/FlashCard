import React from "react";

function Card({ cardFront, handleCardFrontChange, cardBack, handleCardBackChange }) {
    return (
        <div>
        <div>
        <label>
            Front
            <textarea onChange={handleCardFrontChange} value={cardFront} rows="3"></textarea>
        </label>
        </div>
        <div>
        <label>
            Back
            <textarea onChange={handleCardBackChange} value={cardBack} rows="3"></textarea>
        </label>
        </div>
        </div>
    )
}

export default Card