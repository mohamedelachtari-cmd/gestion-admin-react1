import "../CSS/Style.css";

function EtatAffectation() {
  return (
    <div>
      <h1 className="stats">Etat d'affectation</h1>

      <table>
        <tbody>
          <tr>
            <td>N° d'inventaire :</td>
            <td><input type="text" /></td>

            <td>N° de serie :</td>
            <td><input type="text" /></td>
          </tr>
        </tbody>
      </table>

      <br />

      <table style={{ width: "100%", fontWeight: "bold" }}>
        <tbody>
          <tr>
            <td>Type d'acquisition :</td>
            <td><select></select></td>

            <td>Numéro d'acquisition :</td>
            <td><select></select></td>

            <td>Lot :</td>
            <td><select></select></td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td>Article :</td>
            <td>
              <select style={{ width: "400px" }}></select>
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td>Désignation :</td>
            <td><select></select></td>

            <td>Marque :</td>
            <td><select></select></td>

            <td>Modéle :</td>
            <td><select></select></td>
          </tr>

          <tr>
            <td>Etat :</td>
            <td><select></select></td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td>Personne :</td>
            <td><select></select></td>

            <td>Entite :</td>
            <td><select></select></td>
          </tr>

          <tr>
            <td>Société de réparation :</td>
            <td><select></select></td>
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
              <th>ID</th>
              <th>Désignation / Marque / Modéle</th>
              <th>Acquisition</th>
              <th>N° Inventaire</th>
              <th>N° Série</th>
              <th>Etat</th>
              <th>Détails</th>
            </tr>

            <tr>
              <td>1</td>
              <td>PC HP Probook</td>
              <td>ACQ01</td>
              <td>INV001</td>
              <td>SN001</td>
              <td>Bon</td>

              <td>
                <table border="1">
                  <tbody>
                    <tr>
                      <th>Entité</th>
                      <th>Personne</th>
                      <th>Commentaire</th>
                    </tr>

                    <tr>
                      <td>IT</td>
                      <td>Amine</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default EtatAffectation;