import "../../styles/SASS/components/large_collapse.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function LargeCollapse(props) {
  const [isOpen, setIsOpen] = useState(false);
  const titre = props.titre;
  const contenu = props.contenu;

  return isOpen ? (
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
    <div className="container">
      <div className="barre">
        <h2>{titre}</h2>
        <button className="button" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
    </div>
  );
}

export default LargeCollapse;
