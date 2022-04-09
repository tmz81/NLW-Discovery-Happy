import {
  Map as LeafletMap,
  MapProps as LeafletMapProps,
  TileLayer,
} from "react-leaflet";

interface MapProps extends LeafletMapProps {
  interactive?: boolean;
  children: React.ReactNode;
}

export default function Map({
  children,
  interactive = true,
  ...props
}: MapProps) {
  return (
    <LeafletMap
      center={[0, 0]}
      zoom={15}
      style={{ width: "100%", height: "100%" }}
      touchZoom={interactive}
      zoomControl={interactive}
      doubleClickZoom={interactive}
      dragging={interactive}
      scroolWheelZoom={interactive}
      {...props}
    >
      <TileLayer url={``} />
      {children}
    </LeafletMap>
  );
}
