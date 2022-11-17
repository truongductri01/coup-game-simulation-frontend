import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerData } from "../../models/player/player";

const playerReducerInitialStateEmpty: PlayerData = {
  hand: [],
  coins: 0,
  name: "",
  id: "",
  alive: true,
  active: true,
  admin: false,
};

export const playerSlice = createSlice({
  name: "player",
  initialState: { playerData: { ...playerReducerInitialStateEmpty } },
  reducers: {
    setPlayerData: (state, action: PayloadAction<PlayerData>) => {
      state.playerData = { ...action.payload };
    },
    clearPlayerData: (state) => {
      state.playerData = { ...playerReducerInitialStateEmpty };
    },
  },
});

export const { setPlayerData, clearPlayerData } = playerSlice.actions;
export default playerSlice.reducer;
