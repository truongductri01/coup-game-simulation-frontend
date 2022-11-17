import SockJS from "sockjs-client";
import StompJS from "stompjs";

const privateSocketConstants = {
  url: " http://10.250.24.115:8080/coup-socket",
  destPrefixes: {
    general: "/general",
    gameState: "/game-state",
    actions: "/actions",
  },
};
export const socketConstants = {
  messageMapping: {
    // game state
    playerJoin: privateSocketConstants.destPrefixes.gameState + "/player-join",
    playerStateChange:
      privateSocketConstants.destPrefixes.gameState + "/player-state-change",
    getGameState:
      privateSocketConstants.destPrefixes.gameState + "/get-game-state",
    setGameData:
      privateSocketConstants.destPrefixes.gameState + "/set-game-data",

    // general message:
    generalMessage: privateSocketConstants.destPrefixes.general + "/message",

    // actions
    actionComplete:
      privateSocketConstants.destPrefixes.actions + "/action-complete",
  },
  subscribers: {
    gameRoom: "/game-room",
    userPrivateGameState: (userId: string) => "/user/" + userId + "/game-state",
  },
};

let sock;
let stompClient: StompJS.Client;
const createNewStompClient = (): StompJS.Client => {
  sock = new SockJS(privateSocketConstants.url);
  stompClient = StompJS.over(sock);
  return stompClient;
};
export const getStompClient = (): StompJS.Client => {
  if (stompClient) {
    console.log("Client already exist >>>");
    return stompClient;
  } else {
    console.log("Create new stomp client");
    return createNewStompClient();
  }
};
