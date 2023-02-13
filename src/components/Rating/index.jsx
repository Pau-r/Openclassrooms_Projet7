import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../../styles/SASS/components/rating.scss";

function Rating(props) {
  const nbEtoilesRouges = parseInt(props.rating);
  const nbEtoilesMax = 5;
  const nbEtoilesGrises = nbEtoilesMax - nbEtoilesRouges;

  return (
    // Création de tableaux en fonction du rating
    <div className="ratings">
      {Array.from(Array(nbEtoilesRouges)).map((_, index) => (
        <FontAwesomeIcon key={index} className="star" icon={faStar} />
      ))}

      {Array.from(Array(nbEtoilesGrises)).map((_, index) => (
        <FontAwesomeIcon key={index} className="star-grises" icon={faStar} />
      ))}
    </div>
  );
}

export default Rating;
