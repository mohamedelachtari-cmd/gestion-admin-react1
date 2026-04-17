import "../CSS/Style.css";

function DetailsAffectation() {
  return (
    <div>
      <h1 className="stats">Détails de l'affectation</h1>

      <h3>Détails de l'état du matériel</h3>

      <table style={{ width: "100%", fontWeight: "bold" }}>
        <tbody>
          <tr>
            <td>Etat :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Date début :</td>
            <td><span style={{ color: "red" }}></span></td>
          </tr>

          <tr>
            <td>Société :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Etat de retour :</td>
            <td><span style={{ color: "red" }}></span></td>
          </tr>

          <tr>
            <td>Entité :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Personne :</td>
            <td><span style={{ color: "red" }}></span></td>
          </tr>

          <tr>
            <td>Bâtiment :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Etage :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Bureau :</td>
            <td><span style={{ color: "red" }}></span></td>
          </tr>

          <tr>
            <td>Commentaire :</td>
            <td><span style={{ color: "red" }}></span></td>
          </tr>
        </tbody>
      </table>

      <br />

      <center>
        <button>Imprimer la prise en charge</button>
        <button>Imprimer la décharge</button>
        <button>Etat actuel</button>
      </center>

      <h3>Fiche signalétique du matériel</h3>

      <h2>Description du matériel</h2>

      <table style={{ width: "100%", fontWeight: "bold" }}>
        <tbody>
          <tr>
            <td>Désignation :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Marque :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Modèle :</td>
            <td><span style={{ color: "red" }}></span></td>
          </tr>

          <tr>
            <td>N° inventaire :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>N° série :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Date fin garantie :</td>
            <td><span style={{ color: "red" }}></span></td>
          </tr>
        </tbody>
      </table>

      <h2>Caractéristiques du matériel</h2>

      <center>
        <table border="1" style={{ width: "50%" }}>
          <tbody>
            <tr style={{ background: "#689FDD", color: "white" }}>
              <th>Caractéristique</th>
              <th>Valeur</th>
            </tr>

            <tr>
              <td>Exemple</td>
              <td>Valeur</td>
            </tr>
          </tbody>
        </table>
      </center>

      <h2>Information sur l'acquisition</h2>

      <table style={{ width: "100%", fontWeight: "bold" }}>
        <tbody>
          <tr>
            <td>Type acquisition :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Code :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Date :</td>
            <td><span style={{ color: "red" }}></span></td>
          </tr>
        </tbody>
      </table>

      <h2>Informations sur la livraison</h2>

      <table style={{ width: "100%", fontWeight: "bold" }}>
        <tbody>
          <tr>
            <td>Date livraison :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>N° Bon livraison :</td>
            <td><span style={{ color: "red" }}></span></td>
          </tr>
        </tbody>
      </table>

      <h2>Informations sur la société</h2>

      <table style={{ width: "100%", fontWeight: "bold" }}>
        <tbody>
          <tr>
            <td>Société :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Téléphone :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Fax :</td>
            <td><span style={{ color: "red" }}></span></td>
          </tr>

          <tr>
            <td>Email :</td>
            <td><span style={{ color: "red" }}></span></td>

            <td>Adresse :</td>
            <td colSpan="3">
              <span style={{ color: "red" }}></span>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Historique des états du matériel</h3>

      <center>
        <table border="1" style={{ width: "80%" }}>
          <tbody>
            <tr style={{ background: "#689FDD", color: "white" }}>
              <th>ID</th>
              <th>Etat</th>
              <th>Date début</th>
              <th>Date fin</th>
              <th>Commentaire</th>
            </tr>

            <tr>
              <td>1</td>
              <td>En service</td>
              <td>01/01/2024</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default DetailsAffectation;