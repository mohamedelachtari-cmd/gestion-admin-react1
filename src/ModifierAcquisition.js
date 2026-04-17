import "../CSS/Style.css";

function ModifierAcquisition() {

  const confirmDelete = () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer définitivement l'acquisition ?")) {
      alert("Acquisition supprimée");
    }
  };

  return (
    <div>
      <h1 className="stats">Modifier une acquisition</h1>

      <table style={{ width: "100%", fontWeight: "bold" }}>
        <tbody>
          <tr>
            <td>Type d'acquisition :</td>
            <td>
              <select>
                <option>Marché</option>
                <option>Bon de commande</option>
              </select>
            </td>

            <td>Code :</td>
            <td>
              <input type="text" />
            </td>

            <td>Montant Globale :</td>
            <td>
              <input type="text" /> MAD
            </td>
          </tr>

          <tr>
            <td>Nombre de lots :</td>
            <td>
              <input type="text" />
              <span style={{ color: "red" }}></span>
            </td>

            <td>Date :</td>
            <td>
              <input type="date" />
            </td>
          </tr>
        </tbody>
      </table>

      <br />

      <center>
        <button>Modifier</button>
        <button>Ajouter Lot</button>
        <button onClick={confirmDelete}>Supprimer</button>
      </center>
    </div>
  );
}

export default ModifierAcquisition;