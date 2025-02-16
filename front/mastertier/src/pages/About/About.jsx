import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        {/* Effet glitch */}
        <div className="about-glitch"></div>

        {/* Avatar */}
        <div className="about-avatar">
          <img
            src="https://i.pinimg.com/originals/39/ee/71/39ee71e4564d0a40f6c9ee4e41c7fcad.jpg" // Change l'URL pour une vraie photo
            alt="Avatar"
          />
        </div>

        {/* Nom et description */}
        <h1 className="about-name">🚀 Master Tier</h1>
        <p className="about-quote">"Elle est dispo moi aussi 🌍💻"</p>

        {/* Infos principales */}
        <div className="about-info-grid">
          <div className="about-info-box">🌍 Planète : des Singes</div>
          <div className="about-info-box">🎂 Date de spawn : ???</div>
          <div className="about-info-box">⚡ Super Pouvoir : Jouer plusieurs rôles</div>
          <div className="about-info-box">🎮 Niveau : 99.99cm</div>
        </div>

        {/* Badges fun */}
        <div className="about-badges">
          <span className="badge">👾 Beaugosse</span>
          <span className="badge">🔥 Pro des massages</span>
          <span className="badge">🎸 Grosse guitar</span>
        </div>

        {/* Bouton de retour */}
        <button
          className="about-back-btn"
          onClick={() => (window.location.href = "/")}
        >
          🔙 Retour à l'accueil
        </button>
      </div>
    </div>
  );
}
