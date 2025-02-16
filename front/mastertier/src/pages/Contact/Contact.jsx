import { useState, useEffect } from "react";
import "./Contact.css";

export default function Contact() {
  const [text, setText] = useState("");
  const [darkWebMode, setDarkWebMode] = useState(false);
  const [errorMode, setErrorMode] = useState(false);

  const normalMessage =
    ">> Système de contact initialisé...\n>> Chargement des données...\n>> Connexion établie avec le serveur...\n>> Analyse des intentions...\n>> Erreur 418: Je suis une théière.\n>> Tentative de récupération...\n>> Contact impossible, veuillez réessayer en 2077.\n>> Fin du programme.";

  const darkWebMessage =
    ">> Accès administrateur détecté...\n>> Traçage des données en cours...\n>> Attention: votre adresse IP a été enregistrée.\n>> Veuillez insérer votre carte bancaire pour valider votre identité.\n>> Suspicion d'activité illicite...\n>> FBI en route...\n>> Fin du programme.";

  useEffect(() => {
    setText(""); // Reset du texte à chaque switch de mode
    const message = darkWebMode ? darkWebMessage : normalMessage;
    let index = 0;
    const interval = setInterval(() => {
      if (index < message.length) {
        setText((prev) => prev + message[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [darkWebMode]);

  return (
    <div className={`contact-terminal ${darkWebMode ? "dark-mode" : ""}`}>
      <pre className="terminal-text">{text}</pre>

      <div className="terminal-buttons">
        <button className="btn-troll" onClick={() => setErrorMode(!errorMode)}>
          📡 Envoyer un message ({errorMode ? "⚠️ Échec total" : "Bug probable"}
          )
        </button>

        <button
          className="btn-darkweb"
          onClick={() => setDarkWebMode(!darkWebMode)}
        >
          {darkWebMode ? "🌞 Désactiver Dark Web" : "🕶️ Activer Dark Web"}
        </button>

        <button
          className="btn-back"
          onClick={() => (window.location.href = "/")}
        >
          🔙 Retour à l'accueil
        </button>
      </div>

      {errorMode && (
        <div className="error-popup">
          <p>
            ⚠️ Erreur critique: Impossible de contacter les extraterrestres.
          </p>
          <button onClick={() => setErrorMode(false)}>OK</button>
        </div>
      )}
    </div>
  );
}
