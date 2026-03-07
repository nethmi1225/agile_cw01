import { 
  Map, Zap, Calendar, CreditCard, Bell, Settings, HelpCircle, LogOut 
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

// 1. FIX: Added props to the component signature
export const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  
  // 2. FIX: Completed the array of navigation items
  const navItems = [
    { id: 'map', label: 'Map View', icon: Map },
    { id: 'stations', label: 'Charging Stations', icon: Zap },
    { id: 'reservations', label: 'My Reservations', icon: Calendar },
    { id: 'payments', label: 'Payments', icon: CreditCard },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col justify-between py-6 z-50">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 px-6 mb-10">
          <div className="bg-blue-600 p-2 rounded-full">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">EVPoint</h1>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2 px-4">
          
          {/* 3. FIX: Map through items to create dynamic buttons that change the screen */}
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" /> {item.label}
              </button>
            );
          })}
          
          <div className="pt-6 pb-2">
            <hr className="border-gray-100" />
          </div>

          {/* Bottom Menu Items */}
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl font-medium transition">
            <Bell className="w-5 h-5" /> Notifications
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl font-medium transition">
            <Settings className="w-5 h-5" /> Settings
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl font-medium transition">
            <HelpCircle className="w-5 h-5" /> Support
          </button>
        </nav>
      </div>

      {/* User Profile */}
      <div className="px-6 flex items-center gap-3 cursor-pointer hover:bg-gray-50 py-2 rounded-xl transition">
        <img 
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Yashmika" 
          alt="User" 
          className="w-10 h-10 rounded-full bg-gray-100"
        />
        <div className="flex-1 text-left">
          <p className="text-xs text-gray-500">Welcome back 👋</p>
          <p className="text-sm font-bold text-gray-900">Yashmika</p>
        </div>
        <LogOut className="w-5 h-5 text-gray-400 hover:text-red-500 transition" />
      </div>
    </div>
  );
};