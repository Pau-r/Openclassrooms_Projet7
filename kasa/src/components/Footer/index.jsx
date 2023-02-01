import React from "react";
import logo from "../../assets/logo_blanc.webp";
import "../../styles/SASS/components/footer.scss";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo de Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
