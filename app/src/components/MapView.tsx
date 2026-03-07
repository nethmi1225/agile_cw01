"use client";

import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { StationDetailPanel } from './StationDetailPanel';

export default function MapView() {
  const [selectedStation, setSelectedStation] = useState<boolean>(true);

  // 1. FIX: Create a custom icon using direct CDN URLs. 
  // This completely bypasses the Next.js Turbopack image bundling issue!
  const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const routePath: [number, number][] = [
    [6.9271, 79.8612], 
    [6.9310, 79.8625],
    [6.9350, 79.8700], 
  ];

  return (
    <div className="h-screen w-full relative">
      <MapContainer center={[6.9271, 79.8612]} zoom={13} className="h-full w-full z-0">
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* 2. FIX: Pass the customIcon directly to your Marker */}
        <Marker 
          position={[6.9350, 79.8700]} 
          icon={customIcon}
          eventHandlers={{ click: () => setSelectedStation(true) }} 
        >
          <Popup>Volt Charge (Tesla)</Popup>
        </Marker>

        <Polyline positions={routePath} color="#4F46E5" weight={5} opacity={0.7} />
      </MapContainer>

      {/* Show panel if a station is selected */}
      {selectedStation && (
        <StationDetailPanel onClose={() => setSelectedStation(false)} />
      )}
    </div>
  );
}