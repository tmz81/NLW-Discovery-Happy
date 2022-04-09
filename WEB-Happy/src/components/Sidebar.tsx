import logo from "../assets/map-marker.svg";
import "../styles/sidebar.css";

export default function SideBar() {
  return (
    <aside className="sidebar">
      <img src={logo} alt="Happy" />

      <footer>
        <button type="button"></button>
      </footer>
    </aside>
  );
}
