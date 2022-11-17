import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameState } from "../../models/gameState/gameState";

const initialState: { gameState: GameState } = {
  gameState: {
    winnerId: "",
    opponents: [],
    ready: false,
    turnPlayerId: "",
    turnPlayerList: [],
  },
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setGameState: (state, action: PayloadAction<GameState>) => {
      state.gameState = { ...action.payload };
    },
    clearGameState: (state) => {
      state.gameState = { ...initialState.gameState };
    },
  },
});

export const { setGameState, clearGameState } = playerSlice.actions;
export default playerSlice.reducer;
