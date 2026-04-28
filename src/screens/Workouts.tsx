import { useState } from 'react';
import { ChevronLeft, Search, Bell, Play, Star, User } from 'lucide-react';
import { workouts } from '../data';

export default function WorkoutsScreen({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const [activeTabLocal, setActiveTabLocal] = useState('Intermediate');
  const tabs = ['Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className="flex flex-col w-full text-zinc-900 dark:text-white min-h-[100dvh] bg-zinc-200 dark:bg-[#18181A]">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 flex justify-between items-center sticky top-0 bg-zinc-200 dark:bg-[#18181A] z-20">
        <div className="flex items-center gap-2">
          <button className="text-primary pr-2" onClick={() => setActiveTab('home')}>
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>
          <h1 className="text-[20px] font-bold text-primary">Workout</h1>
        </div>
        <div className="flex gap-[18px]">
          <button className="text-primary" onClick={() => setActiveTab('search')}><Search size={22} strokeWidth={2.5} /></button>
          <button className="text-primary relative" onClick={() => setActiveTab('notifications')}>
            <Bell size={22} strokeWidth={2.5} />
          </button>
          <button className="text-primary" onClick={() => setActiveTab('profile')}><User size={22} strokeWidth={2.5}/></button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 py-2 mb-6">
        <div className="flex gap-2.5">
          {tabs.map((tab) => {
             let btnClass = "flex-1 text-[12px] py-1.5 rounded-full font-bold transition-colors shadow-sm border-[2px] tracking-wide text-center";
             if (activeTabLocal === tab) {
                if (tab === 'Beginner' || tab === 'Intermediate') {
                   btnClass += " bg-primary border-primary text-white";
                } else {
                   btnClass += " bg-white border-white text-[#18181A]";
                }
             } else {
                if (tab === 'Advanced') {
                   btnClass += " bg-white border-white text-[#18181A]";
                } else {
                   btnClass += " bg-transparent border-primary text-primary";
                }
             }
             
            return (
              <button
                key={tab}
                onClick={() => setActiveTabLocal(tab)}
                className={btnClass}
              >
                {tab}
              </button>
            )
          })}
        </div>
      </div>

      {/* Training of the day (Hero) */}
      <div className="px-6 mb-8">
        <div className="relative w-full rounded-[30px] bg-primary p-1 overflow-hidden shadow-2xl">
          <div className="relative w-full h-[220px] rounded-[26px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80" 
              alt="Training of the Day" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#18181A]/90 via-[#18181A]/30 to-transparent"></div>
            
            <div className="absolute top-0 right-0 bg-primary text-[#18181A] font-bold text-[10px] px-4 py-1.5 rounded-bl-[16px] uppercase tracking-wide">
              Training Of The Day
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
              <div>
                <h2 className="font-bold text-[18px] mb-1.5 text-primary">Cardio Fitness</h2>
                <div className="flex items-center gap-[14px] text-[10px] text-zinc-600 dark:text-zinc-300 font-medium">
                  <div className="flex items-center gap-[6px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" /> 45 Minutes
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" /> 120 Kcal
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" /> 5 Exercises
                  </div>
                </div>
              </div>
              <button className="bg-white text-primary p-2 rounded-full w-9 h-9 flex items-center justify-center shadow-lg">
                <Star size={18} className="fill-current" strokeWidth={2.5}/>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="px-6">
        <h2 className="text-[18px] font-bold text-primary leading-tight">Keep Raising Your Level</h2>
        <p className="text-[12px] text-zinc-600 dark:text-zinc-300 mb-5 font-medium mt-1">Explore {activeTabLocal} Workouts</p>

        <div className="flex flex-col gap-4">
          {workouts.map((workout) => (
            <div key={workout.id} className="bg-white rounded-[26px] p-1.5 flex h-[120px] cursor-pointer shadow-lg overflow-hidden relative">
              <div className="flex-1 px-4 py-2 flex flex-col justify-center">
                <h3 className="font-bold text-[14px] mb-2 text-[#18181A] tracking-tight">{workout.title}</h3>
                <div className="flex flex-col gap-1.5 text-[10px] text-zinc-500 dark:text-zinc-600 font-bold">
                  <div className="flex items-center gap-3">
                     <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" /> {workout.duration}
                     </div>
                     <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" /> {workout.calories}
                     </div>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                     <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" /> 5 Exercises
                  </div>
                </div>
              </div>
              <div className="w-[130px] h-full shrink-0 relative rounded-[20px] overflow-hidden">
                 <img src={workout.image} alt={workout.title} className="w-full h-full object-cover" />
                 <div className="absolute top-[10px] right-[10px] text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    <Star size={18} className="fill-current" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
