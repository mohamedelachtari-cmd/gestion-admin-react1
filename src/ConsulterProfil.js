import "../CSS/Style.css";

function ListeProfils() {
  return (
    <div>
      <h1 className="Consulter">Liste des profils</h1>

      <center>
        <table border="1" style={{ width: "70%", borderCollapse: "collapse" }}>
          <tbody>
            <tr style={{ background: "#689FDD", color: "white" }}>
              <th>ID</th>
              <th>Profil</th>
              <th>Nombre des utilisateurs</th>
              <th>Modifier</th>
            </tr>

            <tr>
              <td>1</td>
              <td style={{ textAlign: "center" }}>Administrateur</td>
              <td style={{ textAlign: "center" }}>5</td>
              <td style={{ textAlign: "center" }}>
                <button>Modifier</button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td style={{ textAlign: "center" }}>Utilisateur</td>
              <td style={{ textAlign: "center" }}>10</td>
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

export default ListeProfils;