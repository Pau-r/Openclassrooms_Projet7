import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src="../assets/logo_kasa.webp" alt="Logo de Kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="About">A propos</Link>
      </nav>
    </header>
  );
}

export default Header;
