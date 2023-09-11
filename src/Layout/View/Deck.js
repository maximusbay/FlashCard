import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api/index";

function Deck({ cards, deckId, url }) {
  const history = useHistory();

  const handleDeleteCardClick = (card) => {
    if (
      window.confirm("Delete this card? You will not be able to recover it.")
    ) {
      deleteCard(card.id);
    } 
  };

  const cardDisplay = cards.map((card, index) => {
    return (
      <div key={index}>
        <div>
          <div>
            <p>Front:</p>
            <p>{card.front}</p>
          </div>
          <div>
            <p>Back:</p>
            <p>{card.back}</p>
          </div>
        </div>

        <hr />
        
        <div>
          <button
            type="button"
            onClick={() =>
              history.push(`/decks/${deckId}/cards/${card.id}/edit`)
            }
          >
            Edit
          </button>

          <button
            type="button"
            onClick={() => handleDeleteCardClick(card)}
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
