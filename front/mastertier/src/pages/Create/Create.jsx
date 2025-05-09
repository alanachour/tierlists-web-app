import { useState, useEffect } from "react";
import "./Create.css";
import logo from "../../assets/logo.png";

export default function Create() {
  const [tierName, setTierName] = useState("Meilleure Tier List");
  const [coverImage, setCoverImage] = useState("");
  const [categories, setCategories] = useState(["S", "A", "B", "C"]);
  const [items, setItems] = useState([
    { name: "Item 1", imageUrl: "" },
    { name: "Item 2", imageUrl: "" },
  ]);
  const [creationStatus, setCreationStatus] = useState(null);

  useEffect(() => {
    const savedTierName = localStorage.getItem("tierName");
    const savedCoverImage = localStorage.getItem("coverImage");
    const savedCategories = JSON.parse(localStorage.getItem("categories"));
    const savedItems = JSON.parse(localStorage.getItem("items"));

    if (savedTierName) setTierName(savedTierName);
    if (savedCoverImage) setCoverImage(savedCoverImage);
    if (savedCategories) setCategories(savedCategories);
    if (savedItems) setItems(savedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("tierName", tierName);
    localStorage.setItem("coverImage", coverImage);
    localStorage.setItem("categories", JSON.stringify(categories));
    localStorage.setItem("items", JSON.stringify(items));
  }, [tierName, coverImage, categories, items]);

  const addCategory = () => setCategories([...categories, ""]);
  const updateCategory = (index, value) => {
    const newCategories = [...categories];
    newCategories[index] = value;
    setCategories(newCategories);
  };
  const removeCategory = (index) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  const addItem = () => setItems([...items, { name: "", imageUrl: "" }]);
  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleCreateTierList = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/tierlists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: tierName,
          coverImage,
          categories,
          items,
        }),
      });

      if (!response.ok) throw new Error();
      setCreationStatus("success");
    } catch {
      setCreationStatus("error");
    }
  };

  const handleResetForm = () => {
    setCreationStatus(null);
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

        {creationStatus === null && (
          <section className="form-section">
            <label className="label">Titre de la Tier List</label>
            <input
              type="text"
              className="input title-input"
              placeholder="Ex: Meilleurs Films"
              value={tierName}
              onChange={(e) => setTierName(e.target.value)}
            />

            <label className="label">Image de couverture</label>
            <input
              type="text"
              className="input cover-image-input"
              placeholder="URL de l'image de couverture"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
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
                  <button
                    className="delete-btn"
                    onClick={() => removeCategory(index)}
                  >
                    ✖
                  </button>
                </div>
              ))}
            </div>
            <button className="btn add-btn" onClick={addCategory}>
              Ajouter une catégorie
            </button>

            <label className="label">Éléments à classer</label>
            <div className="items-list">
              {items.map((item, index) => (
                <div key={index} className="item-entry">
                  <input
                    type="text"
                    className="input item-input"
                    placeholder={`Élément ${index + 1}`}
                    value={item.name}
                    onChange={(e) =>
                      updateItem(index, "name", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    className="input item-input"
                    placeholder="URL de l'image"
                    value={item.imageUrl}
                    onChange={(e) =>
                      updateItem(index, "imageUrl", e.target.value)
                    }
                  />
                  <button
                    className="delete-btn"
                    onClick={() => removeItem(index)}
                  >
                    ✖
                  </button>
                </div>
              ))}
            </div>
            <button className="btn add-btn" onClick={addItem}>
              Ajouter un élément
            </button>
          </section>
        )}

        {creationStatus === "success" && (
          <div className="success-message">
            ✅ Tier List enregistrée avec succès !
          </div>
        )}
        {creationStatus === "error" && (
          <div className="error-message">
            ❌ Une erreur est survenue lors de la création.
          </div>
        )}

        {creationStatus !== null && (
          <div className="retour-container">
            <button className="btn retour-btn" onClick={handleResetForm}>
              ↩️ Revenir
            </button>
          </div>
        )}

        {creationStatus === null && (
          <button className="btn create-btn" onClick={handleCreateTierList}>
            Générer ma Tier List
          </button>
        )}
      </main>
    </div>
  );
}
