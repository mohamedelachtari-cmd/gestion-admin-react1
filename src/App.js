import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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

      <header className="bg-light text-center p-3">
        <img
          src="https://www.mtedd.gov.ma/images/armoirie-site-web_plan-de-travail-1.png"
          alt="logo"
          style={{ height: "120px" }}
        />
      </header>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">

        <div className="navbar-brand text-white">Mon App</div>

        <div className="d-flex gap-3 ms-auto">

          <Link className="text-white text-decoration-none" to="/">Accueil</Link>
          <Link className="text-white text-decoration-none" to="/about">À propos</Link>
          <Link className="text-white text-decoration-none" to="/profile">Profil</Link>
          <Link className="text-white text-decoration-none" to="/login">Login</Link>

          <Link className="text-white text-decoration-none" to="/ajouter-article">Article</Link>
          <Link className="text-white text-decoration-none" to="/ajouter-acquisition">Acquisition</Link>
          <Link className="text-white text-decoration-none" to="/ajouter-caracteristique">Caractéristique</Link>
          <Link className="text-white text-decoration-none" to="/ajouter-bc-reparation">BC Réparation</Link>
          <Link className="text-white text-decoration-none" to="/ajouter-detail-affectation">Détail Affectation</Link>
          <Link className="text-white text-decoration-none" to="/ajouter-detail-inventaire">Détail Inventaire</Link>
          <Link className="text-white text-decoration-none" to="/ajouter-livraison">Livraison</Link>
          <Link className="text-white text-decoration-none" to="/ajouter-lot">Lot</Link>

        </div>

      </nav>

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

    </BrowserRouter>
  );
}

export default App;