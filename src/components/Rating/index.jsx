import React from "react";
import "../../styles/SASS/components/rating.scss";
import etoileRouge from "../../assets/etoile_rouge.webp";
import etoileGrise from "../../assets/etoile_grise.webp";

function Rating(props) {
  const nbEtoilesRouges = parseInt(props.rating);
  const nbEtoilesMax = 5;
  const nbEtoilesGrises = nbEtoilesMax - nbEtoilesRouges;

  return (
    // Création de tableaux en fonction du rating
    <div className="ratings">
      {Array.from(Array(nbEtoilesRouges)).map((_, index) => (
        <img
          src={etoileRouge}
          alt="etoile rouge"
          key={index}
          className="star"
        />
      ))}

      {Array.from(Array(nbEtoilesGrises)).map((_, index) => (
        <img
          src={etoileGrise}
          alt="etoile grise"
          key={index}
          className="star-grises"
        />
      ))}
    </div>
  );
}

export default Rating;
