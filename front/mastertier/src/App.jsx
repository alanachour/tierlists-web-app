import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Explore from "./pages/Explore/Explore";
import Footer from "./components/Footer/Footer";
import Error404 from "./pages/Error/Error";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import FAQ from "./pages/FAQ/FAQ";
import UniqueTierList from "./pages/TierListPage/TierList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/tierlist" element={<UniqueTierList />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
