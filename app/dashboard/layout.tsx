"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Map to disable SSR
const MapView = dynamic(() => import('../src/components/MapView'), { ssr: false });

export default function DashboardLayout() {
  const [isSidebarMinimized, setMinimized] = useState(false);

  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
      {/* Sidebar - Minimized or Full */}
      <aside className={`transition-all duration-300 bg-white border-r shadow-sm ${isSidebarMinimized ? 'w-20' : 'w-64'}`}>
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex-shrink-0" />
            {!isSidebarMinimized && <span className="font-bold text-xl">EVPoint</span>}
          </div>
          
          <nav className="flex-1 space-y-2">
            <SidebarItem icon="🗺️" label="Map" active minimized={isSidebarMinimized} />
            <SidebarItem icon="🔌" label="Charging Stations" minimized={isSidebarMinimized} />
            <SidebarItem icon="⭐" label="My Favorites" minimized={isSidebarMinimized} />
            <SidebarItem icon="💳" label="Payments" minimized={isSidebarMinimized} />
          </nav>

          <button 
            onClick={() => setMinimized(!isSidebarMinimized)}
            className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 mt-auto"
          >
            {isSidebarMinimized ? '→' : '← Minimize'}
          </button>
        </div>
      </aside>

      {/* Main Map Content */}
      <main className="flex-1 relative">
        <MapView />
      </main>
    </div>
  );
}