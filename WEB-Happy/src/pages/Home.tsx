import Map from "../components/Map";
import mapMarker from "../assets/map-marker.svg";
import '../styles/home.css';

export default function Home() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Happy" />

          <h2>Selecione um abrigo no mapa</h2>
          <p>Faça uma visita e mude o dia de uma criança</p>
        </header>

        <footer>
          <strong>Recife</strong>
          <span>Pernambuco</span>
        </footer>
      </aside>
    </div>
  );
}
