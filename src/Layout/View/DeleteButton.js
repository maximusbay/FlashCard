import React from 'react';
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api/index";

function DeleteButton({ deckId }) {
    const history = useHistory();
    const handleTrashClick = () => {
      if (
        window.confirm("Delete this deck? You will not be able to recover it.")
      ) {
        deleteDeck(deckId).then(() => history.push("/"));
      }
    };

    return (
      <button type="button" onClick={handleTrashClick} className="btn btn-danger">
        <span className="oi oi-trash" />
      </button>
    );
  }
  
  export default DeleteButton;