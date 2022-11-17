import { CardData, CardIdEnum } from "../cards/card";
import { PlayerData } from "./player";

export const increasePlayerCoins = (
  playerData: PlayerData,
  increaseAmount: number
): PlayerData => {
  return { ...playerData, coins: playerData.coins + increaseAmount };
};
export const decreasePlayerCoins = (
  playerData: PlayerData,
  decreaseAmount: number
): PlayerData => {
  if (playerData.coins >= decreaseAmount) {
    return { ...playerData, coins: playerData.coins - decreaseAmount };
  }
  return playerData;
};
export const removePlayerCardById = (
  playerData: PlayerData,
  cardId: CardIdEnum
): PlayerData => {
  let newHand: CardData[] = [];

  // find index to be removed
  let removeIdx = -1;
  for (let i = 0; i < playerData.hand.length; i++) {
    if (playerData.hand[i].id === cardId) {
      removeIdx = i;
      break;
    }
  }

  // remove the card
  for (let i = 0; i < playerData.hand.length; i++) {
    if (i !== removeIdx) {
      newHand.push(playerData.hand[i]);
    }
  }
  return {
    ...playerData,
    hand: newHand,
  };
};
export const replacePlayerAllCard = (
  playerData: PlayerData,
  newHand: CardData[]
): PlayerData => {
  return { ...playerData, hand: newHand };
};
