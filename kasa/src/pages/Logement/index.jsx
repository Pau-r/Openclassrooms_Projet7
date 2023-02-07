import React from "react";
import data from "../../data/logements.json";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import Tag from "../../components/Tag";
import Collapse from "../../components/Collapse";
import "../../styles/SASS/layout/logement.scss";

function Logement() {
  const { id } = useParams();
  const logement = data.find((logement) => logement.id === id);

  let titreDescription = "Description";
  let titreEquiement = "Equipement";

  return (
    <main>
      <Slideshow key={id} pictures={logement.pictures} />
      <div>
        <section className="container-titres">
          <article>
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
          </article>
          {logement.tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </section>

        <section className="container-hotes">
          <p></p>
        </section>
      </div>

      <section className="container-collapse">
        <Collapse titre={titreDescription} contenu={logement.description} />
        <Collapse titre={titreEquiement} contenu={logement.equipments} />
      </section>
    </main>
  );
}

export default Logement;
