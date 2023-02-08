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
    <div className="container">
      <div className="barre">
        <h2>{titre}</h2>
        <button onClick={() => setIsOpen(false)}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </div>
      <div className="bloc-contenu">
        <p>{contenu}</p>
      </div>
    </div>
  ) : (
    // Etat fermé
    <div className="container">
      <div className="barre">
        <h2>{titre}</h2>
        <button onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
    </div>
  );
}

export default Collapse;
