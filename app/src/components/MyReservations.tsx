import { useState } from 'react';
import { MapPin, Zap, Clock, Info, Send } from 'lucide-react';

export const MyReservations = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <div className="flex-1 bg-gray-50 p-8 h-screen overflow-y-auto w-full max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Reservations</h1>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        {['upcoming', 'completed', 'cancelled'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-center font-semibold capitalize transition ${
              activeTab === tab 
                ? 'border-b-2 border-blue-600 text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Reservation Cards List */}
      <div className="space-y-6">
        {/* Example Card (Upcoming style) */}
        {activeTab === 'upcoming' && (
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm font-bold text-gray-900">Sep 17, 2023</p>
                <p className="text-xs text-gray-500">10:00 AM</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 font-medium">Remind me</span>
                {/* Simple CSS Toggle Switch */}
                <div className="w-10 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Volt Charging (Keells)</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                  <MapPin className="w-4 h-4" /> 162 4/2, Matara
                </p>
              </div>
              <button className="bg-blue-50 p-3 rounded-full text-blue-600 hover:bg-blue-100 transition">
                <Send className="w-5 h-5" />
              </button>
            </div>

            <div className="flex gap-8 mb-6 border-y border-gray-100 py-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Max power</p>
                <p className="text-sm font-bold flex items-center gap-1"><Zap className="w-4 h-4 text-blue-600"/> 100 kW</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Duration</p>
                <p className="text-sm font-bold flex items-center gap-1"><Clock className="w-4 h-4 text-blue-600"/> 1 Hour</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Amount</p>
                <p className="text-sm font-bold">Rs 2500.00</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition text-sm">
                Cancel Booking
              </button>
              <button className="py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition text-sm">
                View
              </button>
            </div>

            {/* Info Banner */}
            <div className="mt-4 bg-green-50 border border-green-100 rounded-lg p-3 flex gap-2 items-start">
              <Info className="w-4 h-4 text-green-600 mt-0.5" />
              <p className="text-xs text-green-700 leading-relaxed">
                You can cancel your reservation without penalty up to 2 hours before your scheduled time. 
                Late cancellations may incur a fee.
              </p>
            </div>
          </div>
        )}

        {/* You can duplicate the card above for "completed" and "cancelled" and change the buttons/badges based on your screenshot! */}
      </div>
    </div>
  );
};