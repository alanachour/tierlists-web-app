import { useState } from "react";
import "./Error.css";

export default function Error404() {
  const [showPong, setShowPong] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Fonction pour fermer la vidéo si on clique en dehors
  const closeVideo = (e) => {
    if (e.target.classList.contains("video-overlay")) {
      setShowVideo(false);
    }
  };

  return (
    <>
      {/* Zone vidéo en dehors de .error-page */}
      {showVideo && (
        <div className="video-overlay" onClick={closeVideo}>
          <div className="video-container">
            <iframe
              className="youtube-video"
              src="https://www.youtube.com/embed/baABN1MreSE?autoplay=1&mute=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Page principale avec le flou */}
      <div className={`error-page ${showVideo ? "blurred" : ""}`}>
        <div className="error-content">
          <h1 className="error-title">🎮 Erreur 404 🎮</h1>
          <p className="error-message">
            Oops... Tu t'es perdu dans le monde des pixels ! 👾
          </p>
          <button
            className="error-btn"
            onClick={() => (window.location.href = "/")}
          >
            🔄 Retour à la réalité
          </button>
          <button className="play-video-btn" onClick={() => setShowVideo(true)}>
            ▶️ Lancer la vidéo
          </button>
          <button
            className="easter-egg-btn"
            onClick={() => setShowPong(!showPong)}
          >
            🕹️ Activer Mode Pong
          </button>
        </div>

        {showPong && (
          <iframe
            className="pong-game"
            src="https://pong-2.com/"
            title="Mini Pong"
          ></iframe>
        )}
      </div>
    </>
  );
}
