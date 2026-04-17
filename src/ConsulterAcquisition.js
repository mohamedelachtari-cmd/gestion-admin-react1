import { useState } from "react";
import "../CSS/Style.css";

function ConsulterAcquisitions() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <h1 className="stats">Consulter les acquisitions</h1>

      <table style={{ width: "100%", fontWeight: "bold" }}>
        <tbody>
          <tr>
            <td>
              Type d'acquisition :
              <select>
                <option>Choisir...</option>
              </select>
            </td>

            <td>
              Code :
              <input type="text" />
            </td>

            <td>
              Du :
              <input type="date" />
            </td>

            <td>
              A :
              <input type="date" />
            </td>
          </tr>
        </tbody>
      </table>

      <br />

      <center>
        <button>Afficher</button>
        <button>Annuler</button>

        <br /><br />

        <table border="1" style={{ width: "90%" }}>
          <tbody>
            <tr style={{ background: "#689FDD", color: "white" }}>
              <th>ID</th>
              <th>Type acquisition</th>
              <th>Code</th>
              <th>Montant</th>
              <th>Nombre lots</th>
              <th>Date</th>
              <th>Détails</th>
            </tr>

            <tr onClick={toggleDetails}>
              <td>1</td>
              <td>Achat</td>
              <td>ACQ001</td>
              <td>10000</td>
              <td>3</td>
              <td>01/01/2024</td>
              <td>Voir</td>
            </tr>

            {showDetails && (
              <tr>
                <td colSpan="7">
                  <table border="1" style={{ width: "100%" }}>
                    <tbody>
                      <tr style={{ background: "#cccccc" }}>
                        <th>Lot N°</th>
                        <th>Nom du lot</th>
                        <th>Montant</th>
                        <th>Société</th>
                        <th>Nombre articles</th>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td>Lot informatique</td>
                        <td>3000</td>
                        <td>HP</td>
                        <td>10</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default ConsulterAcquisitions;