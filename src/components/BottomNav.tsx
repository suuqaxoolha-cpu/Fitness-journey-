import { Home, Search, Star, Headphones } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'favorites', icon: Star, label: 'Favorites' },
    { id: 'profile', icon: Headphones, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full flex justify-center z-50 pointer-events-none">
      <div className="w-full max-w-[420px] bg-primary rounded-t-[32px] pb-[calc(env(safe-area-inset-bottom)+12px)] pt-4 flex justify-around items-center px-6 pointer-events-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center p-2 transition-colors duration-200 text-white`}
            >
              <Icon size={28} className={isActive ? 'fill-[#18181A] dark:fill-white' : ''} strokeWidth={isActive ? 2.5 : 2} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
