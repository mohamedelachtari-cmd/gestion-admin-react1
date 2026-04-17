import "../CSS/Style.css";

function ModifierUtilisateur() {
  return (
    <div>
      <h1 className="stats">Modifier une société</h1>

      <center>
        <table style={{ width: "100%", fontWeight: "bold" }}>
          <tbody>
            <tr>
              <td>Nom et Prénom :</td>
              <td><span style={{ color: "red" }}></span></td>

              <td>Email :</td>
              <td><span style={{ color: "red" }}></span></td>

              <td>Login :</td>
              <td><span style={{ color: "red" }}></span></td>
            </tr>

            <tr>
              <td>Active :</td>
              <td>
                <span style={{ color: "red" }}></span>
                <select>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
              </td>

              <td>Profil :</td>
              <td>
                <span style={{ color: "red" }}></span>
                <select>
                  <option>Administrateur</option>
                  <option>Utilisateur</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </center>

      <br />

      <center>
        <table>
          <tbody>
            <tr>
              <td>
                <span style={{ color: "red" }}>
                  ** veuillez remplir les champs valides
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <button>Modifier</button>
              </td>

              <td>
                <button>Annuler</button>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default ModifierUtilisateur;