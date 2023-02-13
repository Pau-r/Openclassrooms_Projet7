import data from "../../data/logements.json";
import { Navigate, useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import Tag from "../../components/Tag";
import Collapse from "../../components/Collapse";
import Rating from "../../components/Rating";
import "../../styles/SASS/layout/logement.scss";

function Logement() {
  const { id } = useParams();
  const logement = data.find((logement) => logement.id === id);

  if (!logement) {
    return <Navigate to="/404" replace={true} />;
  } else {
    const titreDescription = "Description";
    const titreEquiement = "Equipement";
    const altImageHote = "Portrait de l'hôte";
    const altImageSlideshow = "Photographie d'un intérieur d'appartement";
    const equipments = (
      <ul>
        {logement.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
    );

    return (
      <main>
        <Slideshow
          key={id}
          pictures={logement.pictures}
          altImage={altImageSlideshow}
        />
        <div>
          <section className="container">
            <article className="container__titres">
              <h1>{logement.title}</h1>
              <h2>{logement.location}</h2>
              <div className="tags">
                {logement.tags.map((tag, index) => (
                  <Tag key={index} tag={tag} />
                ))}
              </div>
            </article>
            <article className="container__hote">
              <div className="info-hote">
                <p>{logement.host.name}</p>
                <img
                  className="image-hote"
                  src={logement.host.picture}
                  alt={altImageHote}
                />
              </div>
              <Rating rating={logement.rating} />
            </article>
          </section>
        </div>

        <section className="container-collapse">
          <Collapse titre={titreDescription} contenu={logement.description} />
          <Collapse titre={titreEquiement} contenu={equipments} />
        </section>
      </main>
    );
  }
}

export default Logement;
