import React from "react";
import Collapse from "../../components/Collapse";
import Banner from "../../components/Banner";
import image from "../../assets/image_about.webp";
import "../../styles/SASS/components/banner.scss";
import "../../styles/SASS/components/collapse.scss";

const collapseFiabilite = "Fiabilité";
const collapseRespect = "Respect";
const collapseService = "Service";
const collapseSecurite = "Sécurité";
const fiabiliteContenu =
  "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
const respectContenu =
  "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
const serviceContenu =
  "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
const securiteContenu =
  "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

function Apropos() {
  const altImageHome = "Photographie d'un paysage de montagnes";

  return (
    <div className="bloc-apropos">
      <Banner imgSrc={image} altTitreBanner={altImageHome} />
      <div className="bloc">
        <Collapse titre={collapseFiabilite} contenu={fiabiliteContenu} />
        <Collapse titre={collapseRespect} contenu={respectContenu} />
        <Collapse titre={collapseService} contenu={serviceContenu} />
        <Collapse titre={collapseSecurite} contenu={securiteContenu} />
      </div>
    </div>
  );
}

export default Apropos;
