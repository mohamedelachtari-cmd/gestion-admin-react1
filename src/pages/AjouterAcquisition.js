import { useState } from "react";

function AjouterAcquisition() {
  const [type, setType] = useState("");
  const [code, setCode] = useState("");
  const [date, setDate] = useState("");
  const [montant, setMontant] = useState("");

  const handleAjouter = () => {
    const acquisition = {
      type,
      code,
      date,
      montant,
    };

    console.log(acquisition);

    // stockage
    const anciens = JSON.parse(localStorage.getItem("acquisitions")) || [];
    anciens.push(acquisition);
    localStorage.setItem("acquisitions", JSON.stringify(anciens));

    alert("Acquisition ajoutée ✅");

    // reset
    setType("");
    setCode("");
    setDate("");
    setMontant("");
  };

  return (
    <div>
      <h1>Ajouter une acquisition</h1>

      <p>Type:</p>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Choisir...</option>
        <option value="Achat">Achat</option>
        <option value="Don">Don</option>
      </select>

      <p>Code:</p>
      <input value={code} onChange={(e) => setCode(e.target.value)} />

      <p>Date:</p>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

      <p>Montant:</p>
      <input value={montant} onChange={(e) => setMontant(e.target.value)} />

      <br /><br />
      <button onClick={handleAjouter}>Ajouter</button>
    </div>
  );
}

export default AjouterAcquisition;