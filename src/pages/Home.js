import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-3">Portail de Gestion Administrative</h1>

      <p className="mb-4">
        Ministère de la Transition Énergétique et du Développement Durable
      </p>

      <button
        className="btn btn-danger px-4 py-2"
        onClick={() => navigate("/Article")}
      >
        Accéder aux services
      </button>
    </div>
  );
}

export default Home;