import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import "./Game.css";
import Modal from "../Modal/Modal";
import ActionList from "../ActionList/ActionList";
import { connectSocket } from "../../socket/socketHelpers";
import Player from "../Player/Player";

function Game() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const mainPlayerData = useAppSelector(
    (state) => state.playerReducer.playerData
  );
  const opponentList = useAppSelector(
    (state) => state.gameStateReducer.gameState.opponents
  );
  useEffect(() => {
    if (mainPlayerData.id.length > 0) {
      connectSocket(mainPlayerData, dispatch);
    } else {
      navigate("/auth/login");
    }
    // eslint-disable-next-line
  }, [mainPlayerData]);

  return (
    <div className="Game">
      <Modal
        body={<ActionList setShowModal={setShowModal} />}
        header={
          <div style={{ display: "flex" }}>
            <p>Actions</p>
            <button onClick={() => setShowModal(false)}>Close Modal</button>
          </div>
        }
        show={showModal}
        setShowModal={setShowModal}
      />

      <div className="Game__Opponent">
        <p>There are {opponentList.length} other player(s)</p>
        {opponentList.map((opponent) => (
          <div key={opponent.id}>
            <p>Name: {opponent.name}</p>
            <p>Cards: {opponent.handSize}</p>
            <p>Coins: {opponent.coins}</p>
          </div>
        ))}
      </div>
      <div className="Game__Field"></div>
      <div className="Game__Bank"></div>
      <div className="Game__Player">
        <Player setShowModal={setShowModal} />
      </div>
    </div>
  );
}

export default Game;
