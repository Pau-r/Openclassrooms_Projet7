import React from "react";
import Home from "../../pages/Home";
//import About from "../../pages/A_propos";
//import Fiche from "../../pages/Fiche_Logement";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
