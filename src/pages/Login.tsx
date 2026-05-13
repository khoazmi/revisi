import { useNavigate } from 'react-router-dom';
import { X, Mail, Lock } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-background max-w-[480px] mx-auto overflow-hidden">
      <header className="w-full bg-primary h-[60px] flex items-center justify-between px-4 text-white shrink-0">
        <button onClick={() => navigate(-1)} className="p-1 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center">
          <X size={24} />
        </button>
        <h1 className="text-lg font-bold">Log In</h1>
        <button onClick={() => navigate('/signup')} className="text-sm font-semibold text-white/90 hover:text-white transition-colors">
            Sign Up
        </button>
      </header>

      <main className="flex-1 flex flex-col px-6 pt-12 pb-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-primary mb-2">Welcome Back</h2>
          <p className="text-on-surface-variant">Log in to track your environmental impact</p>
        </div>

        <form className="space-y-6 flex-1" onSubmit={(e) => { e.preventDefault(); navigate('/app'); }}>
          <div className="space-y-1">
            <label className="text-sm font-semibold text-on-surface-variant px-1 block" htmlFor="email">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={20} />
              <input 
                id="email" 
                type="email" 
                placeholder="name@example.com" 
                className="w-full bg-[#F3F4F4] border-none focus:ring-2 focus:ring-primary rounded-xl py-4 pl-12 pr-4 outline-none transition-all placeholder:text-outline"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-on-surface-variant px-1 block" htmlFor="password">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={20} />
              <input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-[#F3F4F4] border-none focus:ring-2 focus:ring-primary rounded-xl py-4 pl-12 pr-20 outline-none transition-all placeholder:text-outline"
              />
              <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-sm font-bold hover:underline">
                Show
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-primary text-white font-bold py-4 rounded-full shadow-md active:scale-[0.98] transition-transform duration-150 mt-8"
          >
            Log in
          </button>
        </form>

        <div className="mt-auto pt-6 text-center">
          <a href="#" className="flex justify-center text-primary font-semibold hover:underline mb-8">Forgot your password?</a>
          <p className="text-on-surface-variant">
            Don't have an account?{' '}
            <button onClick={() => navigate('/signup')} className="text-primary font-bold hover:underline">Sign up here</button>
          </p>
        </div>
      </main>
    </div>
  );
}
