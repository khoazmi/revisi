import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Home, Barcode, Users, User, ShoppingCart } from 'lucide-react';

export default function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="mobile-app-shell w-full bg-surface flex flex-col relative overflow-hidden">
      <main className="mobile-app-content flex-1 overflow-y-auto hide-scrollbar">
        <Outlet />
      </main>

      <nav className="mobile-bottom-nav absolute bottom-0 left-0 w-full z-50 bg-surface-container/90 backdrop-blur-xl border-t border-outline-variant/10 flex justify-around items-center rounded-t-xl shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
        <button
          onClick={() => navigate('/app')}
          className={`flex flex-col items-center justify-center transition-all ${
            location.pathname === '/app' || location.pathname === '/app/'
              ? 'bg-secondary-container text-on-secondary-container rounded-full w-12 h-12'
              : 'text-on-surface-variant w-12 h-12'
          }`}
        >
          <Home size={24} strokeWidth={location.pathname === '/app' || location.pathname === '/app/' ? 2.5 : 2} />
        </button>

        <button
          onClick={() => navigate('/app/community')}
          className={`flex flex-col items-center justify-center transition-all ${
            location.pathname.includes('/community')
              ? 'bg-secondary-container text-on-secondary-container rounded-full w-12 h-12'
              : 'text-on-surface-variant w-12 h-12'
          }`}
        >
          <Users size={24} strokeWidth={location.pathname.includes('/community') ? 2.5 : 2} />
        </button>

        <div className="relative -top-6">
          <button 
            onClick={() => navigate('/app/scan')}
            className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-xl border-[6px] border-background active:scale-90 transition-transform">
            <Barcode className="text-on-primary" size={32} />
          </button>
        </div>

        <button
          onClick={() => navigate('/app/marketplace')}
          className={`flex flex-col items-center justify-center transition-all ${
            location.pathname.includes('/marketplace')
              ? 'bg-secondary-container text-on-secondary-container rounded-full w-12 h-12'
              : 'text-on-surface-variant w-12 h-12'
          }`}
        >
          <ShoppingCart size={24} strokeWidth={location.pathname.includes('/marketplace') ? 2.5 : 2} />
        </button>

        <button
          onClick={() => navigate('/app/profile')}
          className={`flex flex-col items-center justify-center transition-all ${
            location.pathname.includes('/profile')
              ? 'bg-secondary-container text-on-secondary-container rounded-full w-12 h-12'
              : 'text-on-surface-variant w-12 h-12'
          }`}
        >
          <User size={24} strokeWidth={location.pathname.includes('/profile') ? 2.5 : 2} />
        </button>
      </nav>
    </div>
  );
}
