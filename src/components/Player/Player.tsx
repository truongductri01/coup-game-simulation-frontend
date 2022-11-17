import React from "react";
import { useAppSelector } from "../../redux/hooks";
import Card from "../Card/Card";
import "./Player.css";

function Player(props: { setShowModal: Function }) {
  const mainPlayerData = useAppSelector(
    (state) => state.playerReducer.playerData
  );
  const turnPlayerId = useAppSelector(
    (state) => state.gameStateReducer.gameState.turnPlayerId
  );
  return (
    <div className="Player">
      <div className="Player__Info">
        <p>Coins: {mainPlayerData.coins}</p>
        {turnPlayerId === mainPlayerData.id && (
          <button
            className="ActionBtn"
            onClick={() => {
              props.setShowModal(true);
            }}
          >
            Take an action
          </button>
        )}
      </div>

      <div className="Player__Cards">
        {mainPlayerData.hand.map((card) => (
          <Card cardData={card} />
        ))}
      </div>
    </div>
  );
}

export default Player;
