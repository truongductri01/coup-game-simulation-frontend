import { CardIdEnum } from "../models/cards/card";

const Ambassador = require("./Ambassador.png");
const Duke = require("./Duke.png");
const Captain = require("./Captain.png");
const Assasin = require("./Assasin.png");
const Contessa = require("./Contessa.png");

export const imageList: { [key in CardIdEnum]: any } = {
  duke: Duke,
  ambassador: Ambassador,
  captain: Captain,
  assasin: Assasin,
  contessa: Contessa,
};
