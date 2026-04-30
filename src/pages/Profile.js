import React from "react";

function Profile() {
  return (
    <div className="container mt-4">
      <div className="card shadow border-0">
        <div className="card-header bg-danger text-white text-center py-3">
          <h2 className="mb-0">Espace Utilisateur</h2>
        </div>

        <div className="card-body text-center p-5">

          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
            alt="user"
            style={{ width: "100px", marginBottom: "20px" }}
          />

          <h3 className="text-danger fw-bold">Profil Administratif</h3>
          <p className="text-muted mb-4">
            Ministère de la Transition Énergétique et du Développement Durable
          </p>

          <div className="row text-start mt-4">

            <div className="col-md-6 mb-3">
              <strong>Service :</strong><br />
              Gestion Administrative
            </div>

            <div className="col-md-6 mb-3">
              <strong>Statut :</strong><br />
              Utilisateur Actif
            </div>

            <div className="col-md-6 mb-3">
              <strong>Accès :</strong><br />
              Plateforme Interne
            </div>

            <div className="col-md-6 mb-3">
              <strong>Localisation :</strong><br />
              Rabat - Maroc
            </div>

          </div>

          <button className="btn btn-danger px-4 mt-3">
            Modifier le Profil
          </button>

        </div>
      </div>
    </div>
  );
}

export default Profile;