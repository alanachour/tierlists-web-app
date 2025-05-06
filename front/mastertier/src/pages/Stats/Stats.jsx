import { useEffect, useState } from "react";
import "./Stats.css"; // crée un fichier CSS similaire à Create.css
import logo from "../../assets/logo.png";

export default function Stats() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3002/api/stats")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur serveur");
        return res.json();
      })
      .then((data) => {
        // S’assurer que les champs existent
        if (
          data &&
          typeof data.totalTierlists !== "undefined" &&
          typeof data.mostUsedCategory !== "undefined" &&
          typeof data.mostPopularItem !== "undefined"
        ) {
          setStats(data);
        } else {
          throw new Error("Format inattendu");
        }
      })
      .catch((err) => {
        console.error("Erreur récupération stats :", err);
        setError(true);
      });
  }, []);
  

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
        <h1 className="main-title">📊 Statistiques Générales</h1>

        {error && (
          <div className="error-message">
            ❌ Une erreur est survenue lors du chargement des statistiques.
          </div>
        )}

        {!error && stats && (
          <section className="form-section">
            <p className="stat-item">
              <strong>Nombre total de Tier Lists :</strong> {stats.totalTierlists}
            </p>
            <p className="stat-item">
              <strong>Catégorie la plus utilisée :</strong> {stats.mostUsedCategory}
            </p>
            <p className="stat-item">
              <strong>Élément le plus populaire :</strong> {stats.mostPopularItem}
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
