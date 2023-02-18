import "../../styles/SASS/components/collapse.scss";
import { useState } from "react";
import chevronHaut from "../../assets/chevron_haut.webp";
import chevronBas from "../../assets/chevron_bas.webp";

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);
  const titre = props.titre;
  const contenu = props.contenu;

  return isOpen ? (
    // Etat ouvert
    <div className="container container--logement">
      <div className="barre barre--logement">
        <p className="titre-collapse titre-collapse--logement">{titre}</p>
        <button
          className="button-collapse button-collapse--logement"
          onClick={() => setIsOpen(false)}
        >
          <img src={chevronHaut} alt="Chevron haut" />
        </button>
      </div>
      <div className="bloc-contenu bloc-contenu--logement">
        <div className="text-contenu text-contenu--logement">{contenu}</div>
      </div>
    </div>
  ) : (
    // Etat fermé
    <div className="container container--logement">
      <div className="barre barre--logement">
        <p className="titre-collapse titre-collapse--logement">{titre}</p>
        <button
          className="button-collapse button-collapse--logement"
          onClick={() => setIsOpen(true)}
        >
          <img src={chevronBas} alt="Chevron bas" />
        </button>
      </div>
    </div>
  );
}

export default Collapse;
