import "../../styles/SASS/components/collapse.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={faChevronUp} />
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
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
    </div>
  );
}

export default Collapse;
