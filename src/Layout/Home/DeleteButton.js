import React from "react";
import { deleteDeck } from "../../utils/api/index";

function DeleteButton({deck}) {
    const handleDeleteClick = () => {
        if (
          window.confirm("Delete this deck? You will not be able to recover it.")
        ) {
          deleteDeck(deck.id);
          window.location.reload();
        }
      };

    return (
            <button type="button" onClick={handleDeleteClick} className="btn btn-danger">
              <span className="oi oi-trash" />
            </button>
    )
}

export default DeleteButton