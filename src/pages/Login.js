import React from "react";

function Login() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-5">

          <div className="card shadow border-0">
            <div className="card-body p-4">

              <h2 className="text-center text-danger mb-4">
                Connexion
              </h2>

              <div className="mb-3">
                <label className="form-label">Identifiant</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Entrez votre identifiant"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Mot de passe</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Entrez votre mot de passe"
                />
              </div>

              <button className="btn btn-danger w-100">
                Se connecter
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;