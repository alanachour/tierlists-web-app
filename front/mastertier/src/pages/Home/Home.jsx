import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../../assets/logo.png";
import tierlistIcon from "../../assets/tierlist-icon.png";
import gamepadIcon from "../../assets/gamepad.jpg";
import trophyIcon from "../../assets/trophy.jpg";
import sparkleIcon from "../../assets/sparkle.png";
import fireIcon from "../../assets/fire.png";
import candyIcon from "../../assets/candy.png";

export default function Home() {
  return (
    <div className="home-container">
      <div className="side-candies">
        <img src={candyIcon} alt="Candy" className="candy left-candy" />
        <img src={candyIcon} alt="Candy" className="candy right-candy" />
      </div>
      <header className="home-header">
        <img src={logo} alt="MasterTier Logo" className="home-logo bounce" />
        <h1 className="home-title">
          🎉 Bienvenue sur <span>MasterTier</span> ! 🎉
        </h1>
        <p className="home-subtitle">
          Crée, partage et amuse-toi avec tes <span>Tier Lists</span> !
        </p>
      </header>

      <section className="home-content">
        <div className="home-card wobble">
          <img src={tierlistIcon} alt="Tier List" className="home-icon" />
          <h2>🎨 Organise tes passions !</h2>
          <p>
            Fais des classements épiques de tes jeux, films, persos et plus
            encore !
          </p>
        </div>

        <div className="home-card wobble">
          <img src={gamepadIcon} alt="Gaming" className="home-icon" />
          <h2>🎮 Un style qui claque !</h2>
          <p>
            Plonge dans une expérience ultra fun avec une interface vivante et
            colorée !
          </p>
        </div>

        <div className="home-card wobble">
          <img src={trophyIcon} alt="Trophée" className="home-icon" />
          <h2>🏆 Défie tes amis !</h2>
          <p>
            Compare tes classements avec ceux de la communauté et vois qui a les
            meilleurs goûts !
          </p>
        </div>
      </section>

      <section className="home-extras">
        <div className="extra-card glow">
          <img
            src={sparkleIcon}
            alt="Effets cools"
            className="extra-icon sparkle"
          />
          <h3>✨ Des animations fun ✨</h3>
          <p>
            Des effets visuels éclatants qui rendent chaque interaction plus
            stylée !
          </p>
        </div>

        <div className="extra-card glow">
          <img src={fireIcon} alt="Challenge" className="extra-icon fire" />
          <h3>🔥 Des défis à relever 🔥</h3>
          <p>
            Participe aux classements les plus fous et deviens une légende
            MasterTier !
          </p>
        </div>
      </section>

      <section className="home-footer">
        <p>
          <span>MasterTier</span> : crée, partage et éclate-toi avec les
          meilleurs classements ! 🚀
        </p>
        <Link to="/create" className="home-button pulse">
          🚀 Lance ta Tier List !
        </Link>
      </section>
    </div>
  );
}
