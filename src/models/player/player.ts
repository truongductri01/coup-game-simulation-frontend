import { CardData } from "../cards/card";

export interface PlayerData {
  [key: string]: any;
  hand: CardData[];
  coins: number;
  name: string;
  id: string;
  alive: boolean;
  active: boolean;
  admin: boolean;
}
export interface OpponentData {
  coins: number;
  name: string;
  id: string;
  handSize: number;
  active: boolean;
  alive: boolean;
}

export const playerMockData1: PlayerData = {
  hand: [],
  coins: 2,
  name: "Tri Truong",
  id: "tri_truong",
  active: true,
  alive: true,
  admin: false,
};

export const playerMockData2: PlayerData = {
  hand: [],
  coins: 2,
  name: "Tung Tran",
  id: "tung_tran",
  active: true,
  alive: true,
  admin: false,
};

let count = 0;
const generateMockPlayerData = (playerName: string): PlayerData => {
  let nameArr = playerName.split(" ");
  let id = nameArr.join("_") + "_" + count;
  count++;
  return {
    hand: [],
    coins: 2,
    name: playerName,
    id,
    active: true,
    alive: true,
    admin: false,
  };
};

export const mockPlayerList: PlayerData[] = [
  generateMockPlayerData("Tri Truong"),
  generateMockPlayerData("Tung Tran"),
  generateMockPlayerData("Nam Dao"),
  generateMockPlayerData("Khoi Thai"),
  generateMockPlayerData("Van Thanh"),
  generateMockPlayerData("Hieu Dang"),
  generateMockPlayerData("Nguyen Hanh"),
  generateMockPlayerData("Huy Pham"),
  generateMockPlayerData("Trung Nguyen"),
];
