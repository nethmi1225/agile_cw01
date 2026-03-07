import { Navigation, MapPin, Clock } from 'lucide-react';

interface StationDetailPanelProps {
  onClose: () => void;
}

export const StationDetailPanel = ({ onClose }: StationDetailPanelProps) => {
  return (
    <div className="absolute left-6 top-6 bottom-6 w-[400px] bg-white rounded-3xl shadow-2xl z-[1000] flex flex-col border border-gray-100 overflow-hidden">
      <div className="relative h-56 shrink-0">
        <img 
          src="https://images.unsplash.com/photo-1593941707882-a5bba14938cb?auto=format&fit=crop&q=80&w=400" 
          alt="Volt Charge" 
          className="w-full h-full object-cover"
        />
        <button onClick={onClose} className="absolute right-4 top-4 bg-white/80 backdrop-blur p-2 rounded-full text-gray-600 hover:bg-white transition">
          ✕
        </button>
      </div>

      <div className="p-6 flex-1 overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-900">Volt Charge(Keells)</h2>
        <p className="text-gray-500 text-sm mt-1">162 4/2, Matara</p>

        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 font-bold">4.5</span>
            <span className="text-yellow-400">★★★★☆</span>
            <span className="text-gray-400 text-sm">(124 reviews)</span>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-md">Available</span>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <MapPin className="w-4 h-4" /> 5.0 km
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Clock className="w-4 h-4" /> 8 mins
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-6">
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
            <Navigation className="w-4 h-4" /> Get Direction
          </button>
          <button className="flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
            Route Planner
          </button>
        </div>

        <div className="flex border-b border-gray-100 mt-6 mb-4">
          <button className="pb-3 px-4 border-b-2 border-blue-600 text-blue-600 font-semibold flex-1">Info</button>
          <button className="pb-3 px-4 text-gray-500 font-medium flex-1">Chargers</button>
          <button className="pb-3 px-4 text-gray-500 font-medium flex-1">Reviews</button>
        </div>

        <div>
          <h3 className="font-bold text-gray-900 mb-2">About</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <span className="text-blue-600 cursor-pointer">Read more...</span>
          </p>
        </div>

        <div className="flex justify-between items-center mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
          <span className="text-sm font-semibold text-gray-700">Activation Type</span>
          <span className="text-sm font-bold text-gray-900">NFC</span>
        </div>
      </div>
    </div>
  );
};