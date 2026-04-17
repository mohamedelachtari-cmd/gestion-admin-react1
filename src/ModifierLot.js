import "../CSS/Style.css";

function ModifierLot() {

  const confirmDelete = () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce lot ?")) {
      alert("Lot supprimé");
    }
  };

  return (
    <div>
      <h1 className="stats">Modifier Lot</h1>

      <h2>Informations du lot</h2>

      <table style={{ width: "100%", fontWeight: "bold" }}>
        <tbody>
          <tr>
            <td>Lot numéro :</td>
            <td><input type="text" /></td>

            <td>Nom du lot :</td>
            <td><input type="text" /></td>
          </tr>

          <tr>
            <td>Société :</td>
            <td>
              <select>
                <option>Choisir...</option>
              </select>
            </td>

            <td>Montant :</td>
            <td><input type="text" /></td>
          </tr>

          <tr>
            <td>Nombre d'articles :</td>
            <td><input type="text" /></td>
          </tr>
        </tbody>
      </table>

      <br />

      <center>
        <button>Modifier</button>
        <button>Retour</button>
        <button onClick={confirmDelete}>Supprimer</button>
      </center>
    </div>
  );
}

export default ModifierLot;