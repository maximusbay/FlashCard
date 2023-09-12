import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { listDecks } from "../../utils/api/index";
import DeleteButton from "./DeleteButton"

 
function Home() {
    const history = useHistory();
    const [decks, setDecks] = useState([]);

    useEffect(() => {
        async function loadDecks() {
          const response = listDecks();
          const decksFromAPI = await response;
          setDecks(decksFromAPI);
        }
        loadDecks();
      }, []);
    return (
    <>
    <button onClick={() => history.push("/decks/new")} className="btn btn-secondary mb-3">
    <span className="oi oi-plus mr-1" />
      Create Deck
    </button>
    {decks.map((deck, index) => {
        return (
          <div className="card my-3 p-4">
     
              <div className="d-flex justify-content-between">
                <h5 >{deck.name}</h5>
                <h6 className="text-muted">
                  {deck.cards.length} cards
                </h6>
              </div>
              <p>{deck.description}</p>
              <div className="d-flex">
                <div className="mr-auto">
                  <button onClick={() => history.push(`/decks/${deck.id}`)} className="btn btn-secondary">
                  <span className="oi oi-eye mr-1" />
                    View
                  </button>
                  <button onClick={() => history.push(`/decks/${deck.id}/study`)} className="btn btn-primary mx-3">
                  <span className="oi oi-book mr-1" />
                    Study
                  </button>
                </div>
                <div>
                  <DeleteButton />
                </div>
              </div>
       
          </div>
        );
      })}
    </>
    )
  }

  export default Home