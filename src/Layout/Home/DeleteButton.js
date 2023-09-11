import React from "react";
import { deleteDeck } from "../../utils/api/index";

function DeleteButton({deck}) {
    const handleDeleteClick = () => {
        if (
          window.confirm("Delete this deck? You will not be able to recover it.")
        ) {
          deleteDeck(deck.id);
        }
      };

    return (
        <div>
            <button type="button" onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}

export default DeleteButton