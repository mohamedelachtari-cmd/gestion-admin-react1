import { useState } from "react";
import "../CSS/Style.css";

function AjouterLivraison() {
  const [showRow, setShowRow] = useState(false);

  const toggleRow = () => {
    setShowRow(!showRow);
  };

  return (
    <div>
      <h1 className="stats">Ajouter une livraison</h1>

      <table style={{ width: "100%", fontWeight: "bold" }}>
        <tbody>
          <tr>
            <td>Type d'acquisition :</td>
            <td><select></select></td>

            <td>Code :</td>
            <td><input type="text" /></td>

            <td>Du :</td>
            <td><input type="date" /></td>

            <td>A :</td>
            <td><input type="date" /></td>

            <td>Article livré :</td>
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
        <button>Afficher</button>
        <button>Annuler</button>
      </center>

      <br />

      <center>
        <table border="1" style={{ width: "90%" }}>
          <tbody>
            <tr style={{ background: "#689FDD", color: "white" }}>
              <th></th>
              <th>Type acquisition</th>
              <th>Code acquisition</th>
              <th>Montant</th>
              <th>Nombre lots</th>
              <th>Date acquisition</th>
            </tr>

            <tr>
              <td>
                <button onClick={toggleRow}>
                  {showRow ? "-" : "+"}
                </button>
              </td>

              <td>Marché</td>
              <td>ACQ001</td>
              <td>100000</td>
              <td>3</td>
              <td>01/01/2024</td>
            </tr>

            {showRow && (
              <tr>
                <td colSpan="6">
                  <table border="1" style={{ width: "100%" }}>
                    <tbody>
                      <tr style={{ background: "#ddd" }}>
                        <th>Lot</th>
                        <th>Nom Lot</th>
                        <th>Montant</th>
                        <th>Société</th>
                        <th>Nombre Articles</th>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td>Lot Informatique</td>
                        <td>30000</td>
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

      <br />

      <h2>Liste des articles livrés</h2>

      <center>
        <table border="1" style={{ width: "95%" }}>
          <tbody>
            <tr style={{ background: "#689FDD", color: "white" }}>
              <th>ID</th>
              <th>Acquisition</th>
              <th>Date Acq</th>
              <th>Lot</th>
              <th>Article Numéro</th>
              <th>Classification</th>
              <th>Nombre matériel</th>
              <th>Article livré</th>
              <th>Date livraison</th>
              <th>BL</th>
              <th>Modifier</th>
            </tr>

            <tr>
              <td>1</td>
              <td>ACQ001</td>
              <td>01/01/2024</td>
              <td>Lot1</td>
              <td>ART001</td>
              <td>PC</td>
              <td>10</td>
              <td>Oui</td>
              <td>05/01/2024</td>
              <td>BL001</td>
              <td><button>Modifier</button></td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default AjouterLivraison;