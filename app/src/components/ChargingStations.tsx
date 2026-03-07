import { Search, SlidersHorizontal, MapPin } from 'lucide-react';

export const ChargingStations = () => {
  // Dummy data representing the list in your screenshot
  const stations = [
    { id: 1, name: 'Volt Charge (Keells)', address: '162 4/2, Matara', rating: 4.5, distance: '5.0 km', status: 'Available', type: 'Free' },
    { id: 2, name: 'Volt Charge (Keells)', address: '162 4/2, Matara', rating: 4.5, distance: '5.0 km', status: 'Occupied', type: 'Paid' },
    // Add more to replicate the list...
  ];

  return (
    <div className="flex-1 bg-gray-50 p-8 h-screen overflow-y-auto w-full max-w-4xl mx-auto">
      
      {/* Search and Filter Header */}
      <div className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search charging stations by name or area" 
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
          Search
        </button>
      </div>

      {/* Filter Pills */}
      <div className="flex gap-3 mb-8">
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-2">
          Hours ▾
        </button>
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-2">
          Rating ▾
        </button>
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-2">
          Free / Paid ▾
        </button>
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-2 ml-auto">
          <SlidersHorizontal className="w-4 h-4" /> Filter
        </button>
      </div>

      {/* List of Stations */}
      <div className="space-y-4">
        {stations.map((station) => (
          <div key={station.id} className="bg-white p-4 rounded-2xl border border-gray-100 flex gap-4 items-center shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1593941707882-a5bba14938cb?auto=format&fit=crop&q=80&w=150" 
              alt={station.name} 
              className="w-24 h-24 rounded-xl object-cover"
            />
            
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-lg">{station.name}</h3>
              <div className="flex items-center gap-4 mt-1">
                <span className="text-yellow-400 text-sm">★★★★☆ {station.rating}</span>
                <span className={`text-sm font-semibold ${station.status === 'Available' ? 'text-green-500' : 'text-red-500'}`}>
                  {station.status}
                </span>
              </div>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4"/> {station.distance}</span>
                <span>•</span>
                <span>{station.type}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-32">
              <button className="w-full py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition text-sm">
                View
              </button>
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-sm">
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};