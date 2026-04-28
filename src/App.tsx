import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/Home';
import WorkoutsScreen from './screens/Workouts';
import MealsScreen from './screens/Meals';
import SearchScreen from './screens/Search';
import FavoritesScreen from './screens/Favorites';
import ProfileScreen from './screens/Profile';
import NotificationsScreen from './screens/Notifications';
import AuthScreen from './screens/Auth';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if user has explicitly saved a preference
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!isLoggedIn) {
     return (
       <div className="w-full min-h-[100dvh] bg-zinc-100 dark:bg-black flex justify-center text-zinc-900 dark:text-white overflow-hidden font-sans">
         <div className="w-full max-w-[420px] relative bg-zinc-200 dark:bg-[#18181A] min-h-[100dvh] flex flex-col pt-safe overflow-y-auto no-scrollbar">
            <AnimatePresence mode="wait">
              <motion.div
                key="auth"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col"
              >
                <AuthScreen 
                  onLogin={() => setIsLoggedIn(true)} 
                  onBack={() => {}} 
                  isDark={isDark}
                  toggleTheme={toggleTheme}
                />
              </motion.div>
            </AnimatePresence>
         </div>
       </div>
     );
  }

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen setActiveTab={setActiveTab} isDark={isDark} toggleTheme={toggleTheme} />;
      case 'workouts':
        return <WorkoutsScreen setActiveTab={setActiveTab} />;
      case 'nutrition':
        return <MealsScreen setActiveTab={setActiveTab} />;
      case 'search':
        return <SearchScreen setActiveTab={setActiveTab} />;
      case 'favorites':
        return <FavoritesScreen setActiveTab={setActiveTab} />;
      case 'profile':
        return <ProfileScreen 
           setActiveTab={setActiveTab} 
           onSignOut={() => setIsLoggedIn(false)} 
           isDark={isDark}
           toggleTheme={toggleTheme}
        />;
      case 'notifications':
        return <NotificationsScreen setActiveTab={setActiveTab} />;
      default:
        return <HomeScreen setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="w-full min-h-[100dvh] bg-zinc-100 dark:bg-black flex justify-center text-zinc-900 dark:text-white overflow-hidden font-sans">
      <div className="w-full max-w-[420px] relative bg-zinc-200 dark:bg-[#18181A] min-h-[100dvh] flex flex-col pt-safe overflow-y-auto no-scrollbar pb-[100px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="flex-1"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
        
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

