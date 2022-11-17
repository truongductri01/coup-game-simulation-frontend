import { OpponentData } from "../player/player";

export interface GameState {
  winnerId: string;
  //   player: PlayerData; // no need to keep track of this!
  opponents: OpponentData[];
  turnPlayerId: string;
  ready: boolean;
  turnPlayerList: string[];
}
