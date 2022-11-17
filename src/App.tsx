import React, { useEffect } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import {
  connectSocket,
  playerJoinGame,
  sendMessageToGameRoom,
} from "./socket/socketHelpers";

function App() {
  const mainPlayerData = useAppSelector(
    (state) => state.playerReducer.playerData
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (mainPlayerData.id.length === 0) {
      navigate("/auth/login");
    } else {
      connectSocket(mainPlayerData, dispatch);
    }
    // eslint-disable-next-line
  }, [mainPlayerData]);

  return (
    <div className="App">
      <button
        onClick={() => {
          navigate("/waiting-room");
          playerJoinGame(mainPlayerData);
          sendMessageToGameRoom(mainPlayerData.name + " joins the room");
        }}
      >
        Join the Game
      </button>
    </div>
  );
}

export default App;
