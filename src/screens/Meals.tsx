import { useState } from 'react';
import { ChevronLeft, Search, Bell, Clock, Flame, Star } from 'lucide-react';
import { meals } from '../data';

export default function MealsScreen({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const [activeTabLocal, setActiveTabLocal] = useState('Breakfast');
  const tabs = ['Breakfast', 'Lunch', 'Dinner'];

  const recipeOfTheDay = meals.find(m => m.isRecipeOfTheDay) || meals[0];
  const recommendedMeals = meals.filter(m => !m.isRecipeOfTheDay && m.type === 'Lunch');
  const recipesForYou = meals.filter(m => m.type === 'Dinner');

  return (
    <div className="flex flex-col w-full text-zinc-900 dark:text-white min-h-[100dvh] bg-zinc-200 dark:bg-[#18181A] pb-[100px]">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 flex justify-between items-center sticky top-0 bg-zinc-200 dark:bg-[#18181A] z-20">
        <div className="flex items-center gap-2">
          <button className="text-primary pr-2" onClick={() => setActiveTab('home')}>
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>
          <h1 className="text-[20px] font-bold text-primary">Meal Ideas</h1>
        </div>
        <div className="flex gap-[18px]">
          <button className="text-primary" onClick={() => setActiveTab('search')}><Search size={22} strokeWidth={2.5} /></button>
          <button className="text-primary relative" onClick={() => setActiveTab('notifications')}>
            <Bell size={22} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 py-2 mb-6">
        <div className="flex gap-3 overflow-x-auto no-scrollbar snap-x pb-2">
          {tabs.map((tab) => (
             <button
              key={tab}
              onClick={() => setActiveTabLocal(tab)}
              className={`px-6 py-1.5 rounded-full text-[12px] font-bold transition-colors snap-start whitespace-nowrap border-[2px] ${
                activeTabLocal === tab ? 'bg-primary border-primary text-white' : 'bg-transparent text-zinc-500 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Recipe of the Day */}
      <div className="px-6 mb-8 text-center relative pointer-events-none">
         <div className="w-full h-[220px] rounded-[26px] overflow-hidden relative shadow-2xl pointer-events-auto cursor-pointer group">
            <img 
              src={recipeOfTheDay.image} 
              alt={recipeOfTheDay.title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            
            <div className="absolute top-6 right-6 text-primary text-[10px] font-bold tracking-widest uppercase">
              Recipe Of The Day
            </div>

            <div className="absolute bottom-6 left-6 text-left">
              <h2 className="font-bold text-xl mb-3 text-white max-w-[80%]">{recipeOfTheDay.title}</h2>
              <div className="flex items-center gap-3 text-xs text-zinc-200">
                <div className="flex items-center gap-1">
                  <Clock size={12} className="text-primary" /> {recipeOfTheDay.duration}
                </div>
                <div className="flex items-center gap-1">
                   <div className="w-1 h-1 rounded-full bg-primary mx-1"></div>
                </div>
                <div className="flex items-center gap-1">
                  <Flame size={12} className="text-primary" /> {recipeOfTheDay.calories}
                </div>
              </div>
            </div>
            
            <button className="absolute bottom-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10">
              <Star size={18} className="text-white fill-[#18181A] dark:fill-white" />
            </button>
         </div>
      </div>

      {/* Recommended */}
      <div className="mb-8 mt-4">
        <h2 className="text-[18px] font-bold px-6 mb-4 text-primary tracking-tight">Recommended</h2>
        <div className="flex overflow-x-auto px-6 gap-4 pb-4 snap-x no-scrollbar">
          {recommendedMeals.map((meal) => (
            <div key={meal.id} className="min-w-[220px] rounded-[24px] bg-zinc-50 dark:bg-[#202022] border border-zinc-200 dark:border-[#202022] p-2 snap-start cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shadow-lg">
              <div className="w-full h-32 rounded-[18px] overflow-hidden mb-3">
                 <img src={meal.image} alt={meal.title} className="w-full h-full object-cover" />
              </div>
              <div className="px-2 pb-2">
                <h3 className="font-bold text-[14px] mb-2">{meal.title}</h3>
                <div className="flex items-center gap-3 text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {meal.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {meal.calories}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recipes For You */}
      <div className="px-6 mb-4">
        <h2 className="text-[18px] font-bold mb-4 text-primary tracking-tight">Recipes For You</h2>
        <div className="flex flex-col gap-4">
          {recipesForYou.map((meal) => (
            <div key={meal.id} className="bg-zinc-50 dark:bg-[#202022] rounded-[24px] p-2 flex gap-4 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-zinc-200 dark:border-[#202022] shadow-lg">
              <div className="flex-1 py-3 pl-3 pr-2 flex flex-col justify-center">
                <h3 className="font-bold text-[14px] mb-3 leading-tight">{meal.title}</h3>
                <div className="flex items-center gap-3 text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {meal.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {meal.calories}
                  </div>
                </div>
              </div>
              <div className="w-[110px] h-[100px] rounded-[18px] overflow-hidden shrink-0 relative">
                 <img src={meal.image} alt={meal.title} className="w-full h-full object-cover" />
                 <div className="absolute top-2 right-2 text-white">
                    <Star size={16} strokeWidth={2.5} className="fill-[#18181A] dark:fill-white drop-shadow-md" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
