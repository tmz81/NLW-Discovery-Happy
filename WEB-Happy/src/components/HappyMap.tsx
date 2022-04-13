import {
  MapContainer as LeafletMap,
  MapContainerProps as LeafletMapProps,
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
      center={[-27.2092052, -49.6401092]}
      zoom={15}
      style={{ width: "100%", height: "100%" }}
      touchZoom={interactive}
      zoomControl={interactive}
      doubleClickZoom={interactive}
      dragging={interactive}
      scroolWheelZoom={interactive}
      {...props}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=`}
      />
      {children}
    </LeafletMap>
  );
}
