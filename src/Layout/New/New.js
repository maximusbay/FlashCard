import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { createDeck } from "../../utils/api/index";
import NewNav from "./NewNav";

function New() {
    const history = useHistory()
    const [deckName, setDeckName] = useState("")
    const [deckDescription, setDeckDescription] = useState("")

    const handleNameChange = (event) => setDeckName(event.target.value);
    const handleDescriptionChange = (event) => setDeckDescription(event.target.value);
  
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
      <div className="form-group"> 
    <label style={{display: "block"}}>
      Name
      <input className="form-control" style={{display: "block"}} type="text" name="name" placeholder="Deck name" onChange={handleNameChange}/>
    </label>
      </div>
      <div className="form-group">
    <label style={{display: "block"}}>
      Description
      <textarea className="form-control" style={{display: "block"}} placeholder="Brief description of the deck" rows="5" onChange={handleDescriptionChange}></textarea>
    </label>
      </div>
      <div>
        <button type="button" onClick={() => history.push("/")} className="btn btn-secondary mb-3">Cancel</button>
        <button type="submit" className="btn btn-primary mx-2 mb-3">Submit</button>
      </div>  
    </form>
    </div>
    )  
  }

  export default New