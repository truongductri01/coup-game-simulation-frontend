import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../redux/hooks";

function NormalPlayerWaitingRoom() {
  const navigate = useNavigate();
  const gameIsReady = useAppSelector(
    (state) => state.gameStateReducer.gameState.ready
  );
  useEffect(() => {
    if (gameIsReady) {
      navigate("/game");
    }
  }, [gameIsReady, navigate]);
  return <div>NormalPlayerWaitingRoom</div>;
}

export default NormalPlayerWaitingRoom;
