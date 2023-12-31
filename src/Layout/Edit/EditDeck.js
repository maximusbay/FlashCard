import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api/index";
import CancelButton from "./CancelButton";

function EditDeck() {
  const [deckName, setDeckName] = useState("");
  const [deckDescription, setDeckDescription] = useState("");
  const history = useHistory();
  const deckId = useParams().deckId;

  const handleNameChange = (event) => setDeckName(event.target.value);
  const handleDescriptionChange = (event) => setDeckDescription(event.target.value);

  const handleEditSubmit = (event) => {
    event.preventDefault();
    updateDeck({
      id: deckId,
      name: deckName,
      description: deckDescription,
    }).then((updatedDeck) => history.push(`/decks/${updatedDeck.id}`));
  };


  useEffect(() => {
    async function loadDeck() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeckName(deckFromAPI.name);
      setDeckDescription(deckFromAPI.description);
    }
    loadDeck();
  }, [deckId]);

    return (
    <div>
    <h2>Edit Deck</h2>
    <form onSubmit={handleEditSubmit} className="mb-3">
    <div className="form-group">
    <label style={{display: "block"}}>
      Name
      <input className="form-control" style={{display: "block"}} type="text" value={deckName} onChange={handleNameChange}></input>
    </label >
    </div>
    <div className="form-group">
    <label style={{display: "block"}}>
      Description
      <textarea className="form-control" style={{display: "block"}} rows="5" value={deckDescription} onChange={handleDescriptionChange}></textarea>
    </label>
    </div>
    <div>
      <CancelButton deckId={deckId}/>
      <button type="submit" className="btn btn-primary ml-3">Submit</button>
    </div>
    </form>
    </div>
    )
  }

  export default EditDeck