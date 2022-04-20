import { Link } from "react-router-dom";
import { Marker, Popup } from "react-leaflet";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";
import Map from "../components/HappyMap";
import L from "leaflet";

import ImgMarker from "../assets/map-marker.svg";
import "../styles/home.css";

const happyMap = L.icon({
  iconUrl: ImgMarker,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

export default function Home() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={ImgMarker} alt="Happy" />

          <h2>Selecione um abrigo no mapa</h2>
          <p>Faça uma visita e mude o dia de uma criança</p>
        </header>

        <footer>
          <strong>Recife</strong>
          <span>Pernambuco</span>
        </footer>
      </aside>

      <Map>
        <Marker position={[-27.2092052, -49.6401092]} icon={happyMap}>
          <Popup
            maxWidth={240}
            minWidth={240}
            closeButton={false}
            className="map-popup"
          >
            Lar das Crianças
            <Link to="#">
              <FaArrowCircleRight size={20} color="#FFD666" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="#" className="create-house">
        <FaPlus size={32} color="#FFD666" />
      </Link>
    </div>
  );
}
