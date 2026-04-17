import "../CSS/Style.css";

function AjouterCaracteristiques() {

  const confirmDelete = () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer définitivement l'article ?")) {
      alert("Article supprimé");
    }
  };

  return (
    <div>
      <h1 className="stats">Ajouter des caractéristiques</h1>

      <a href="#">Lots</a> &gt; <a href="#">Articles</a>

      <h2>Caractéristiques</h2>

      <center>
        <table style={{ fontWeight: "bold" }}>
          <tbody>
            <tr>
              <td>
                Désignation :
                <span style={{ color: "red" }}></span>
              </td>

              <td>
                Caractéristiques :
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </table>

        <span style={{ color: "red" }}></span>

        <br /><br />

        <button>Ajouter</button>
        <button>Annuler</button>
      </center>

      <h2>Détails de l'article</h2>

      <table style={{ width: "100%", fontWeight: "bold" }}>
        <tbody>
          <tr>
            <td>Acquisition : <span style={{ color: "red" }}></span></td>
            <td>Lot numéro : <span style={{ color: "red" }}></span></td>
            <td>Article numéro : <span style={{ color: "red" }}></span></td>
          </tr>

          <tr>
            <td>Désignation : <span style={{ color: "red" }}></span></td>
            <td>Marque : <span style={{ color: "red" }}></span></td>
            <td>Modèle : <span style={{ color: "red" }}></span></td>
          </tr>

          <tr>
            <td>Nombre de matériel : <span style={{ color: "red" }}></span></td>
            <td>P.U (TTC) : <span style={{ color: "red" }}></span> MAD</td>
            <td>Prix de l'article (TTC) : <span style={{ color: "red" }}></span> MAD</td>
          </tr>
        </tbody>
      </table>

      <center>
        <button>Modifier</button>
        <button onClick={confirmDelete}>Supprimer</button>
      </center>

      <h2>Caractéristiques</h2>

      <center>
        <table>
          <tbody>
            <tr>
              <td>
                Caractéristique :
                <select>
                  <option>Choisir...</option>
                </select>
                <button>+</button>
              </td>

              <td>
                Valeur :
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </table>

        <br />

        <button>Ajouter</button>

        <br /><br />

        <table border="1" style={{ width: "80%" }}>
          <tbody>
            <tr style={{ background: "#689FDD", color: "white" }}>
              <th>ID</th>
              <th>Caractéristique</th>
              <th>Valeur</th>
              <th>Modifier</th>
            </tr>

            <tr>
              <td>1</td>
              <td>Exemple</td>
              <td>Valeur</td>
              <td><button>Modifier</button></td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}
function AjouterCaracteristique() {
  return (
    <div>
      <h1>Page Caracteristique</h1>
    </div>
  );
}

export default AjouterCaracteristique;