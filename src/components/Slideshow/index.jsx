import React from "react";
import { useState } from "react";
import "../../styles/SASS/components/slideshow.scss";
import chevronGauche from "../../assets/chevron_gauche.webp";
import chevronDroit from "../../assets/chevron_droite.webp";

function Slideshow(props) {
  let pictures = props.pictures;
  const [index, setIndex] = useState(0);
  const nbImages = pictures.length;

  return (
    <div
      className="slideshow"
      style={{ backgroundImage: `url("${pictures[index]}") ` }}
    >
      <div className="slideshow__container-chevrons">
        {nbImages > 1 && (
          <img
            className="chevron"
            src={chevronGauche}
            alt="chevron gauche"
            onClick={() =>
              index > 0 ? setIndex(index - 1) : setIndex(nbImages - 1)
            }
          />
        )}
        {nbImages > 1 && (
          <img
            className="chevron"
            src={chevronDroit}
            alt="chevron droit"
            onClick={() =>
              index < nbImages - 1 ? setIndex(index + 1) : setIndex(0)
            }
          />
        )}
      </div>
      <div className="slideshow__container-number">
        {nbImages > 1 && (
          <p>
            {index + 1}/{nbImages}
          </p>
        )}
      </div>
    </div>
  );
}

export default Slideshow;
