import React from "react"
import { useHistory } from "react-router-dom";

function DoneButton({ deckId }) {
    const history = useHistory();
    return(
        <button className="btn btn-secondary mb-3" type="button" onClick={() => history.push(`/decks/${deckId}`)}>
            Done
        </button>
    )
}

export default DoneButton