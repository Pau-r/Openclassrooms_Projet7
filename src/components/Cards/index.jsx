import React from "react";
import { Link } from "react-router-dom";
import "../../styles/SASS/components/cards.scss";

function Cards(props) {
  const logement = props.logement;
  let altImage = props.altImage;

  return (
    <Link to={`/logement/${logement.id}`}>
      <div className="cards">
        <img src={logement.cover} alt={altImage} />
        <h2 key={logement.id}>{logement.title}</h2>
      </div>
    </Link>
  );
}

export default Cards;
