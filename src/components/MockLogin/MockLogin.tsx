import React from "react";
import { PlayerData, mockPlayerList } from "../../models/player/player";
import { useAppDispatch } from "../../redux/hooks";
import { setPlayerData } from "../../redux/playerReducer/playerReducer";
import { useNavigate } from "react-router-dom";
import "./MockLogin.css";

function MockLogin() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleOnClick = (playerData: PlayerData) => {
    console.log("Set new player >>>", playerData);
    dispatch(setPlayerData(playerData));
    navigate("/");
  };
  return (
    <div className="MockLogin">
      {mockPlayerList.map((playerData) => (
        <div
          className="MockLogin__PlayerData"
          key={playerData.id}
          onClick={() => handleOnClick(playerData)}
          style={{
            height: "100px",
            width: "100px",
            border: "2px solid black",
          }}
        >
          {playerData.name}
        </div>
      ))}
    </div>
  );
}

export default MockLogin;
