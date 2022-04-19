import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/logo.svg";
import '../styles/landing.css';

export default function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logo} className="logo" alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite casas de abrigo e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Recife</strong>
          <span>Pernambuco</span>
        </div>

        <Link to="/app" className="entrer-app">
          <FaArrowRight size={60} color="#FFF" />
        </Link>
      </div>
    </div>
  );
}
