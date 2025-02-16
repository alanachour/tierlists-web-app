import "./FAQ.css";
import myAvatar from "../../assets/logo.png"; // Ton logo

const faqData = [
  {
    id: 1,
    user: "Pionel Pessi",
    avatar: "https://media.tenor.com/TiMKsmmhZMIAAAAM/messi-meme.gif",
    question: "Qué miras bobo ?",
    answer: "Nada papi, nada. 🤫",
  },
  {
    id: 2,
    user: "Alex Hitchens",
    avatar: "https://assets.skool.com/f/4fd952512e334188865ed7ef0b936313/c9be68362ae447c2bc775b8c5642b62598de53c8e9014506bed848faf946ed51",
    question:
      "Allez hop, bodycount ?",
    answer: "Oui oui allez monsieur on a pas le temps pour vos bêtises 🤦‍♂️",
  },
  {
    id: 3,
    user: "Oussama Ammar",
    avatar: "https://img.lemde.fr/2018/05/06/0/0/999/999/664/0/75/0/343a902_1384-16ekw7z.9zbu.jpeg",
    question: "Salut, j'ai une histoire à vous raconter !",
    answer: "On vous connait monsieur, on vous connait. 🤨",
  },
  {
    id: 4,
    user: "Deguem Pro",
    avatar: "https://yt3.googleusercontent.com/ytc/AIdro_ncIJDojEynfsckhGb2AJE4hRRrylURoxKd0MdGWEpYCnE=s900-c-k-c0x00ffffff-no-rj",
    question: "Pour combien d'euros, je te touche en bas là, en bas ! ?",
    answer:
      "Oula, on est pas à Châtelet ici, veuillez sortir. 🚨",
  },
  {
    id: 5,
    user: "Larry",
    avatar: "https://yt3.googleusercontent.com/5QX1mp0ocY4aODF-mwSCbx8ywO9v6ihRwLaE65Ja_F3PWUjhE03Y4ErB5vCXicGDmg9UAh3knA=s900-c-k-c0x00ffffff-no-rj",
    question: "C’est la danse des XVBARBAR, tu connais XVBARBAR ?",
    answer: "Oui on connait, pas besoin de nous le rappeler (surtout que vous dansez mal). 💃",
  },
];

export default function FAQ() {
  return (
    <div className="faq-container">
      <h1 className="faq-title">⚡ FAQ ⚡</h1>
      <div className="faq-separator"></div>
      <div className="faq-chat-container">
        {faqData.map((item, index) => (
          <div key={item.id} className="faq-message">
            {/* Numéro de la question */}
            <span className="faq-number">#{index + 1}</span>

            {/* Question utilisateur (gauche) */}
            <div className="faq-user-message">
              <img src={item.avatar} alt="avatar" className="faq-avatar" />
              <div className="faq-bubble left">
                <strong>{item.user}</strong> : {item.question}
              </div>
            </div>

            {/* Réponse admin (droite) */}
            <div className="faq-admin-message">
              <div className="faq-bubble right">
                <strong>Admin</strong> : {item.answer}
              </div>
              <img src={myAvatar} alt="admin-avatar" className="faq-avatar" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
