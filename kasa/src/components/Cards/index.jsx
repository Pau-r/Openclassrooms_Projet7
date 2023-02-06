import React from "react";
import { Link } from "react-router-dom";
import "../../styles/SASS/components/cards.scss";

function Cards(props) {
  const logement = props.logement;

  return (
    <Link to={`/logement/${logement.id}`}>
      <div className="cards">
        <img src={logement.cover} alt="" />
        <h2 key={logement.id}>{logement.title}</h2>
      </div>
    </Link>
  );
}

export default Cards;
