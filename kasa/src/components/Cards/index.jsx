import React from "react";
import "../../styles/SASS/components/cards.scss";

function Cards(props) {
  let logement = props.logement;

  return (
    <a href="/">
      <div className="cards">
        <img src={logement.cover} alt="" />
        <h2 key={logement.id}>{logement.title}</h2>
      </div>
    </a>
  );
}

export default Cards;
