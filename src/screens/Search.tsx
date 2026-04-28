import { useState } from 'react';
import { ChevronLeft, Search, Mic, SlidersHorizontal, Clock, Flame, Star } from 'lucide-react';
import { workouts, meals } from '../data';

export default function SearchScreen({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Workout', 'Nutrition'];

  const filteredItems = activeFilter === 'All' 
    ? [...workouts.map(w => ({...w, type: 'Workout'})), ...meals.map(m => ({...m, type: 'Nutrition'}))]
    : activeFilter === 'Workout'
    ? workouts.map(w => ({...w, type: 'Workout'}))
    : meals.map(m => ({...m, type: 'Nutrition'}));

  return (
    <div className="flex flex-col w-full text-zinc-900 dark:text-white min-h-[100dvh] bg-zinc-200 dark:bg-[#18181A] pb-[100px]">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 flex justify-between items-center sticky top-0 bg-zinc-200 dark:bg-[#18181A] z-20">
        <div className="flex items-center gap-2">
          <button className="text-primary pr-2" onClick={() => setActiveTab('home')}>
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>
          <h1 className="text-[20px] font-bold text-primary">Search</h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-6 mb-6">
        <div className="bg-zinc-50 dark:bg-[#202022] rounded-full flex items-center px-4 py-3 border border-zinc-200 dark:border-zinc-800 shadow-md">
          <Search size={20} className="text-zinc-500 dark:text-zinc-400 mr-3" />
          <input 
            type="text" 
            placeholder="Search exercises, meals..." 
            className="bg-transparent border-none outline-none flex-1 text-[14px] text-zinc-900 dark:text-white placeholder-zinc-500"
          />
          <Mic size={20} className="text-zinc-500 dark:text-zinc-400 mx-2" />
          <div className="w-[1px] h-5 bg-zinc-700 mx-2"></div>
          <SlidersHorizontal size={20} className="text-primary ml-2" />
        </div>
      </div>

      {/* Filters */}
      <div className="px-6 mb-6 flex gap-3">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`flex-1 py-1.5 rounded-full text-[12px] font-bold border-[2px] transition-colors ${
              activeFilter === filter 
                ? 'bg-primary border-primary text-white' 
                : 'bg-transparent border-primary text-primary'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="px-6 flex flex-col gap-4">
        {filteredItems.map((item: any) => (
          <div key={item.id + item.type} className="bg-zinc-50 dark:bg-[#202022] rounded-[24px] p-2 flex gap-4 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shadow-lg">
            <div className="w-[100px] h-[90px] rounded-[18px] overflow-hidden shrink-0 relative">
               <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
               <div className="absolute top-[8px] right-[8px] text-white">
                  <Star size={14} strokeWidth={2.5} className="fill-[#18181A] dark:fill-white drop-shadow-md" />
               </div>
            </div>
            <div className="flex-1 py-2 pr-2 flex flex-col justify-center">
              <span className="text-[10px] text-primary font-bold uppercase tracking-wider mb-1">{item.type}</span>
              <h3 className="font-bold text-[14px] mb-2 leading-tight pr-2">{item.title}</h3>
              <div className="flex items-center gap-3 text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item.duration}
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item.calories}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
