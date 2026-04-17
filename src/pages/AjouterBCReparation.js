import React from "react";

function AjouterBCReparation() {
  return (
    <div className="container mt-4">
      <h1>Ajouter BC Réparation</h1>

      <input
        type="text"
        placeholder="Numéro BC"
        className="form-control mb-3"
      />

      <input
        type="text"
        placeholder="Fournisseur"
        className="form-control mb-3"
      />

      <button className="btn btn-primary">
        Ajouter
      </button>
    </div>
  );
}

export default AjouterBCReparation