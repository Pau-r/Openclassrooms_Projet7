import React from "react";
import "../../styles/SASS/components/banner.scss";
import imageHome from "../../assets/image_home.webp";

function Banner() {
  return (
    <div className="banner">
      <img
        className="banner__image"
        src={imageHome}
        alt="Photographie d'un paysage de falaise"
      />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
