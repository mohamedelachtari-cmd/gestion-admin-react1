import React from "react";
import { Outlet, Link } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      {/* Header */}
      <header className="bg-light text-center p-4">
        <h2>Logo du ministère</h2>
      </header>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container">
          <Link className="navbar-brand" to="/">Accueil</Link>
          <Link className="nav-link text-white" to="/article">Article</Link>
          <Link className="nav-link text-white" to="/login">Login</Link>
        </div>
      </nav>

      {/* Contenu */}
      <main className="container p-5">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-light text-center p-3">
        © 2026 Ministère
      </footer>
    </div>
  );
}

export default MainLayout;