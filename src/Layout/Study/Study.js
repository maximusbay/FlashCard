import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api/index";
import Cards from "./Cards";
import StudyNav from "./StudyNav";

function Study() {
    const [deck, setDeck] = useState({});
    const [cards, setCards] = useState([]);
    const [currentCard, setCurrentCard] = useState({});
    const deckId = useParams().deckId;
    
    useEffect(() => {
        async function loadDeck() {
          const response = readDeck(deckId);
          const deckFromAPI = await response;
          setDeck(deckFromAPI);
          setCards(deckFromAPI.cards);
          setCurrentCard(deckFromAPI.cards[0]);
        }
        loadDeck();
      }, [deckId]);
    return (
      <div>
      <StudyNav deckId={deckId} deck={deck}/>
      <h2>Study: {deck.name}</h2>
      <Cards cards={cards} currentCard={currentCard} setCurrentCard={setCurrentCard} deckId={deckId}/>
      </div>
    )
  }

export default Study