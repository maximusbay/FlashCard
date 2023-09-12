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
        <div className="d-flex mb-3">
        <div className="mr-auto">
        <h2>{deck.name}</h2>
        <p>{deck.description}</p>
        <button type="button" onClick={() => history.push(`/decks/${deckId}/edit`)} className="btn btn-secondary">
        <span className="oi oi-pencil" /> Edit
        </button>
        <button type="button" onClick={() => history.push(`/decks/${deckId}/study`)} className="btn btn-primary mx-2">
        <span className="oi oi-book" /> Study
        </button>
        <button type="button" onClick={() => history.push(`/decks/${deckId}/cards/new`)} className="btn btn-success">
        <span className="oi oi-plus" /> Add Card
        </button>
        </div>
        <div className="mt-auto">
        <DeleteButton deckId={deckId} />
        </div>
        </div>
    <div>
        <h1>Cards</h1>
        <Deck cards={cards} deckId={deckId} url={url}/>
    </div>
    </div>
    )
  }

  export default View