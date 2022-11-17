import React from "react";
import Card from "../components/Card/Card";
import { allowedCards } from "../models/cards/card";
import "./Gallery.css";

function Gallery() {
  return (
    <div className="Gallery">
      <div className="Gallery__Component">
        <strong className="Title">Card List</strong>
        <div className="Card__List">
          {allowedCards.map((card) => (
            <Card
              cardData={{
                ...card,
                uniqueKey: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
