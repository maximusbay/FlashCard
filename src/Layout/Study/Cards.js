import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router";

function FlipButton({ setIsFrontOfCard }) {
  const flipCardHandler = () => {
    setIsFrontOfCard((currentSide) => !currentSide);
  };

  return (
    <button type="button" onClick={flipCardHandler}>
      Flip
    </button>
  );
}

function NextButton({ NextCardHandler }) {
  return (
    <button type="button" onClick={NextCardHandler}>
      Next
    </button>
  );
}

function AddCardsButton({ deckId }) {
  const history = useHistory();
  return (
    <button
      type="button"
      onClick={() => history.push(`/decks/${deckId}/cards/new`)}
    >
      <span /> Add Cards
    </button>
  );
}

function Cards({ cards, currentCard, setCurrentCard, deckId }) {
  const [cardCount, setCardCount] = useState(1);
  const [isFrontOfCard, setIsFrontOfCard] = useState(true);

  const history = useHistory();
  const { url } = useRouteMatch();

  const NextCardHandler = () => {
    if (cardCount < cards.length) {
      setIsFrontOfCard((currentSide) => !currentSide);
      setCurrentCard(cards[cardCount]);
      setCardCount((currentCount) => currentCount + 1);
    } else {
      if (
        window.confirm(
          "Restart cards? Click 'cancel' to return to the home page."
        )
      ) {
        setIsFrontOfCard((currentSide) => !currentSide);
        setCurrentCard(cards[0]);
        setCardCount(1);
        history.push(url);
      } else {
        history.push("/");
      }
    }
  };

  if (cards.length < 3) {
    return (
      <div>
        <h4>Not enough cards!</h4>
        <p>
          You need at least 3 cards to study. There are {cards.length} cards in
          this deck.
        </p>
        <AddCardsButton deckId={deckId} />
      </div>
    );
  }

  if (isFrontOfCard) {
    return (
      <div>
        <div>
          <h5>
            Card {cardCount} of {cards.length}
          </h5>
          <p>Front:</p>
          <p>{currentCard.front}</p>
          <FlipButton setIsFrontOfCard={setIsFrontOfCard} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h5>
          Card {cardCount} of {cards.length}
        </h5>
        <p>Back:</p>
        <p>{currentCard.back}</p>
        <FlipButton setIsFrontOfCard={setIsFrontOfCard} />
        <NextButton NextCardHandler={NextCardHandler} />
      </div>
    </div>
  );
}

export default Cards;
