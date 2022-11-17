import React from "react";
import { imageList } from "../../images/images";
import { CardData } from "../../models/cards/card";
import "./Card.css";

function Card(props: { cardData: CardData }) {
  return (
    <div key={props.cardData.uniqueKey} className="Card">
      <p className="Card__Title">{props.cardData.name}</p>
      <div className="Card__Image">
        <img src={imageList[props.cardData.id]} alt={props.cardData.name} />
      </div>
      <div className="Card_Description">
        <p>{props.cardData.description}</p>
      </div>
    </div>
  );
}

export default Card;
