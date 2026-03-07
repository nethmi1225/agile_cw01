import { X, Car, MapPin, Zap, CreditCard } from 'lucide-react';

interface BookingDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingDetailsModal = ({ isOpen, onClose }: BookingDetailsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-[2000] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">Booking Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:bg-gray-100 p-2 rounded-full transition"><X className="w-5 h-5" /></button>
        </div>

        <div className="p-6 space-y-6">
          {/* Vehicle */}
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-2 uppercase">Vehicle</p>
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
              <div className="bg-white p-2 rounded-lg shadow-sm border"><Car className="w-6 h-6 text-red-500" /></div>
              <div><p className="font-bold">BYD</p><p className="text-xs text-gray-500">Silver • SUV</p></div>
            </div>
          </div>

          {/* Station */}
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-2 uppercase">Charging Station</p>
            <div className="flex items-center gap-3 bg-green-50/50 p-3 rounded-xl border border-green-100">
              <div className="bg-green-100 p-2 rounded-lg"><MapPin className="w-6 h-6 text-green-600" /></div>
              <div><p className="font-bold">Volt Charging (Keells)</p><p className="text-xs text-gray-500">162 4/2, Matara</p></div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="border-t border-gray-100 pt-6 space-y-3">
            <div className="flex justify-between text-sm"><span className="text-gray-500">Booking Date</span><span className="font-bold">Sep 17, 2023</span></div>
            <div className="flex justify-between text-sm"><span className="text-gray-500">Time of Arrival</span><span className="font-bold">10:00 AM</span></div>
            <div className="border-t border-gray-100 my-3 pt-3"></div>
            <div className="flex justify-between text-base mt-2"><span className="font-bold">Total Amount</span><span className="font-bold text-blue-600">Rs 2500.00</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};