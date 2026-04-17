import React from "react";

function Accueil() {
  return (
    <div className="container mt-5 text-center">
      <h1>Portail de Gestion Administrative</h1>
      <p>Ministère de la Transition Énergétique et du Développement Durable</p>

      <button
        className="btn btn-danger mt-3"
        onClick={() => alert("khdam")}
      >
        Accéder aux services
      </button>
    </div>
  );
}

export default Accueil;