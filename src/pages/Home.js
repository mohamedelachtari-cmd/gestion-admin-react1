import React from "react";

function Home() {
  return (
    <div className="container mt-5">

      <div className="text-center p-5 shadow rounded bg-white">
        <h1 className="fw-bold text-danger">
          Portail de Gestion Administrative
        </h1>

        <p className="text-muted mt-3">
          Ministère de la Transition Énergétique et du Développement Durable
        </p>

        <button className="btn btn-danger mt-3 px-4">
          Accéder aux services
        </button>
      </div>

      {/* statistiques */}
      <div className="row mt-5 text-center">

        <div className="col-md-4">
          <div className="card shadow p-4">
            <h2 className="text-danger">120</h2>
            <p>Articles enregistrés</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-4">
            <h2 className="text-danger">45</h2>
            <p>Acquisitions</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-4">
            <h2 className="text-danger">18</h2>
            <p>Utilisateurs actifs</p>
          </div>
        </div>

      </div>

      {/* services */}
      <div className="mt-5 p-4 bg-white shadow rounded">
        <h3 className="text-danger mb-4">Services disponibles</h3>

        <ul>
          <li>Gestion des Articles</li>
          <li>Gestion des Acquisitions</li>
          <li>Gestion des Lots</li>
          <li>Suivi des Affectations</li>
          <li>Consultation des rapports</li>
        </ul>
      </div>

      {/* footer */}
      <div className="text-center mt-5 text-muted">
        © 2026 Ministère - Tous droits réservés
      </div>

    </div>
  );
}

export default Home;