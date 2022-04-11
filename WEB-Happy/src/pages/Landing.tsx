import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Landing() {
  return (
    <div>
      <div>
        <img src={logo} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite casas de abrigo e mude o dia de muitas crianças.</p>
        </main>

        <div>
          <strong>Recife</strong>
          <span>Pernambuco</span>
        </div>

        <Link to="/app" className="entrer-app"></Link>
      </div>
    </div>
  );
}
