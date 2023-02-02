import React from "react";
import "../../styles/SASS/layout/error.scss";

function Error() {
  return (
    <article>
      <div className="bloc-text">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <a href="/">Retourner sur la page d’accueil</a>
    </article>
  );
}

export default Error;
