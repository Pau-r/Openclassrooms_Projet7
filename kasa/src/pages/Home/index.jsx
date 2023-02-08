import React from "react";
import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";

import image from "../../assets/image_home.webp";

function Home() {
  let titreHome = "Chez vous, partout et ailleurs";
  let altImage = "Photographie d'un paysage de falaise";

  return (
    <div className="bloc-home">
      <Banner
        imgSrc={image}
        titreBanner={titreHome}
        altTitreBanner={altImage}
      />
      <Gallery />
    </div>
  );
}

export default Home;
