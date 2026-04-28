import { useState } from 'react';
import { ChevronLeft, Mail, Lock, Eye, EyeOff, User, Sun, Moon } from 'lucide-react';

export default function AuthScreen({ 
  onLogin, 
  onBack,
  isDark,
  toggleTheme
}: { 
  onLogin: () => void;
  onBack: () => void;
  isDark: boolean;
  toggleTheme: () => void;
}) {
  const [view, setView] = useState<'login' | 'register' | 'forgot'>('login');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (view === 'login' || view === 'register') {
      onLogin();
    } else {
      setView('login'); // back to login after reset
    }
  };

  return (
    <div className="flex flex-col w-full text-zinc-900 dark:text-white min-h-[100dvh] bg-zinc-200 dark:bg-[#18181A] px-6">
      {/* Header */}
      <div className="pt-12 pb-8 flex items-center justify-between z-20 h-16">
        <div /> {/* Placeholder for back button if needed */}
        <button className="text-zinc-500 p-2" onClick={toggleTheme} type="button">
          {isDark ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center pb-20">
        <div className="mb-10 text-center">
           <h1 className="text-[28px] font-bold text-primary mb-2">
             {view === 'login' && 'Welcome Back'}
             {view === 'register' && 'Create Account'}
             {view === 'forgot' && 'Reset Password'}
           </h1>
           <p className="text-[14px] text-zinc-500 dark:text-zinc-400 font-medium">
             {view === 'login' && 'Log in to continue your fitness journey'}
             {view === 'register' && 'Join us and start challenging your limits'}
             {view === 'forgot' && 'Enter your email to reset your password'}
           </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {view === 'register' && (
             <div className="bg-zinc-50 dark:bg-[#202022] rounded-[20px] flex items-center px-5 py-4 border border-zinc-200 dark:border-[#202022] focus-within:border-primary transition-colors">
               <User size={20} className="text-zinc-500 mr-4 shrink-0" />
               <input 
                  type="text" 
                  placeholder="Full Name" 
                  required
                  className="bg-transparent border-none outline-none flex-1 min-w-0 w-full text-[15px] text-zinc-900 dark:text-white placeholder-zinc-500"
               />
             </div>
          )}

          <div className="bg-zinc-50 dark:bg-[#202022] rounded-[20px] flex items-center px-5 py-4 border border-zinc-200 dark:border-[#202022] focus-within:border-primary transition-colors">
            <Mail size={20} className="text-zinc-500 mr-4 shrink-0" />
            <input 
               type="email" 
               placeholder="Email Address" 
               required
               className="bg-transparent border-none outline-none flex-1 min-w-0 w-full text-[15px] text-zinc-900 dark:text-white placeholder-zinc-500"
            />
          </div>

          {(view === 'login' || view === 'register') && (
            <div className="bg-zinc-50 dark:bg-[#202022] rounded-[20px] flex items-center px-5 py-4 border border-zinc-200 dark:border-[#202022] focus-within:border-primary transition-colors">
              <Lock size={20} className="text-zinc-500 mr-4 shrink-0" />
              <input 
                 type={showPassword ? "text" : "password"} 
                 placeholder="Password" 
                 required
                 className="bg-transparent border-none outline-none flex-1 min-w-0 w-full text-[15px] text-zinc-900 dark:text-white placeholder-zinc-500"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="text-zinc-500 p-1 shrink-0 ml-2"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          )}

          {view === 'login' && (
            <div className="flex justify-end">
               <button 
                 type="button" 
                 onClick={() => setView('forgot')}
                 className="text-[12px] text-primary font-bold"
               >
                  Forgot Password?
               </button>
            </div>
          )}

          <button 
             type="submit" 
             className="w-full bg-primary text-white font-bold py-4 rounded-[20px] mt-4 shadow-lg shadow-primary/30 active:scale-95 transition-transform"
          >
             {view === 'login' && 'Log In'}
             {view === 'register' && 'Sign Up'}
             {view === 'forgot' && 'Send Reset Link'}
          </button>
        </form>

        <div className="mt-8 text-center">
           {view === 'login' && (
             <p className="text-[13px] text-zinc-500 dark:text-zinc-400 font-medium">
               Don't have an account?{' '}
               <button onClick={() => setView('register')} className="text-primary font-bold">Sign Up</button>
             </p>
           )}
           {view === 'register' && (
             <p className="text-[13px] text-zinc-500 dark:text-zinc-400 font-medium">
               Already have an account?{' '}
               <button onClick={() => setView('login')} className="text-primary font-bold">Log In</button>
             </p>
           )}
           {view === 'forgot' && (
             <p className="text-[13px] text-zinc-500 dark:text-zinc-400 font-medium">
               Remember your password?{' '}
               <button onClick={() => setView('login')} className="text-primary font-bold">Log In</button>
             </p>
           )}
        </div>
      </div>
    </div>
  );
}
