// components/MapView.tsx
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
  // Example path for navigation
  const routePath = [
    [6.9271, 79.8612], // Start
    [6.9310, 79.8625],
    [6.9350, 79.8700], // Destination
  ];

  return (
    <MapContainer center={[6.9271, 79.8612]} zoom={13} className="h-full w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {/* Station Markers */}
      <Marker position={[6.9350, 79.8700]}>
        <Popup>Volt Charge (Tesla)</Popup>
      </Marker>

      {/* Navigation Line */}
      <Polyline positions={routePath} color="#4F46E5" weight={5} opacity={0.7} />
    </MapContainer>
  );
};