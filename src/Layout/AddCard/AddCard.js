import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDeck, createCard } from "../../utils/api/index";
import Card from "./Card"
import DoneButton from "./DoneButton"
import AddCardNav from "./AddCardNav"

function AddCard() {
    const [deck, setDeck] = useState({});
    const [cardFront, setCardFront] = useState("");
    const [cardBack, setCardBack] = useState("");
    const deckId = useParams().deckId;

    const handleCardFrontChange = (event) => setCardFront(event.target.value);
    const handleCardBackChange = (event) => setCardBack(event.target.value);

    const handleSaveCard = (event) => {
        event.preventDefault();
        createCard(deckId, { front: cardFront, back: cardBack });
        setCardFront("");
        setCardBack("");
      };

    useEffect(() => {
        async function loadDeck() {
          const response = readDeck(deckId);
          const deckFromAPI = await response;
          setDeck(deckFromAPI);
        }
        loadDeck();
      }, [deckId]);

    if (deck.name) {
    return (
    <div>
    <AddCardNav deckName={deck.name} deckId={deckId} />
    <h2>{deck.name}: Add Card</h2>
    <form onSubmit={handleSaveCard}>
    <Card cardFront={cardFront} 
          handleCardFrontChange={handleCardFrontChange} 
          cardBack={cardBack} 
          handleCardBackChange={handleCardBackChange}/>
    <div>
        <DoneButton deckId={deckId}/>
        <button type="submit">Save</button>
    </div>
    </form>
    </div>
    )
  }
  return "Loading...";
}
  export default AddCard