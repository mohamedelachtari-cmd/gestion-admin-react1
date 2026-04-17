function AjouterArticle() {
  return (
    <div>
      <h1 className="stats">Ajouter des Articles</h1>

      <h2>Désignation</h2>
      <input type="text" />
      <br /><br />

      <button>Ajouter</button>
      <button>Annuler</button>

      <h2>Marque</h2>
      <input type="text" />
      <br /><br />

      <button>Ajouter</button>
      <button>Annuler</button>

      <h2>Modèle</h2>

      <select>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>

      <select>
        <option>Option A</option>
        <option>Option B</option>
      </select>
      
      <br /><br />

      <button>Ajouter</button>
      <button>Annuler</button>
    </div>
  );
}

export default AjouterArticle;