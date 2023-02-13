import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo_kasa.webp";
import logoResponsive from "../../assets/logo_responsive.webp";
import "../../styles/SASS/layout/header.scss";

function Header() {
  return (
    <header>
      <img className="img-desktop" src={logo} alt="Logo de Kasa" />
      <img className="img-responsive" src={logoResponsive} alt="Logo de Kasa" />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apropos"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
