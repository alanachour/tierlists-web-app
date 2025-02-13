import { useState } from "react";
import "./Create.css";
import logo from "../../assets/logo.png";

export default function Create() {
  const [tierName, setTierName] = useState("");
  const [categories, setCategories] = useState([""]);
  const [items, setItems] = useState([""]);

  const addCategory = () => {
    setCategories([...categories, ""]);
  };

  const updateCategory = (index, value) => {
    const newCategories = [...categories];
    newCategories[index] = value;
    setCategories(newCategories);
  };

  const addItem = () => {
    setItems([...items, ""]);
  };

  const updateItem = (index, value) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  return (
    <div className="create-wrapper">
      <aside className="sidebar">
        <img src={logo} alt="MasterTier Logo" className="sidebar-logo" />
        <h2 className="sidebar-title">Les plus populaires</h2>
        <ul className="tier-list-history">
          <li>Meilleurs Jeux Vidéo</li>
          <li>Films Cultes</li>
          <li>Personnages de Manga</li>
        </ul>
      </aside>

      <main className="content">
        <h1 className="main-title">Crée ta Tier List</h1>
        <section className="form-section">
          <label className="label">Titre de la Tier List</label>
          <input
            type="text"
            className="input title-input"
            placeholder="Ex: Meilleurs Films"
            value={tierName}
            onChange={(e) => setTierName(e.target.value)}
          />

          <label className="label">Catégories</label>
          <div className="categories-list">
            {categories.map((category, index) => (
              <div key={index} className="category-item">
                <input
                  type="text"
                  className="input category-input"
                  placeholder={`Catégorie ${index + 1}`}
                  value={category}
                  onChange={(e) => updateCategory(index, e.target.value)}
                />
              </div>
            ))}
          </div>
          <button className="btn add-btn" onClick={addCategory}>
            Ajouter une catégorie
          </button>

          <label className="label">Contenu à classer</label>
          <div className="items-list">
            {items.map((item, index) => (
              <div key={index} className="item-entry">
                <input
                  type="text"
                  className="input item-input"
                  placeholder={`Élément ${index + 1}`}
                  value={item}
                  onChange={(e) => updateItem(index, e.target.value)}
                />
              </div>
            ))}
          </div>
          <button className="btn add-btn" onClick={addItem}>
            Ajouter un élément
          </button>
        </section>

        <button className="btn create-btn">Générer ma Tier List</button>
      </main>
    </div>
  );
}
