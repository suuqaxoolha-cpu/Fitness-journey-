import { ChevronLeft, Dumbbell, Apple, Award } from 'lucide-react';

export default function NotificationsScreen({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const notifications = [
    {
      id: 1,
      title: 'Workout Completed!',
      desc: 'Great job! You finished "Full Body Stretching".',
      time: '2 hours ago',
      type: 'workout',
      isNew: true
    },
    {
      id: 2,
      title: 'Time for Lunch',
      desc: 'Have you tried the "Quinoa Salad" recipe?',
      time: '5 hours ago',
      type: 'meal',
      isNew: true
    },
    {
      id: 3,
      title: 'New Achievement',
      desc: 'You reached 3 days streak! Keep it up.',
      time: '1 day ago',
      type: 'achievement',
      isNew: false
    },
    {
      id: 4,
      title: 'Missed Workout',
      desc: 'You missed your scheduled workout yesterday.',
      time: '2 days ago',
      type: 'workout',
      isNew: false
    }
  ];

  return (
    <div className="flex flex-col w-full text-zinc-900 dark:text-white min-h-[100dvh] bg-zinc-200 dark:bg-[#18181A] pb-[100px]">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 flex justify-between items-center sticky top-0 bg-zinc-200 dark:bg-[#18181A] z-20">
        <div className="flex items-center gap-2">
          <button className="text-primary pr-2" onClick={() => setActiveTab('home')}>
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>
          <h1 className="text-[20px] font-bold text-primary">Notifications</h1>
        </div>
      </div>

      <div className="px-6 mt-4 flex flex-col gap-4">
        {notifications.map((notif) => (
          <div key={notif.id} className={`bg-zinc-50 dark:bg-[#202022] rounded-[20px] p-4 flex gap-4 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors ${notif.isNew ? 'border border-primary/20' : 'border border-transparent'}`}>
            <div className={`w-[48px] h-[48px] rounded-full shrink-0 flex items-center justify-center ${
              notif.type === 'workout' ? 'bg-orange-500/10 text-orange-500' :
              notif.type === 'meal' ? 'bg-green-500/10 text-green-500' :
              'bg-blue-500/10 text-blue-500'
            }`}>
              {notif.type === 'workout' ? <Dumbbell size={22} /> :
               notif.type === 'meal' ? <Apple size={22} /> :
               <Award size={22} />}
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-1">
                <h3 className={`text-[14px] font-bold ${notif.isNew ? 'text-white' : 'text-zinc-600 dark:text-zinc-300'}`}>{notif.title}</h3>
                {notif.isNew && <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />}
              </div>
              <p className="text-[12px] text-zinc-500 dark:text-zinc-400 font-medium leading-snug mb-2">{notif.desc}</p>
              <span className="text-[10px] text-zinc-500 font-bold">{notif.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
