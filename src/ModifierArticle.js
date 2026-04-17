import "../CSS/Style.css";

function ModifierArticle() {

  const confirmDelete = () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer définitivement l'article ?")) {
      alert("Article supprimé");
    }
  };

  return (
    <div>
      <h1 className="stats">Modifier un Article</h1>

      <p>Lots</p>

      <h2>Désignations</h2>

      <center>
        <table>
          <tbody>
            <tr>
              <td>Désignation :</td>
              <td>
                <input type="text" />
                <span style={{ color: "red" }}></span>
              </td>
            </tr>
          </tbody>
        </table>

        <br />

        <button>Ajouter</button>
        <button>Annuler</button>
      </center>

      <h2>Marques</h2>

      <center>
        <table>
          <tbody>
            <tr>
              <td>Marque :</td>
              <td>
                <input type="text" />
                <span style={{ color: "red" }}></span>
              </td>
            </tr>
          </tbody>
        </table>

        <br />

        <button>Ajouter</button>
        <button>Annuler</button>
      </center>

      <h2>Modèles</h2>

      <center>
        <table>
          <tbody>
            <tr>
              <td>Désignation :</td>
              <td><select></select></td>

              <td>Marque :</td>
              <td><select></select></td>

              <td>Modèle :</td>
              <td>
                <input type="text" />
                <span style={{ color: "red" }}></span>
              </td>
            </tr>
          </tbody>
        </table>

        <br />

        <button>Ajouter</button>
        <button>Annuler</button>
      </center>

      <h2>Détails du lot</h2>

      <table style={{ width: "100%", fontWeight: "bold" }}>
        <tbody>
          <tr>
            <td>Acquisition :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Lot numéro :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Nom du lot :</td>
            <td><span style={{ color: "red" }}></span></td>
          </tr>

          <tr>
            <td>Société :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Montant du lot :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Nombre d'articles :</td>
            <td><span style={{ color: "red" }}></span></td>
          </tr>
        </tbody>
      </table>

      <br />

      <center>
        <button>Modifier</button>
        <button>Ajouter article</button>
      </center>

      <h2>Article</h2>

      <table style={{ width: "100%", fontWeight: "bold" }}>
        <tbody>
          <tr>
            <td>Numéro d'article :</td>
            <td><input type="text" /></td>

            <td>Nombre de matériel :</td>
            <td><input type="text" /></td>

            <td>P.U (TTC) :</td>
            <td><input type="text" /></td>
          </tr>

          <tr>
            <td>Désignation :</td>
            <td>
              <select></select>
              <button>+</button>
            </td>

            <td>Marque :</td>
            <td>
              <select></select>
              <button>+</button>
            </td>

            <td>Modèle :</td>
            <td>
              <select></select>
              <button>+</button>
            </td>
          </tr>

          <tr>
            <td>Date fin garantie :</td>
            <td><input type="date" /></td>
          </tr>
        </tbody>
      </table>

      <br />

      <center>
        <button>Modifier</button>
        <button onClick={confirmDelete}>Supprimer</button>
      </center>

      <br />

      <h2>Détails des Articles</h2>

      <center>
        <table border="1" style={{ width: "80%" }}>
          <tbody>
            <tr style={{ background: "#689FDD", color: "white" }}>
              <th>ID</th>
              <th>Article numéro</th>
              <th>Désignation</th>
              <th>Marque</th>
              <th>Modèle</th>
              <th>Nombre matériel</th>
              <th>P.U</th>
              <th>Prix article</th>
              <th>Caractéristiques</th>
              <th>Modifier</th>
            </tr>

            <tr>
              <td>1</td>
              <td>ART001</td>
              <td>PC</td>
              <td>HP</td>
              <td>ProBook</td>
              <td>10</td>
              <td>5000</td>
              <td>50000</td>
              <td><button>+</button></td>
              <td><button>Modifier</button></td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default ModifierArticle;