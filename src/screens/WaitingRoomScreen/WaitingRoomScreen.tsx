import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import AdminWaitingRoom from "../AdminWaitingRoom/AdminWaitingRoom";
import NormalPlayerWaitingRoom from "../NormalPlayerWaitingRoom/NormalPlayerWaitingRoom";
import { useNavigate } from "react-router";
import { connectSocket } from "../../socket/socketHelpers";

function WaitingRoomScreen() {
  const mainPlayerData = useAppSelector(
    (state) => state.playerReducer.playerData
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (mainPlayerData.id.length > 0) {
      connectSocket(mainPlayerData, dispatch);
    } else {
      navigate("/auth/login");
    }
    // eslint-disable-next-line
  }, [mainPlayerData]);
  return (
    <div className="WaitingRoomScreen">
      {mainPlayerData.admin ? (
        <AdminWaitingRoom />
      ) : (
        <NormalPlayerWaitingRoom />
      )}
    </div>
  );
}

export default WaitingRoomScreen;
