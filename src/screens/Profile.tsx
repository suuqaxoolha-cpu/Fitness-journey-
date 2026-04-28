import { useRef, useState } from 'react';
import { ChevronLeft, LogOut, Settings, Award, Edit3, Grid, BarChart2, Moon, Sun } from 'lucide-react';

export default function ProfileScreen({ setActiveTab, onSignOut, isDark, toggleTheme }: { setActiveTab: (tab: string) => void, onSignOut: () => void, isDark: boolean, toggleTheme: () => void }) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState("https://i.postimg.cc/tgzX108G/dbb27c7d523cfc4b46f45d79ac807448.jpg");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setProfileImage(url);
    }
  };

  return (
    <div className="flex flex-col w-full text-zinc-900 dark:text-white min-h-[100dvh] bg-zinc-200 dark:bg-[#18181A] pb-[100px]">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 flex justify-between items-center sticky top-0 bg-zinc-200 dark:bg-[#18181A] z-20">
        <div className="flex items-center gap-2">
          <button className="text-primary pr-2" onClick={() => setActiveTab('home')}>
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>
          <h1 className="text-[20px] font-bold text-primary">Profile</h1>
        </div>
        <button className="text-primary">
          <Settings size={22} strokeWidth={2.5} />
        </button>
      </div>

      {/* Profile Info */}
      <div className="px-6 mt-4 flex flex-col items-center">
        <div className="relative mb-4">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-zinc-200 dark:border-[#202022] shadow-lg">
            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            ref={fileInputRef} 
            onChange={handleImageChange}
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-0 right-0 bg-primary w-8 h-8 rounded-full flex items-center justify-center border-2 border-[#18181A]"
          >
            <Edit3 size={14} className="text-white" strokeWidth={2.5} />
          </button>
        </div>
        <h2 className="text-[22px] font-bold text-zinc-900 dark:text-white tracking-wide">Caano</h2>
        <p className="text-[12px] text-zinc-500 dark:text-zinc-400 font-medium mt-1">Free Member</p>
      </div>

      {/* Stats */}
      <div className="px-6 mt-8">
        <div className="bg-zinc-50 dark:bg-[#202022] rounded-[24px] p-4 flex justify-around shadow-sm items-center py-5">
           <div className="flex flex-col items-center">
              <span className="text-[20px] font-bold text-primary mb-1">65</span>
              <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">Weight (kg)</span>
           </div>
           <div className="w-[1px] h-10 bg-zinc-800"></div>
           <div className="flex flex-col items-center">
              <span className="text-[20px] font-bold text-primary mb-1">182</span>
              <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">Height (cm)</span>
           </div>
           <div className="w-[1px] h-10 bg-zinc-800"></div>
           <div className="flex flex-col items-center">
              <span className="text-[20px] font-bold text-primary mb-1">24</span>
              <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">Age (yrs)</span>
           </div>
        </div>
      </div>

      {/* Options */}
      <div className="px-6 mt-8 flex flex-col gap-3">
        <OptionItem icon={<Grid size={20} />} label="My Programs" />
        <OptionItem icon={<BarChart2 size={20} />} label="Activity History" />
        <OptionItem icon={<Award size={20} />} label="Achievements" />
        <OptionItem icon={isDark ? <Sun size={20} /> : <Moon size={20} />} label={isDark ? "Light Mode" : "Dark Mode"} onClick={toggleTheme} />
        <OptionItem icon={<LogOut size={20} className="text-red-500" />} label="Sign Out" isOut onClick={onSignOut} />
      </div>
    </div>
  );
}

function OptionItem({ icon, label, isOut = false, onClick }: { icon: React.ReactNode, label: string, isOut?: boolean, onClick?: () => void }) {
  return (
    <div onClick={onClick} className="bg-zinc-50 dark:bg-[#202022] rounded-[20px] p-4 flex items-center justify-between cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isOut ? 'bg-red-500/10' : 'bg-zinc-100 dark:bg-[#18181A]'}`}>
          <div className={isOut ? 'text-red-500' : 'text-primary'}>{icon}</div>
        </div>
        <span className={`text-[14px] font-bold tracking-wide ${isOut ? 'text-red-500' : 'text-zinc-900 dark:text-white'}`}>{label}</span>
      </div>
      {!isOut && <ChevronLeft size={18} className="text-zinc-500 rotate-180" />}
    </div>
  );
}
