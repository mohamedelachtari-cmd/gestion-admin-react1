import "../CSS/Style.css";

function AjouterLots() {
  return (
    <div>
      <h1 className="stats">Ajouter des lots</h1>

      <h2>Société</h2>

      <table style={{ width: "100%", fontWeight: "bold" }}>
        <tbody>
          <tr>
            <td>Nom de la société :</td>
            <td><input type="text" /></td>

            <td>Téléphone :</td>
            <td><input type="text" /></td>

            <td>Fax :</td>
            <td><input type="text" /></td>
          </tr>

          <tr>
            <td>Email :</td>
            <td><input type="text" /></td>

            <td>Adresse :</td>
            <td><textarea></textarea></td>

            <td><span style={{ color: "red" }}></span></td>
          </tr>
        </tbody>
      </table>

      <br />

      <center>
        <button>Ajouter</button>
        <button>Annuler</button>
      </center>

      <h2>Détails de l'acquisition</h2>

      <table style={{ width: "100%", fontWeight: "bold" }}>
        <tbody>
          <tr>
            <td>Type d'acquisition :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Code :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Date :</td>
            <td><span style={{ color: "red" }}></span></td>
          </tr>

          <tr>
            <td>Montant Globale :</td>
            <td><span style={{ color: "red" }}></span> MAD</td>

            <td>Nombre de lots :</td>
            <td><span style={{ color: "red" }}></span></td>
          </tr>
        </tbody>
      </table>

      <center>
        <button>Modifier</button>
      </center>

      <h2>Ajouter des lots</h2>

      <table style={{ width: "100%", fontWeight: "bold" }}>
        <tbody>
          <tr>
            <td>Lot numéro :</td>
            <td><input type="text" /></td>

            <td>Nom du lot :</td>
            <td><input type="text" /></td>

            <td>Société :</td>
            <td>
              <select>
                <option>Choisir...</option>
              </select>
              <button>+</button>
            </td>
          </tr>

          <tr>
            <td>Montant du lot :</td>
            <td><input type="text" /></td>

            <td>Nombre d'articles :</td>
            <td><input type="text" /></td>

            <td><span style={{ color: "red" }}></span></td>
          </tr>
        </tbody>
      </table>

      <br />

      <center>
        <button>Ajouter</button>
        <button>Retour</button>
      </center>

      <h2>Détails des lots</h2>

      <center>
        <table border="1" style={{ width: "90%" }}>
          <tbody>
            <tr style={{ background: "#689FDD", color: "white" }}>
              <th>ID</th>
              <th>Lot numéro</th>
              <th>Nom du lot</th>
              <th>Société</th>
              <th>Montant</th>
              <th>Nombre d'articles</th>
              <th>Articles</th>
              <th>Modifier</th>
            </tr>

            <tr>
              <td>1</td>
              <td>Lot1</td>
              <td>Lot Informatique</td>
              <td>HP</td>
              <td>10000</td>
              <td>20</td>
              <td><button>+</button></td>
              <td><button>Modifier</button></td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default AjouterLots;