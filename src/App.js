import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/* Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/* CSS */
import "./CSS/Style.css";

/* Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

import AjouterArticle from "./pages/AjouterArticle";
import AjouterAcquisition from "./pages/AjouterAcquisition";
import AjouterCaracteristique from "./pages/AjouterCaracteristique";
import AjouterBCReparation from "./pages/AjouterBCReparation";
import AjouterDetailAffectation from "./pages/AjouterDetailAffectation";
import AjouterDetailInventaire from "./pages/AjouterDetailInventaire";
import AjouterLivraison from "./pages/AjouterLivraison";
import AjouterLot from "./pages/AjouterLot";

function App() {
  return (
    <BrowserRouter>
      {/* HEADER */}
      <header className="bg-white text-center p-3 shadow-sm">
        <img
          src="https://www.mtedd.gov.ma/images/armoirie-site-web_plan-de-travail-1.png"
          alt="logo"
          style={{ height: "120px", maxWidth: "100%" }}
        />
      </header>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger px-3 py-2 shadow-sm">
        <div className="container-fluid">

          <Link className="navbar-brand text-white fw-bold" to="/">
            Portail Admin
          </Link>

          <div className="d-flex gap-3 ms-auto align-items-center flex-wrap">

            <Link className="text-white text-decoration-none nav-link-custom" to="/">
              Accueil
            </Link>

            <Link className="text-white text-decoration-none nav-link-custom" to="/about">
              À propos
            </Link>

            <Link className="text-white text-decoration-none nav-link-custom" to="/profile">
              Profil
            </Link>

            <Link className="text-white text-decoration-none nav-link-custom" to="/login">
              Login
            </Link>

            {/* ARTICLE */}
            <div className="dropdown">
              <span
                className="text-white dropdown-toggle nav-link-custom"
                data-bs-toggle="dropdown"
                style={{ cursor: "pointer" }}
              >
                Article
              </span>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/ajouter-article">
                    Ajouter Article
                  </Link>
                </li>
              </ul>
            </div>

            {/* ACQUISITION */}
            <div className="dropdown">
              <span
                className="text-white dropdown-toggle nav-link-custom"
                data-bs-toggle="dropdown"
                style={{ cursor: "pointer" }}
              >
                Acquisition
              </span>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/ajouter-acquisition">
                    Ajouter Acquisition
                  </Link>
                </li>
              </ul>
            </div>

            {/* acquisition */}
            <div className="dropdown">
              <span
                className="text-white dropdown-toggle nav-link-custom"
                data-bs-toggle="dropdown"
                style={{ cursor: "pointer" }}
              >
                acquisition
              </span>

              <ul className="dropdown-menu">

                <li>
                  <Link className="dropdown-item" to="/ajouter-caracteristique">
                    Caractéristique
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/ajouter-bc-reparation">
                    BC Réparation
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/ajouter-detail-affectation">
                    Détail Affectation
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/ajouter-detail-inventaire">
                    Détail Inventaire
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/ajouter-livraison">
                    Livraison
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/ajouter-lot">
                    Lot
                  </Link>
                </li>

              </ul>
            </div>

          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />

          <Route path="/ajouter-article" element={<AjouterArticle />} />
          <Route path="/ajouter-acquisition" element={<AjouterAcquisition />} />
          <Route path="/ajouter-caracteristique" element={<AjouterCaracteristique />} />
          <Route path="/ajouter-bc-reparation" element={<AjouterBCReparation />} />
          <Route path="/ajouter-detail-affectation" element={<AjouterDetailAffectation />} />
          <Route path="/ajouter-detail-inventaire" element={<AjouterDetailInventaire />} />
          <Route path="/ajouter-livraison" element={<AjouterLivraison />} />
          <Route path="/ajouter-lot" element={<AjouterLot />} />
        </Routes>
      </div>

      {/* FOOTER */}
      <footer className="bg-light text-center p-3 mt-4 border-top">
        © 2026 Ministère de la Transition Énergétique
      </footer>
    </BrowserRouter>
  );
}

export default App;