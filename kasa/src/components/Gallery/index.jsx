import Cards from "../Cards";
import "../../styles/SASS/components/gallery.scss";
import data from "../../data/logements.json";

function Gallery() {
  const altImageGallery = "Photographie d'un intérieur d'appartement";
  return (
    <ul className="gallery">
      {data.map((logement) => (
        <li key={logement.id}>
          {<Cards logement={logement} altImage={altImageGallery} />}
        </li>
      ))}
    </ul>
  );
}

export default Gallery;
