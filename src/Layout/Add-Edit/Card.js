import React from "react";

function Card({ cardFront, handleCardFrontChange, cardBack, handleCardBackChange }) {
    return (
        <div>
        <div className="form-group">
        <label style={{display: "block"}}>
            Front
            <textarea className="form-control" onChange={handleCardFrontChange} placeholder="Front side of card" value={cardFront} rows="3" style={{display: "block"}}></textarea>
        </label>
        </div>
        <div className="form-group">
        <label style={{display: "block"}}>
            Back
            <textarea className="form-control" onChange={handleCardBackChange} placeholder="Back side of card" value={cardBack} rows="3" style={{display: "block"}}></textarea>
        </label>
        </div>
        </div>
    )
}

export default Card