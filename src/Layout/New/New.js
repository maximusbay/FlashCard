import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { createDeck } from "../../utils/api/index";
import NewNav from "./NewNav";


function New() {
    const history = useHistory()
    const [deckName, setDeckName] = useState("")
    const [deckDescription, setDeckDescription] = useState("")

    const handleDeckNameChange = (event) => setDeckName(event.target.value);
    const handleDeckDescriptionChange = (event) => setDeckDescription(event.target.value);
  
    const handleCreateSubmit = (event) => {
      event.preventDefault();
      createDeck({
        name: deckName,
        description: deckDescription,
      }).then((newDeck) => history.push(`/decks/${newDeck.id}`));
    };
    return (
    <div>
    <NewNav />
    <h2>Create Deck</h2>
    <form onSubmit={handleCreateSubmit}>
      <div>
    <label>
      Name
      <input type="text" name="name" placeholder="deck name" onChange={handleDeckNameChange}/>
    </label>
      </div>
      <div>
    <label>
      Description
      <textarea placeholder="brief description of the deck" rows="5" onChange={handleDeckDescriptionChange}></textarea>
    </label>
      </div>
      <div>
        <button type="button" onClick={() => history.push("/")}>Cancel</button>
        <button type="submit">Create</button>
      </div>
    </form>
    </div>
    )  
  }

  export default New