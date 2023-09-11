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
    <p>Home</p>
    <button onClick={() => history.push("/decks/new")}>Create Deck</button>
    {decks.map((deck, index) => {
        return (
          <div>
            <div>
              <div>
                <h5>{deck.name}</h5>
                <h6>
                  {deck.cards.length} cards
                </h6>
              </div>
              <p>{deck.description}</p>
              <div>
                <div>
                  <button onClick={() => history.push(`/decks/${deck.id}`)}>View</button>
                  <button onClick={() => history.push(`/decks/${deck.id}/study`)}>Study</button>
                </div>
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