import React from "react";

import { useParams } from "react-router-dom";
import Tag from "../../components/Tag";

function Logement() {
  const { id } = useParams();

  return (
    <div>
      <h1>Coucou</h1>
      <Tag />
    </div>
  );
}

export default Logement;
