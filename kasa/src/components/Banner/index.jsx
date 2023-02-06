import React from "react";
import "../../styles/SASS/components/banner.scss";

function Banner(props) {
  let imgSrc = props.imgSrc;
  let titreHome = props.titreBanner;
  let altImage = props.altImage;

  return (
    <div className="banner">
      <img className="banner__image" src={imgSrc} alt={altImage} />
      <h1>{titreHome}</h1>
    </div>
  );
}

export default Banner;
