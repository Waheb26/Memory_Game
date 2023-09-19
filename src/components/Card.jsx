import React, { useState } from "react";
import { items } from "/public/Items.json";
import "./Card.css";

const Card = () => {
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState({ items });

  const handleCardClick = (clickedCard) => {
    if (!clickedCard.isFlipped && flippedCards.length < 2) {
      const updatedCards = cards.map((card) =>
        card.id === clickedCards.id ? { ...card, isFlipped: true } : card
      );
      setCards(updatedCards);

      setFlippedCards([...flippedCards, card]);

      if (flippedCards.length === 1) {
        const [firstCard] = flippedCards;
        if (firstCard.src === card.src) {
          setFlippedCards([]);
        } else {
          setTimeout(() => {
            const resetCards = cards.map((c) =>
              card.isFlipped ? { ...card, isFlipped: false } : c
            );
            setCards(resetCards);
            setFlippedCards([]);
          }, 1000);
        }
      }
    }
  };

  return (
    <div>
      <div className="score-counter">{count}</div>
      <div className="card-contain">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.isFlipped ? "flipped" : ""}`}
            onClick={() => handleCardClick(card)}
          >
            {card.isFlipped ? (
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <img src={card.src} alt={card.title} />
              </div>
            ) : (
              <div className="card-back"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
