import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { allowedCards, CardData } from "../../models/cards/card";
import { useAppSelector } from "../../redux/hooks";
import { setGameInitialData } from "../../socket/socketHelpers";

let initialState: { [key: string]: CardData & { qty: number } } = {};
for (let card of allowedCards) {
  initialState[card.id] = {
    ...card,
    uniqueKey: 0,
    qty: 3,
  };
}

function AdminWaitingRoom() {
  const [cardQuantityData, setCardQuantityData] = useState<{
    [key: string]: CardData & { qty: number };
  }>(initialState);
  const [error, setError] = useState("");

  // data from redux
  const playerTurnList = useAppSelector(
    (state) => state.gameStateReducer.gameState.turnPlayerList
  );
  const gameIsReady = useAppSelector(
    (state) => state.gameStateReducer.gameState.ready
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (gameIsReady) {
      navigate("/game");
    }
  }, [gameIsReady, navigate]);
  return (
    <div className="AdminWaitingRoom">
      <div className="CardSelection">
        <strong>Cards Selection</strong>
        {allowedCards.map((card) => (
          <div key={card.id}>
            <p>{card.name}</p>
            <input
              type="number"
              value={cardQuantityData[card.id].qty}
              onChange={(e) => {
                let value = e.target.value;
                let newState = { ...cardQuantityData };
                if (Number.isNaN(value)) {
                  setError(`${card.name} quantity should be a number`);
                  newState[card.id].qty = 0;
                } else if (Number.parseInt(value) < 0) {
                  setError(`${card.name} quantity can't be negative`);
                } else {
                  newState[card.id].qty = Number.parseInt(value);
                  setCardQuantityData({ ...newState });
                }
              }}
            />
          </div>
        ))}
      </div>
      <div className="PlayerSelection">
        <strong>Players Selection</strong>
        {playerTurnList.map((playerId) => (
          <div key={playerId}>
            <p>{playerId}</p>
          </div>
        ))}
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
      <button
        onClick={() => {
          console.log("Confirm >>>");
          console.log(cardQuantityData);
          let cardQuantityDataList = [];
          let totalCards = 0;
          for (let key of Object.keys(cardQuantityData)) {
            cardQuantityDataList.push(cardQuantityData[key]);
            totalCards += cardQuantityData[key].qty;
          }

          // make sure the total number of cards is 2 * player + 3
          if (
            totalCards >= 2 * playerTurnList.length + 3 &&
            playerTurnList.length >= 2
          ) {
            setGameInitialData({
              playerTurnList,
              cardQuantityData: cardQuantityDataList,
            });
          } else if (totalCards < 2 * playerTurnList.length + 3) {
            alert("Too few cards, add more");
          } else {
            alert("Need more player");
          }
        }}
      >
        Confirm
      </button>
    </div>
  );
}

export default AdminWaitingRoom;
