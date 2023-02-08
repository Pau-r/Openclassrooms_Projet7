import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import "../../styles/SASS/components/slideshow.scss";

function Slideshow(props) {
  let pictures = props.pictures;
  const [index, setIndex] = useState(0);
  const nbImages = pictures.length;

  return (
    <div className="slideshow">
      <div className="slideshow__container-chevrons">
        <FontAwesomeIcon
          onClick={() =>
            index > 0 ? setIndex(index - 1) : setIndex(nbImages - 1)
          }
          className="chevron"
          icon={faChevronLeft}
        />
        <FontAwesomeIcon
          onClick={() =>
            index < nbImages - 1 ? setIndex(index + 1) : setIndex(0)
          }
          className="chevron"
          icon={faChevronRight}
        />
      </div>
      <div className="slideshow__container-image">
        <img
          className="images-slide"
          key={index}
          src={pictures[index]}
          alt=""
        />
      </div>
      <div className="slideshow__container-number">
        <p>
          {index + 1}/{nbImages}
        </p>
      </div>
    </div>
  );
}

export default Slideshow;
