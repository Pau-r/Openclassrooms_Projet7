import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

//import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Home />
      <Footer />
    </div>
  </React.StrictMode>
);
