import React, { useState, useEffect } from 'react';
import { readDeck } from "../../utils/api/index";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import Deck from "./Deck";
import ViewNav from "./ViewNav";

function View() {
    const deckId = useParams().deckId;
    const [deck, setDeck] = useState({});
    const [cards, setCards] = useState([]);
    const history = useHistory();
    const { url } = useRouteMatch();

    useEffect(() => {
        async function loadDeck() {
          const response = readDeck(deckId);
          const deckFromAPI = await response;
          setDeck(deckFromAPI);
          setCards(deckFromAPI.cards);
        }
        loadDeck();
      }, [deckId]);
    return (
    <div>
      <ViewNav deckName={deck.name}/>
        <div>
        <h2>{deck.name}</h2>
        <h2>{deck.description}</h2>
        <button type="button" onClick={() => history.push(`/decks/${deckId}/edit`)}>Edit</button>
        <button type="button" onClick={() => history.push(`/decks/${deckId}/study`)}>Study</button>
        <button type="button" onClick={() => history.push(`/decks/${deckId}/cards/new`)}>Add Card</button>
        <DeleteButton deckId={deckId} />
        </div>
    <div>
        <h1>Cards</h1>
        <Deck cards={cards} deckId={deckId} url={url}/>
    </div>
    </div>
    )
  }

  export default View