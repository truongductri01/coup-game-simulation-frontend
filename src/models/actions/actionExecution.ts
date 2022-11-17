import { getStompClient } from "../../socket/socketConfig";
import {
  playerStateChange,
  sendMessageToGameRoom,
} from "../../socket/socketHelpers";
import { PlayerData } from "../player/player";
import { increasePlayerCoins } from "../player/playerHelpers";
import { ActionData, ActionIdEnum } from "./action";

export type ActionExecutionType = {
  start(): void;
  setUp(): void;
  block(): boolean;
  challenge(): boolean;
  execute(): void;
};
export interface GetActionExecutionType {
  (executePlayer: PlayerData): ActionExecutionType;
}

const defaultExecution: ActionExecutionType = {
  start: () => {},
  setUp: () => {},
  block: () => {
    return false;
  },
  challenge: () => {
    return false;
  },
  execute: () => {},
};
const getIncomeExecution = (executePlayer: PlayerData): ActionExecutionType => {
  return {
    ...defaultExecution,
    execute: () => {
      playerStateChange(increasePlayerCoins(executePlayer, 1));
      sendMessageToGameRoom(executePlayer.name + " takes 1 coin as Income");
    },
  };
};
const getForeignAidExecution = (
  executePlayer: PlayerData
): ActionExecutionType => {
  return {
    ...defaultExecution,
    block: () => {
      let blockOption = prompt("Do you want to block this player (Y/N)?");
      while (blockOption !== "Y" && blockOption !== "N") {
        blockOption = prompt(
          "Invalid option. Do you want to block this player (Y/N)?"
        );
      }
      if (blockOption === "Y") {
        return true;
      } else {
        return false;
      }
    },
    execute: () => {
      playerStateChange(increasePlayerCoins(executePlayer, 2));
      sendMessageToGameRoom(
        executePlayer.name + " takes 2 coin as Foreign Aid"
      );
    },
  };
};
const getCoupExecution = (executePlayer: PlayerData): ActionExecutionType => {
  return {
    ...defaultExecution,
    setUp: () => {
      // let userId = alert("Choose a player to coup");
    },
    execute() {
      console.log("Executing Coup");
      getStompClient().send("/general/message", {}, "I couped him");
    },
  };
};
const getTaxExecution = (executePlayer: PlayerData): ActionExecutionType => {
  return {
    ...defaultExecution,
    execute: () => {
      playerStateChange(increasePlayerCoins(executePlayer, 3));
      sendMessageToGameRoom(executePlayer.name + " takes 3 coin as Tax");
    },
  };
};

export const getActionExecution = (
  actionData: ActionData,
  executePlayer: PlayerData
): ActionExecutionType => {
  if (actionData.id === ActionIdEnum.INCOME) {
    return getIncomeExecution(executePlayer);
  } else if (actionData.id === ActionIdEnum.FOREIGN_AID) {
    return getForeignAidExecution(executePlayer);
  } else if (actionData.id === ActionIdEnum.COUP) {
    return getCoupExecution(executePlayer);
  } else if (actionData.id === ActionIdEnum.TAX) {
    return getTaxExecution(executePlayer);
  }

  return defaultExecution;
};

export const getActionExecutionByActionId = (
  actionDataId: ActionIdEnum,
  executePlayer: PlayerData
): ActionExecutionType => {
  if (actionDataId === ActionIdEnum.INCOME) {
    return getIncomeExecution(executePlayer);
  } else if (actionDataId === ActionIdEnum.FOREIGN_AID) {
    return getForeignAidExecution(executePlayer);
  } else if (actionDataId === ActionIdEnum.COUP) {
    return getCoupExecution(executePlayer);
  } else if (actionDataId === ActionIdEnum.TAX) {
    return getTaxExecution(executePlayer);
  }

  return defaultExecution;
};
