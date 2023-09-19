import { useState, useEffect } from "react";
import { images } from "../app/data";
import "./Game.css";
function Game() {
  const BLANK_CARD = "assets/wall.jpeg";
  const images = [
    "assets/Arya.png",
    "assets/cersei.png",
    "assets/daenerys.png",
    "assets/johnSnow.png",
    "assets/khaldrogo.png",
    "assets/sansa.png",
    "assets/tyrion.png",
    "assets/brienne.png",
  ];
  const [points, setPoints] = useState(0);
  const [chosenCards, setChosenCards] = useState([]);
  const [imagesArray, setImagesArray] = useState([]);
  const [chosenCardsIds, setChosenCardsIds] = useState([]);
  const [openCards, setOpenCards] = useState([]);
  function createCardBoard() {
    const imagesGenerated = images?.concat(...images);
    console.log(imagesGenerated);
    const shuffledArray = shuffleArray(imagesGenerated);
    setImagesArray(shuffledArray);
  }
  function flipImage(image, index) {
    console.log(image, index);

    if (chosenCardsIds?.length === 1 && chosenCardsIds[0] === index) {
      return;
    }

    if (chosenCards?.length < 2) {
      setChosenCards((Chosen) => chosenCards?.concat(image));
      setChosenCardsIds((chosenCardsIds) => chosenCardsIds?.concat(index));

      if (chosenCards?.length === 1) {
        if (chosenCards[0] === image) {
          setPoints((points) => points + 2);
          setOpenCards((openCards) =>
            openCards?.concat([chosenCards[0], image])
          );
        }
        setTimeout(() => {
          setChosenCardsIds([]);
          setChosenCards([]);
        }, 700);
      }
    }
  }
  function isCardChosen(image, index) {
    return chosenCardsIds?.includes(index) || openCards?.includes(image);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
    return array;
  }

  function startOver() {
    setChosenCardsIds([]);
    setChosenCards([]);
    setPoints(0);
    setOpenCards([]);
  }

  useEffect(() => {
    createCardBoard();
  }, []);

  return (
    <div>
      <div className="card-header">
        <h4 className="counter">Points:{points}</h4>
        <button onClick={startOver} className="button-start-over">
          Start over
        </button>
      </div>
      <div className="card-container">
        {imagesArray?.map((image, index) => {
          return (
            <div
              className="col-4 col-lg-2"
              key={index}
              onClick={() => flipImage(image, index)}
            >
              <img
                src={isCardChosen(image, index) ? image : BLANK_CARD}
                alt=""
                className={`img-fluid img-fixed`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Game;
