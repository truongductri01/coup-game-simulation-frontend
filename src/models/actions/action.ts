export enum ActionIdEnum {
  INCOME = "income",
  FOREIGN_AID = "foreign_aid",
  COUP = "coup",
  TAX = "tax",
  STEAL = "steal",
  EXCHANGE_CARDS = "exchange_cards",
  ASSASSINATE = "assassinate",
  BLOCK_STEAL = "block_steal",
  BLOCK_ASSASSINATE = "block_assassinate",
  BLOCK_FOREIGN_AID = "block_foreign_aid",
  CHALLENGE = "challenge",
}
export enum ActionTypeEnum {
  EFFECT,
  COUNTER_ACTION,
}
export type ActionData = {
  name: string;
  id: ActionIdEnum;
  isCommon: boolean;
  isBlockable: boolean;
  isChallengable: boolean;
  type: ActionTypeEnum;
  description: string;
};

export const incomeAction: ActionData = {
  name: "Income",
  id: ActionIdEnum.INCOME,
  isCommon: true,
  isBlockable: false,
  isChallengable: false,
  type: ActionTypeEnum.EFFECT,
  description: "Take 1 coin from the bank",
};
export const foreignAidAction: ActionData = {
  name: "ForeignAid",
  id: ActionIdEnum.FOREIGN_AID,
  isCommon: true,
  isBlockable: true,
  isChallengable: false,
  type: ActionTypeEnum.EFFECT,
  description: "Take 2 coins from the bank - can be blocked by Duke",
};
export const coupAction: ActionData = {
  name: "Coup",
  id: ActionIdEnum.COUP,
  isCommon: true,
  isBlockable: false,
  isChallengable: false,
  type: ActionTypeEnum.EFFECT,
  description: "Pay 7 coins to kill a player - cannot be blocked",
};
export const taxAction: ActionData = {
  name: "Tax",
  id: ActionIdEnum.TAX,
  isCommon: false,
  isBlockable: false,
  isChallengable: true,
  type: ActionTypeEnum.EFFECT,
  description: "Take 3 coins from the bank - as Duke",
};
export const assasinateAction: ActionData = {
  name: "Assasinate",
  id: ActionIdEnum.ASSASSINATE,
  isCommon: false,
  isBlockable: true,
  isChallengable: true,
  type: ActionTypeEnum.EFFECT,
  description: "Pay 3 coins to kill a player",
};
export const stealAction: ActionData = {
  name: "Steal",
  id: ActionIdEnum.STEAL,
  isCommon: false,
  isBlockable: true,
  isChallengable: true,
  type: ActionTypeEnum.EFFECT,
  description: "Steal 2 coins from a targeted player",
};
export const exchangeCardsAction: ActionData = {
  name: "Exchange Cards",
  id: ActionIdEnum.EXCHANGE_CARDS,
  isCommon: false,
  isBlockable: false,
  isChallengable: true,
  type: ActionTypeEnum.EFFECT,
  description:
    "Take 2 cards from the Deck, keep the number of cards equal to that before exchanging, return the remaining to the deck",
};

// Counter actions
export const blockStealAction: ActionData = {
  name: "Block Steal",
  id: ActionIdEnum.BLOCK_STEAL,
  isCommon: false,
  isBlockable: false,
  isChallengable: true,
  type: ActionTypeEnum.COUNTER_ACTION,
  description: "Block the stealing",
};
export const blockAssasinateAction: ActionData = {
  name: "Block Assasinate",
  id: ActionIdEnum.BLOCK_ASSASSINATE,
  isCommon: false,
  isBlockable: false,
  isChallengable: true,
  type: ActionTypeEnum.COUNTER_ACTION,
  description: "Block the assasin from killing you",
};
export const blockForeignAidAction: ActionData = {
  name: "Block Foreign Aid",
  id: ActionIdEnum.BLOCK_FOREIGN_AID,
  isCommon: false,
  isBlockable: false,
  isChallengable: true,
  type: ActionTypeEnum.COUNTER_ACTION,
  description: "Block the player from taking foreign aid",
};

// Challenge
export const challengeAction: ActionData = {
  name: "Challenge",
  id: ActionIdEnum.CHALLENGE,
  isCommon: true,
  isBlockable: false,
  isChallengable: false,
  type: ActionTypeEnum.COUNTER_ACTION,
  description: "Challenge action that is challengable",
};

export const actionList: ActionData[] = [
  incomeAction,
  foreignAidAction,
  coupAction,
  taxAction,
  stealAction,
  exchangeCardsAction,
  assasinateAction,

  // Counter action
  // blockStealAction,
  // blockAssasinateAction,
  // blockForeignAidAction,
];
