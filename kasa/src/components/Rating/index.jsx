import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../../styles/SASS/components/rating.scss";

function Rating() {
  return (
    <div className="ratings">
      <FontAwesomeIcon className="star" icon={faStar} />
      <FontAwesomeIcon className="star" icon={faStar} />
      <FontAwesomeIcon className="star" icon={faStar} />
      <FontAwesomeIcon className="star" icon={faStar} />
      <FontAwesomeIcon className="star" icon={faStar} />
    </div>
  );
}

export default Rating;
