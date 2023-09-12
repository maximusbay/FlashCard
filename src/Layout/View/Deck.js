import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api/index";

function Deck({ cards, deckId, url }) {
  const history = useHistory();

  const handleDeleteClick = (card) => {
    if (
      window.confirm("Delete this card? You will not be able to recover it.")
    ) {
      deleteCard(card.id);
    } 
  };

  const cardDisplay = cards.map((card, index) => {
    return (
      <div className="card deck-card mt-3 p-3 mb-3" key={index}>
        <div className="card-body row">
          <div className="col-md-5 pl-3">
            <p className="font-weight-bold">Front:</p>
            <p>{card.front}</p>
          </div>
          <div className="col-md-5 ml-auto">
            <p className="font-weight-bold">Back:</p>
            <p>{card.back}</p>
          </div>
        </div>

        <hr />
        
        <div className="ml-auto mt-2">
          <button
            type="button"
            onClick={() =>
              history.push(`/decks/${deckId}/cards/${card.id}/edit`)
            }
            className="btn btn-secondary"
          >
            <span className="oi oi-pencil mr-1" />
            Edit
          </button>

          <button
            type="button"
            onClick={() => handleDeleteClick(card)}
            className="btn btn-danger mx-2"
          >
            <a href={url} className="text-white">
              <span className="oi oi-trash" />
            </a>
          </button>
        </div>
      </div>
    );
  });

  if (cards.length) {
    return <div>{cardDisplay}</div>;
  } else {
    return "There are no cards in this deck yet!";
  }
}

export default Deck;
