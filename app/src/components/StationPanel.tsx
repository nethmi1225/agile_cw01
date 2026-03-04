// components/StationPanel.tsx
export const StationPanel = ({ station, onClose }) => {
  return (
    <div className="absolute left-6 top-6 bottom-6 w-96 bg-white rounded-2xl shadow-2xl z-[1000] p-6 overflow-y-auto border border-gray-100">
      <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 text-xl">×</button>
      
      <img src={station.image} className="w-full h-48 object-cover rounded-xl mb-4" alt="Station" />
      
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">{station.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-yellow-400">★★★★★</span>
          <span className="text-gray-400 text-sm">(24 reviews)</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <button className="bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition">
          Get Direction
        </button>
        <button className="border border-gray-200 text-gray-700 py-2.5 rounded-lg font-semibold hover:bg-gray-50">
          Book Station
        </button>
      </div>

      <div className="border-t pt-4">
        <h4 className="font-semibold text-gray-900 mb-2">About</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{station.description}</p>
      </div>
    </div>
  );
};