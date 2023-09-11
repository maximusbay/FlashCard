import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../../utils/api/index";
import EditCardNav from "./EditCardNav";
import Card from "./Card";
import CancelButton from "./CancelButton"

function EditCard() {
  const [deck, setDeck] = useState({});
  const [preExistingCard, setPreExistingCard] = useState({});
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");
  const deckId = useParams().deckId;
  const cardId = useParams().cardId;
  const history = useHistory();

  const handleCardFrontChange = (event) => setCardFront(event.target.value);
  const handleCardBackChange = (event) => setCardBack(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCard({ ...preExistingCard, front: cardFront, back: cardBack })
      .then((updatedCard) => history.push(`/decks/${updatedCard.deckId}`));
  };

  useEffect(() => {
    async function loadDeck() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeck(deckFromAPI);
    }

    async function loadCard() {
      const response = readCard(cardId);
      const cardFromAPI = await response;
      setPreExistingCard(cardFromAPI);
      setCardFront(cardFromAPI.front);
      setCardBack(cardFromAPI.back);
    }
    loadDeck();
    loadCard();
  }, [deckId, cardId]);
    
    return (
        <div>
        <h1>EDITCARD</h1>
        <EditCardNav deckName={deck.name} deckId={deckId} cardId={cardId}/>
        <form onSubmit={handleSubmit}>
        <Card cardFront={cardFront} 
          handleCardFrontChange={handleCardFrontChange} 
          cardBack={cardBack} 
          handleCardBackChange={handleCardBackChange}/>
        <CancelButton deckId={deckId}/>
        <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default EditCard