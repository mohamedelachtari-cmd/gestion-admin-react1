import "../CSS/Style.css";

function ListeUtilisateurs() {
  return (
    <div>
      <h1 className="Consulter">Liste des utilisateurs</h1>

      <center>
        <table border="1" style={{ width: "80%", borderCollapse: "collapse" }}>
          <tbody>
            <tr style={{ background: "#689FDD", color: "white" }}>
              <th>ID</th>
              <th>Login</th>
              <th>Nom et Prénom</th>
              <th>Email</th>
              <th>Active</th>
              <th>Profil</th>
              <th>Modifier</th>
            </tr>

            <tr>
              <td>1</td>
              <td>admin</td>
              <td>Admin User</td>
              <td>admin@email.com</td>
              <td style={{ textAlign: "center" }}>Oui</td>
              <td style={{ textAlign: "center" }}>Administrateur</td>
              <td style={{ textAlign: "center" }}>
                <button>Modifier</button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>user1</td>
              <td>Utilisateur Test</td>
              <td>user@email.com</td>
              <td style={{ textAlign: "center" }}>Oui</td>
              <td style={{ textAlign: "center" }}>Utilisateur</td>
              <td style={{ textAlign: "center" }}>
                <button>Modifier</button>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default ListeUtilisateurs;