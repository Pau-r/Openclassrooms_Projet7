import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../../pages/Layout";
import Home from "../../pages/Home";
import Apropos from "../../pages/Apropos";
import Error from "../Error";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
