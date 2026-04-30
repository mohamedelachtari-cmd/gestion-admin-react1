function Login() {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h2 className="text-center text-danger mb-4">Connexion</h2>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Identifiant"
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Mot de passe"
        />

        <button className="btn btn-danger w-100">
          Se connecter
        </button>
      </div>
    </div>
  );
}

export default Login;