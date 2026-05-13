import { useNavigate } from 'react-router-dom';
import { User, Settings, Edit3, Star, Leaf, Medal, CheckCircle2, Recycle, Receipt, Languages, HelpCircle, ChevronRight, LogOut } from 'lucide-react';
import { USER_AVATAR_IMAGE } from '../constants/images';

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface-container-low font-sans text-on-surface min-h-screen pb-12">
      <header className="bg-primary text-on-primary flex justify-between items-center px-5 h-[72px] rounded-b-3xl shadow-sm z-10 relative">
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <User size={24} />
        </button>
        <h1 className="text-xl font-bold">Profile</h1>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <Settings size={24} />
        </button>
      </header>

      <main className="px-5 pt-8">
        <section className="flex flex-col items-center mb-10">
          <div className="mb-4">
            <img 
              alt="Pak Hendra" 
              className="w-24 h-24 rounded-full object-cover border-4 border-surface shadow-sm" 
              src={USER_AVATAR_IMAGE}
            />
          </div>
          <h2 className="text-3xl font-bold text-on-surface mb-1">Pak Hendra</h2>
          <p className="text-base text-on-surface-variant mb-5">Sustainability Enthusiast</p>
          <button className="bg-primary-container text-on-primary-container font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-2 shadow-sm">
            <Edit3 size={18} />
            Edit Profile
          </button>
        </section>

        <section className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-5 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-3">
              <Star size={24} fill="currentColor" />
            </div>
            <p className="text-3xl font-bold text-primary mb-1">350</p>
            <p className="text-xs font-bold text-on-surface-variant tracking-wider uppercase">Points</p>
          </div>
          
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-5 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center mb-3">
              <Leaf size={24} fill="currentColor" />
            </div>
            <p className="text-3xl font-bold text-tertiary mb-1">4.2kg</p>
            <p className="text-xs font-bold text-on-surface-variant tracking-wider uppercase">CO2 Saved</p>
          </div>
          
          <div className="col-span-2 bg-gradient-to-br from-primary-container to-secondary-container rounded-2xl p-5 shadow-sm flex items-center justify-between text-on-primary-container">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface/20 flex items-center justify-center backdrop-blur-sm shadow-inner">
                <Medal size={28} className="text-[#FFD700]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-on-primary-fixed">Gold Rank</h3>
                <p className="text-xs font-bold text-on-primary-fixed/80 mt-0.5 uppercase tracking-wide">Top 10% Recyclers</p>
              </div>
            </div>
            <ChevronRight size={24} className="text-on-primary-fixed/60" />
          </div>
        </section>

        <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-5 shadow-sm mb-8 relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary-fixed/20 rounded-full blur-2xl z-0 pointer-events-none"></div>
          
          <div className="relative z-10 flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center">
                <CheckCircle2 size={24} className="text-primary" />
              </div>
              <h3 className="text-sm font-bold text-on-surface">Eco Explorer</h3>
            </div>
            <p className="text-sm text-primary font-bold">Level 4</p>
          </div>
          
          <div className="relative z-10">
            <div className="flex justify-between text-xs font-bold text-on-surface-variant mb-2">
              <span>Progress to Level 5</span>
              <span className="text-primary">75%</span>
            </div>
            <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden">
              <div className="bg-secondary h-full rounded-full transition-all duration-1000 ease-out" style={{ width: '75%' }}></div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm overflow-hidden flex flex-col mb-4">
          <button className="flex items-center justify-between p-5 hover:bg-surface-bright/50 transition-colors border-b border-outline-variant/20">
            <div className="flex items-center gap-4">
              <User className="text-on-surface-variant" size={20} />
              <span className="text-base font-medium text-on-surface">Edit Profile</span>
            </div>
            <ChevronRight size={20} className="text-outline" />
          </button>
          
          <button className="flex items-center justify-between p-5 hover:bg-surface-bright/50 transition-colors border-b border-outline-variant/20">
            <div className="flex items-center gap-4">
              <Recycle className="text-on-surface-variant" size={20} />
              <span className="text-base font-medium text-on-surface">My Upcycle Projects</span>
            </div>
            <ChevronRight size={20} className="text-outline" />
          </button>
          
          <button className="flex items-center justify-between p-5 hover:bg-surface-bright/50 transition-colors border-b border-outline-variant/20">
            <div className="flex items-center gap-4">
              <Receipt className="text-on-surface-variant" size={20} />
              <span className="text-base font-medium text-on-surface">Purchase History</span>
            </div>
            <ChevronRight size={20} className="text-outline" />
          </button>
          
          <button className="flex items-center justify-between p-5 hover:bg-surface-bright/50 transition-colors border-b border-outline-variant/20">
            <div className="flex items-center gap-4">
              <Languages className="text-on-surface-variant" size={20} />
              <span className="text-base font-medium text-on-surface">Language</span>
            </div>
            <ChevronRight size={20} className="text-outline" />
          </button>
          
          <button className="flex items-center justify-between p-5 hover:bg-surface-bright/50 transition-colors border-b border-outline-variant/20">
            <div className="flex items-center gap-4">
              <HelpCircle className="text-on-surface-variant" size={20} />
              <span className="text-base font-medium text-on-surface">Help Center</span>
            </div>
            <ChevronRight size={20} className="text-outline" />
          </button>
          
          <button 
            onClick={() => navigate('/')}
            className="flex items-center justify-between p-5 hover:bg-error/10 transition-colors"
          >
            <div className="flex items-center gap-4 text-error">
              <LogOut size={20} />
              <span className="text-base font-medium">Log Out</span>
            </div>
          </button>
        </section>
      </main>
    </div>
  );
}
