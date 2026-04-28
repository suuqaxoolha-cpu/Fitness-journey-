import { Bell, Search, Play, Star, Dumbbell, ClipboardList, Apple, Users, User, Sun, Moon } from 'lucide-react';
import { workouts, articles } from '../data';

export default function HomeScreen({ setActiveTab, isDark, toggleTheme }: { setActiveTab: (tab: string) => void, isDark: boolean, toggleTheme: () => void }) {
  return (
    <div className="flex flex-col w-full text-zinc-900 dark:text-white bg-zinc-200 dark:bg-[#18181A]">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 flex justify-between items-start sticky top-0 z-10 bg-zinc-200 dark:bg-[#18181A]">
        <div>
          <h1 className="text-[22px] font-bold text-primary mb-1">Hi, Caano</h1>
          <p className="text-[12px] text-zinc-600 dark:text-zinc-300 font-medium">It's time to challenge your limits.</p>
        </div>
        <div className="flex gap-[18px]">
          <button className="text-primary" onClick={toggleTheme}>
            {isDark ? <Sun size={22} strokeWidth={2.5} /> : <Moon size={22} strokeWidth={2.5} />}
          </button>
          <button className="text-primary" onClick={() => setActiveTab('search')}><Search size={22} strokeWidth={2.5} /></button>
          <button className="text-primary relative" onClick={() => setActiveTab('notifications')}>
            <Bell size={22} strokeWidth={2.5} />
          </button>
          <button className="text-primary" onClick={() => setActiveTab('profile')}>
            <User size={22} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex justify-between items-center py-6 border-b border-zinc-200 dark:border-zinc-800/80 mx-5 relative">
        <div onClick={() => setActiveTab('workouts')} className="flex-1 flex justify-center">
          <QuickAction icon={<Dumbbell size={26} className="text-primary" strokeWidth={2} />} label="Workout" />
        </div>
        <div className="w-[1px] h-8 bg-zinc-800"></div>
        <div className="flex-1 flex justify-center">
          <QuickAction icon={<ClipboardList size={26} className="text-primary" strokeWidth={2} />} label="Progress\nTracking" />
        </div>
        <div className="w-[1px] h-8 bg-zinc-800"></div>
        <div onClick={() => setActiveTab('nutrition')} className="flex-1 flex justify-center">
          <QuickAction icon={<Apple size={26} className="text-primary" strokeWidth={2} />} label="Nutrition" />
        </div>
        <div className="w-[1px] h-8 bg-zinc-800"></div>
        <div className="flex-1 flex justify-center">
          <QuickAction icon={<Users size={26} className="text-primary" strokeWidth={2} />} label="Community" />
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-8">
        <div className="flex justify-between items-end px-6 mb-5">
          <h2 className="text-[18px] font-bold text-primary">Recommendations</h2>
          <button className="text-primary text-[11px] font-semibold flex items-center tracking-wide">
            See All <span className="ml-1 text-[14px]">›</span>
          </button>
        </div>
        <div className="flex overflow-x-auto px-6 gap-4 pb-5 snap-x no-scrollbar">
          {workouts.filter(w => w.level === 'Beginner').map((workout) => (
            <div key={workout.id} className="relative min-w-[220px] rounded-[24px] bg-zinc-50 dark:bg-[#202022] border border-zinc-200 dark:border-[#202022] overflow-hidden snap-start flex flex-col shadow-lg shadow-black/20">
              <div className="h-[135px] w-full relative">
                 <img src={workout.image} alt={workout.title} className="absolute inset-0 w-full h-full object-cover" />
                 {/* Star */}
                 <div className="absolute top-[14px] right-[14px] text-white">
                    <Star size={16} strokeWidth={2.5} className="fill-[#18181A] dark:fill-white drop-shadow-md" />
                 </div>
                 {/* Play Button */}
                 <div className="absolute -bottom-[20px] right-4 bg-primary w-11 h-11 rounded-full border-[4px] border-zinc-200 dark:border-[#202022] flex items-center justify-center shadow-lg z-10">
                   <Play size={16} className="fill-[#18181A] dark:fill-white text-white ml-0.5" />
                 </div>
              </div>
              <div className="p-4 pt-6 pb-5">
                <h3 className="font-bold text-[14px] mb-2.5 text-primary tracking-wide">{workout.title}</h3>
                <div className="flex items-center gap-4 text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                  <div className="flex items-center gap-1.5">
                    <div className="w-[5px] h-[5px] rounded-full bg-primary" /> {workout.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                     <div className="w-[5px] h-[5px] rounded-full bg-primary" /> {workout.calories}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Challenge */}
      <div className="w-full bg-primary/10 py-8 mt-5">
        <div className="px-6">
            <div className="w-full h-[120px] rounded-[24px] overflow-hidden bg-zinc-50 dark:bg-[#202022] flex items-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] relative">
              <div className="absolute right-0 top-0 bottom-0 w-[55%]">
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80" alt="Challenge" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#202022] via-[#202022]/80 to-transparent"></div>
              </div>
              <div className="relative z-10 w-2/3 px-6 py-4 text-primary flex flex-col justify-center">
                <h2 className="font-bold text-[20px] leading-[1.15] mb-1.5 tracking-tight">Weekly<br/>Challenge</h2>
                <p className="text-[11px] text-zinc-600 dark:text-zinc-300 font-medium">Plank With Hip Twist</p>
              </div>
            </div>
        </div>
      </div>

      {/* Articles & Tips */}
      <div className="mt-8 mb-6">
        <div className="flex justify-between items-end px-6 mb-5">
           <h2 className="text-[18px] font-bold text-primary">Articles & Tips</h2>
           <button className="text-primary text-[11px] font-semibold flex items-center tracking-wide">
             See All <span className="ml-1 text-[14px]">›</span>
           </button>
        </div>
        <div className="flex overflow-x-auto px-6 gap-4 pb-4 snap-x no-scrollbar">
          {articles.map((article) => (
            <div key={article.id} className="min-w-[150px] snap-start bg-zinc-50 dark:bg-[#202022] rounded-[24px] p-2.5 pb-3">
              <div className="w-full h-[100px] rounded-[16px] overflow-hidden mb-3 relative">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                <div className="absolute top-[10px] right-[10px] text-white">
                   <Star size={14} strokeWidth={2.5} className="fill-[#18181A] dark:fill-white drop-shadow-md" />
                </div>
              </div>
              <h3 className="text-[11px] font-medium text-primary leading-snug px-1.5">{article.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QuickAction({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer pt-1 flex-1">
      {icon}
      <span className="text-[10px] text-zinc-500 dark:text-zinc-400 text-center whitespace-pre-line leading-[1.15] font-semibold mt-1">
        {label}
      </span>
    </div>
  );
}
