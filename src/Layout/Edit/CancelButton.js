import React from "react";
import { useHistory } from "react-router-dom";

function CancelButton({ deckId }) {
  const history = useHistory();

  return (
    <button
      type="button"
      onClick={() => history.push(`/decks/${deckId}`)}
      className="btn btn-secondary"
    >
      Cancel
    </button>
  );
}

export default CancelButton;