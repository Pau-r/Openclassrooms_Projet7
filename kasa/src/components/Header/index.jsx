import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_kasa.webp";
import logoResponsive from "../../assets/logo_responsive.webp";
import "../../styles/SASS/components/header.scss";

function Header() {
  return (
    <header>
      <img className="img-desktop" src={logo} alt="Logo de Kasa" />
      <img className="img-responsive" src={logoResponsive} alt="Logo de Kasa" />
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/apropos">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
