import React from "react";
import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      {/* Header */}
      <header className="bg-light text-center p-3">
        <h3>logo du ministère</h3>
      </header>

      {/* Navbar */}
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <div className="container">
          <span className="navbar-brand text-white">Mon App</span>

          <div className="d-flex gap-3">
            <Link className="text-white text-decoration-none" to="/">Accueil</Link>
            <Link className="text-white text-decoration-none" to="/about">À propos</Link>
            <Link className="text-white text-decoration-none" to="/profile">Profil</Link>
            <Link className="text-white text-decoration-none" to="/login">Login</Link>
            <Link className="text-white text-decoration-none" to="/ajouter-article">Article</Link>
            <Link className="text-white text-decoration-none" to="/ajouter-acquisition">Acquisition</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mt-4">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="bg-light text-center p-3 mt-4">
        Footer
      </footer>
    </div>
  );
}

export default MainLayout;