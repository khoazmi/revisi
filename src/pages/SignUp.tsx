import { useNavigate } from 'react-router-dom';
import { X, Leaf } from 'lucide-react';

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-background max-w-[480px] mx-auto overflow-hidden">
      <header className="bg-primary h-[60px] w-full flex items-center justify-between px-4 text-white shrink-0">
        <button onClick={() => navigate(-1)} className="p-1 hover:bg-white/10 rounded-full transition-colors flex items-center">
          <X size={24} />
        </button>
        <h1 className="text-lg font-bold">Sign Up</h1>
        <button onClick={() => navigate('/login')} className="text-sm font-bold text-white/90 hover:text-white">Login</button>
      </header>

      <main className="flex-1 flex flex-col px-6 pt-10 pb-8 overflow-y-auto">
        <div className="mb-10 text-center">
          <div className="flex justify-center mb-4">
            <Leaf className="text-primary" size={48} fill="currentColor" />
          </div>
          <h2 className="text-3xl font-bold text-on-surface">Create Account</h2>
          <p className="text-on-surface-variant mt-2">Join the systematic recycling movement today.</p>
        </div>

        <form className="space-y-5 flex-1" onSubmit={(e) => { e.preventDefault(); navigate('/app'); }}>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full bg-[#F3F4F4] border-none rounded-xl py-4 px-4 text-on-surface placeholder:text-outline shadow-sm focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
          
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-[#F3F4F4] border-none rounded-xl py-4 px-4 text-on-surface placeholder:text-outline shadow-sm focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
          
          <div className="relative">
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-[#F3F4F4] border-none rounded-xl py-4 pl-4 pr-16 text-on-surface placeholder:text-outline shadow-sm focus:ring-2 focus:ring-primary transition-all"
            />
            <button type="button" className="absolute inset-y-0 right-0 pr-4 flex items-center text-primary font-bold text-sm">
              Show
            </button>
          </div>

          <div className="flex items-start gap-3 pt-2">
            <input 
              type="checkbox" 
              id="newsletter" 
              className="mt-1 h-5 w-5 border-2 border-outline rounded text-primary focus:ring-primary bg-transparent"
            />
            <label htmlFor="newsletter" className="text-sm text-on-surface-variant leading-tight">
              Yes, I want to receive the RE-VISI newsletter.
            </label>
          </div>

          <div className="pt-6 pb-4">
            <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-full shadow-lg active:scale-[0.98] transition-all flex items-center justify-center">
              Sign Up
            </button>
          </div>
        </form>

        <div className="text-center mt-auto pt-6 border-t border-outline/10">
          <p className="text-on-surface-variant">
            Already have an account?{' '}
            <button onClick={() => navigate('/login')} className="text-primary font-bold hover:underline">Log in here</button>
          </p>
        </div>
      </main>
    </div>
  );
}
