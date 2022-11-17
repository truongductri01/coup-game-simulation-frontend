import { ActionData, ActionIdEnum } from "../models/actions/action";
import { getActionExecutionByActionId } from "../models/actions/actionExecution";
import { CardData } from "../models/cards/card";
import { GameState } from "../models/gameState/gameState";
import { PlayerData } from "../models/player/player";
import { setGameState } from "../redux/gameStateReducer/gameStateReducer";
import { setPlayerData } from "../redux/playerReducer/playerReducer";
import { getStompClient, socketConstants } from "./socketConfig";

export const playerJoinGame = (playerData: PlayerData) => {
  let stompClient = getStompClient();
  stompClient.send(
    socketConstants.messageMapping.playerJoin,
    {},
    JSON.stringify(playerData)
  );
};
export const playerStateChange = (playerData: PlayerData) => {
  let stompClient = getStompClient();
  stompClient.send(
    socketConstants.messageMapping.playerStateChange,
    {},
    JSON.stringify(playerData)
  );
};
export const sendMessageToGameRoom = (message: string) => {
  let stompClient = getStompClient();
  stompClient.send(socketConstants.messageMapping.generalMessage, {}, message);
};
export const setGameInitialData = (gameInitialData: {
  playerTurnList: string[];
  cardQuantityData: (CardData & { qty: number })[];
}) => {
  let stompClient = getStompClient();
  stompClient.send(
    socketConstants.messageMapping.setGameData,
    {},
    JSON.stringify(gameInitialData)
  );
};

// socket connect and subscriber
const onGameStateReceived = (payload: { body: string }, dispatch: Function) => {
  let payloadData = JSON.parse(payload?.body) as GameState & {
    player: PlayerData;
  };
  dispatch(
    setGameState({
      winnerId: payloadData.winnerId,
      opponents: payloadData.opponents,
      ready: payloadData.ready,
      turnPlayerId: payloadData.turnPlayerId,
      turnPlayerList: payloadData.turnPlayerList,
    })
  );
  dispatch(setPlayerData(payloadData.player));
  console.log("Received gameState and update it >>>");
};
const onPublicMessageReceived = (payload: any) => {
  let payloadData = JSON.parse(payload?.body);
  console.log("Received Message >>>", payloadData);
  alert(payloadData.message);
};

// action channel and subscriber
export const actionComplete = (playerId: string) => {
  let stompClient = getStompClient();
  stompClient.send(socketConstants.messageMapping.actionComplete, {}, playerId);
};
export const startAction = (actionData: ActionData) => {};
const setUpAction = (actionId: ActionIdEnum, executePlayer: PlayerData) => {
  getActionExecutionByActionId(actionId, executePlayer).setUp();
};
const blockAction = (actionId: ActionIdEnum, executePlayer: PlayerData) => {
  getActionExecutionByActionId(actionId, executePlayer).block();
};
const challengeAction = (actionId: ActionIdEnum, executePlayer: PlayerData) => {
  getActionExecutionByActionId(actionId, executePlayer).challenge();
};
const executeAction = (actionId: ActionIdEnum, executePlayer: PlayerData) => {
  getActionExecutionByActionId(actionId, executePlayer).execute();
};

// connect and subcribe
const onConnected = (mainPlayerData: PlayerData, dispatch: Function) => {
  let stompClient = getStompClient();
  console.log("Connected >>>");
  stompClient.subscribe(
    socketConstants.subscribers.gameRoom,
    onPublicMessageReceived
  );
  stompClient.subscribe(
    socketConstants.subscribers.userPrivateGameState(mainPlayerData.id),
    (payload: { body: string }) => onGameStateReceived(payload, dispatch)
  );
};
export const connectSocket = (
  mainPlayerData: PlayerData,
  dispatch: Function
) => {
  let stompClient = getStompClient();
  if (!stompClient.connected) {
    stompClient.connect(
      {},
      () => onConnected(mainPlayerData, dispatch),
      () => {}
    );
  }
};
