"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic'; // 1. Import dynamic from Next.js
import { Sidebar } from '../src/components/Sidebar';
import { ChargingStations } from '../src/components/ChargingStations';
import { MyReservations } from '../src/components/MyReservations';

// 2. THE FIX: Dynamically import MapView and explicitly disable SSR
const MapView = dynamic(
  () => import('../src/components/MapView'), 
  { 
    ssr: false, // This is the magic line that fixes the "window is not defined" error!
    loading: () => (
      <div className="flex-1 flex items-center justify-center bg-gray-50 text-gray-500 font-medium">
        Loading Map...
      </div>
    )
  }
);

export default function DashboardPage() {
  const [activeView, setActiveView] = useState('map');

  const renderView = () => {
    switch (activeView) {
      case 'map':
        return <MapView />;
      case 'stations':
        return <ChargingStations />;
      case 'reservations':
        return <MyReservations />;
      default:
        return <MapView />;
    }
  };

  return (
    <div className="flex h-full w-full relative">
      <Sidebar activeTab={activeView} setActiveTab={setActiveView} />
      
      <main className="flex-1 relative h-full bg-gray-50">
        {renderView()}
      </main>
    </div>
  );
}