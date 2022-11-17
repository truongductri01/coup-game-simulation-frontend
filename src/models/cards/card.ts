import { ActionIdEnum } from "../actions/action";

export enum CardIdEnum {
  DUKE = "duke",
  CAPTAIN = "captain",
  ASSASIN = "assasin",
  CONTESSA = "contessa",
  AMBASSADOR = "ambassador",
}

export interface CardDataInterface {
  id: CardIdEnum;
  name: string;
  description: string;
  powers: string[];
}

const dukeCard: CardDataInterface = {
  id: CardIdEnum.DUKE,
  name: "Duke",
  description: "Take 3 coins or block Foreign Aid",
  powers: [ActionIdEnum.TAX, ActionIdEnum.BLOCK_FOREIGN_AID],
};
const captainCard: CardDataInterface = {
  id: CardIdEnum.CAPTAIN,
  name: "Captain",
  description: "Steal 2 coins from other players or block Stealing",
  powers: [ActionIdEnum.STEAL, ActionIdEnum.BLOCK_STEAL],
};
const assasinCard: CardDataInterface = {
  id: CardIdEnum.ASSASIN,
  name: "Assasin",
  description: "Assasinate one player by paying 3 coins",
  powers: [ActionIdEnum.ASSASSINATE],
};
const contessaCard: CardDataInterface = {
  id: CardIdEnum.CONTESSA,
  name: "Contessa",
  description: "Block assasinate from the Assasin",
  powers: [ActionIdEnum.BLOCK_ASSASSINATE],
};
const ambassadorCard: CardDataInterface = {
  id: CardIdEnum.AMBASSADOR,
  name: "Ambassador",
  description: "Exchange cards with the deck and block stealing",
  powers: [ActionIdEnum.EXCHANGE_CARDS, ActionIdEnum.BLOCK_STEAL],
};

// Real Card generator
export type CardData = CardDataInterface & { uniqueKey: number };

export const allowedCards = [
  dukeCard,
  captainCard,
  assasinCard,
  contessaCard,
  ambassadorCard,
];
