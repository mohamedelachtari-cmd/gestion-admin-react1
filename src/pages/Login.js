function Login() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card shadow p-4" style={{ width: "350px" }}>
        
        <h3 className="text-center mb-4">Connexion</h3>

        <form>
          <div className="mb-3">
            <label className="form-label">Identifiant</label>
            <input type="text" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Mot de passe</label>
            <input type="password" className="form-control" />
          </div>

          <button className="btn btn-primary w-100">
            Se connecter
          </button>
        </form>

      </div>
    </div>
  );
}

export default Login;