import "../CSS/Style.css";

function ModifierCaracteristique() {

  const confirmDelete = () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ?")) {
      alert("Caractéristique supprimée");
    }
  };

  return (
    <div>
      <h1 className="stats">Modifier une caractéristique</h1>

      <p>Lots &gt; Articles &gt; Caractéristiques</p>

      <h2>Caractéristiques</h2>

      <center>
        <table style={{ fontWeight: "bold" }}>
          <tbody>
            <tr>
              <td>Désignation :</td>
              <td><span style={{ color: "red" }}></span></td>

              <td>Caractéristiques :</td>
              <td><input type="text" /></td>
            </tr>
          </tbody>
        </table>

        <br />

        <button>Ajouter</button>
        <button>Annuler</button>
      </center>

      <h2>Détails de l'article</h2>

      <table style={{ width: "100%", fontWeight: "bold" }}>
        <tbody>
          <tr>
            <td>Acquisition :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Lot numéro :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Article numéro :</td>
            <td><span style={{ color: "red" }}></span></td>
          </tr>

          <tr>
            <td>Désignation :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Marque :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Modèle :</td>
            <td><span style={{ color: "red" }}></span></td>
          </tr>

          <tr>
            <td>Nombre de matériel :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>P.U (TTC) :</td>
            <td><span style={{ color: "red" }}></span> MAD</td>

            <td>Prix total :</td>
            <td><span style={{ color: "red" }}></span> MAD</td>
          </tr>
        </tbody>
      </table>

      <br />

      <center>
        <button>Modifier</button>
        <button>Ajouter caractéristique</button>
        <button onClick={confirmDelete}>Supprimer</button>
      </center>

      <h2>Caractéristiques</h2>

      <center>
        <table>
          <tbody>
            <tr>
              <td>Caractéristique :</td>

              <td>
                <select>
                  <option>RAM</option>
                  <option>Disque</option>
                  <option>CPU</option>
                </select>
                <button>+</button>
              </td>

              <td>Valeur :</td>
              <td><input type="text" /></td>
            </tr>
          </tbody>
        </table>

        <br />

        <button>Modifier</button>
        <button onClick={confirmDelete}>Supprimer</button>
      </center>

      <br />

      <center>
        <table border="1" style={{ width: "70%" }}>
          <tbody>
            <tr style={{ background: "#689FDD", color: "white" }}>
              <th>ID</th>
              <th>Caractéristique</th>
              <th>Valeur</th>
              <th>Modifier</th>
            </tr>

            <tr>
              <td>1</td>
              <td>RAM</td>
              <td>16 GB</td>
              <td><button>Modifier</button></td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default ModifierCaracteristique;