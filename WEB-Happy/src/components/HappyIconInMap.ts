import L from 'leaflet';
import ImgMarker from '../assets/map-marker.svg';

export default L.icon({
  iconUrl: ImgMarker,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});
