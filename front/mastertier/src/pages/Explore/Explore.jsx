import { useState } from "react";
import "./Explore.css";
import logo from "../../assets/logo.png";

const sampleTierLists = [
  {
    title: "Meilleurs Jeux Vidéo",
    coverImage:
      "https://comarketing-news.fr/wp-content/uploads/chiffres-jeu-video.jpg",
    date: "2024-02-01",
  },
  {
    title: "Films Cultes",
    coverImage:
      "https://shsroundtable.com/wp-content/uploads/2018/02/film-1155439_960_720-900x582.jpg",
    date: "2024-01-15",
  },
  {
    title: "Personnages de Manga",
    coverImage:
      "https://cdn.shopify.com/s/files/1/0638/7289/3119/files/mangas_480x480.jpg?v=1720570170",
    date: "2023-12-20",
  },
];

export default function Explore() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("recent");

  const sortTierLists = (lists) => {
    return [...lists].sort((a, b) => {
      if (sortOrder === "recent") return new Date(b.date) - new Date(a.date);
      if (sortOrder === "oldest") return new Date(a.date) - new Date(b.date);
      if (sortOrder === "alpha") return a.title.localeCompare(b.title);
      return 0;
    });
  };

  return (
    <div className="explore-wrapper">
      <header className="explore-header">
        <img
          src={logo}
          alt="MasterTier Logo"
          className="logo bounce-animation"
        />
        <h1 className="title">🌟 Explore les Tier Lists 🌟</h1>
        <div className="search-container">
          <input
            type="text"
            className="search-bar neon-border"
            placeholder="🔎 Rechercher une Tier List..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="sort-options">
            <label>📌 Trier par :</label>
            <select
              className="sort-select neon-border"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="recent">⏳ Plus récentes</option>
              <option value="oldest">📅 Moins récentes</option>
              <option value="alpha">🔤 Ordre alphabétique</option>
            </select>
          </div>
        </div>
      </header>

      <main className="tier-list-grid">
        {sortTierLists(sampleTierLists)
          .filter((tier) =>
            tier.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((tier, index) => (
            <div key={index} className="tier-card card-shadow">
              <div className="tier-image-wrapper hover-zoom">
                <img
                  src={tier.coverImage}
                  alt={tier.title}
                  className="tier-image"
                />
              </div>
              <h2 className="tier-title rainbow-text">{tier.title}</h2>
              <p className="tier-date animated-glow">
                🗓 Ajoutée le{" "}
                <span>{new Date(tier.date).toLocaleDateString()}</span>
              </p>
              <button className="btn-view wavy-button">👀 Voir plus</button>
            </div>
          ))}
      </main>

      <footer className="footer">
        <p>✨ Découvre des Tier Lists incroyables et crée les tiennes ! ✨</p>
      </footer>
    </div>
  );
}
