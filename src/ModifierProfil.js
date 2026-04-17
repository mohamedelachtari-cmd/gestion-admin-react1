import "../CSS/Style.css";

function ModifierProfil() {
  return (
    <div>
      <h1 className="stats">Modifier un profil</h1>

      <center>
        <table>
          <tbody>
            <tr>
              <td>Site :</td>
              <td><span></span></td>
              <td><input type="text" /></td>
            </tr>
          </tbody>
        </table>
      </center>

      <br />

      <table border="1" style={{ width: "80%" }}>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Fonctionnalité</th>
            <th>Ajouter</th>
            <th>Consulter</th>
            <th>Modifier</th>
          </tr>

          <tr>
            <td>1</td>
            <td>Fonction</td>

            <td>
              <select>
                <option>Oui</option>
                <option>Non</option>
              </select>
            </td>

            <td>
              <select>
                <option>Oui</option>
                <option>Non</option>
              </select>
            </td>

            <td>
              <select>
                <option>Oui</option>
                <option>Non</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      <br />

      <center>
        <button>Modifier</button>
        <button>Annuler</button>
      </center>
    </div>
  );
}

export default ModifierProfil;