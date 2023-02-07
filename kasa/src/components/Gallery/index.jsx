import Cards from "../Cards";
import "../../styles/SASS/components/gallery.scss";
import data from "../../data/logements.json";

function Gallery() {
  return (
    <ul className="gallery">
      {data.map((logement) => (
        <li key={logement.id}>{<Cards logement={logement} />}</li>
      ))}
    </ul>
  );
}

export default Gallery;
