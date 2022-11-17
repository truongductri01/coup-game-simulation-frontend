import { configureStore } from "@reduxjs/toolkit";
import gameStateReducer from "./gameStateReducer/gameStateReducer";
import playerReducer from "./playerReducer/playerReducer";

export const store = configureStore({
  reducer: {
    playerReducer: playerReducer,
    gameStateReducer: gameStateReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
