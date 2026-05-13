import { Home as HomeIcon, UserCircle, QrCode, ClipboardList, Star, Recycle, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { USER_AVATAR_IMAGE } from '../constants/images';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-background pb-32">
      <header className="bg-primary text-on-primary sticky top-0 z-40 flex justify-between items-center px-5 h-[72px] w-full shadow-sm">
        <div className="flex items-center gap-3">
          <HomeIcon size={24} />
          <span className="text-2xl font-bold">Home</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
            <UserCircle size={28} />
          </button>
        </div>
      </header>

      <main className="px-5 pt-6 space-y-6">
        <section className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-on-surface">Hello, Pak Arief! 👋🏻</h1>
          </div>
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary-fixed shadow-sm">
            <img 
              alt="Profile" 
              className="w-full h-full object-cover" 
              src={USER_AVATAR_IMAGE}
            />
          </div>
        </section>

        <section>
          <div className="bg-gradient-to-br from-primary-container to-secondary p-6 rounded-2xl shadow-sm text-on-primary">
            <h2 className="text-lg mb-4">Transform waste into creation</h2>
            <button 
              onClick={() => navigate('/app/scan')}
              className="bg-surface-container/20 backdrop-blur-sm border border-white/20 text-on-primary font-bold text-sm px-6 py-2.5 rounded-full flex items-center gap-2 w-max active:scale-95 transition-transform"
            >
              <QrCode size={20} />
              Start Scanning
              <ChevronRight size={16} />
            </button>
          </div>
        </section>

        <section className="grid grid-cols-3 gap-4">
          <div className="bg-surface-container-low p-3 rounded-2xl flex flex-col items-center text-center shadow-sm border border-outline-variant/10">
            <div className="w-10 h-10 bg-secondary-container text-on-secondary-container rounded-xl flex items-center justify-center mb-2">
              <QrCode size={20} />
            </div>
            <span className="text-2xl font-bold text-primary">7</span>
            <span className="text-xs font-bold text-on-surface-variant mt-1">Total Scans</span>
          </div>
          <div className="bg-surface-container-low p-3 rounded-2xl flex flex-col items-center text-center shadow-sm border border-outline-variant/10">
            <div className="w-10 h-10 bg-secondary-container text-on-secondary-container rounded-xl flex items-center justify-center mb-2">
              <ClipboardList size={20} />
            </div>
            <span className="text-2xl font-bold text-primary">4</span>
            <span className="text-xs font-bold text-on-surface-variant mt-1">Projects</span>
          </div>
          <div className="bg-surface-container-low p-3 rounded-2xl flex flex-col items-center text-center shadow-sm border border-outline-variant/10">
            <div className="w-10 h-10 bg-secondary-container text-on-secondary-container rounded-xl flex items-center justify-center mb-2">
              <Star size={20} fill="currentColor" />
            </div>
            <span className="text-2xl font-bold text-primary">350</span>
            <span className="text-xs font-bold text-on-surface-variant mt-1">Points</span>
          </div>
        </section>

        <section className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/20 shadow-sm">
          <div className="mb-2">
            <h3 className="text-2xl font-bold text-on-surface flex items-center gap-2">
              Badge: Eco Explorer! 🤠
            </h3>
            <p className="text-on-surface-variant">CO₂ Saved: 4.2 kg</p>
          </div>
          <div className="relative w-full h-3 bg-surface-container-high rounded-full overflow-hidden mt-4 mb-2">
            <div className="absolute top-0 left-0 h-full bg-secondary w-[26%] rounded-full"></div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <span className="text-xs font-bold text-on-surface-variant flex items-center gap-1">
              <Star size={14} /> 26/1000 XP
            </span>
            <div className="w-8 h-8 bg-secondary text-on-secondary rounded-full flex items-center justify-center shadow-md">
              <Recycle size={18} />
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-on-surface">Upcycle Project for You</h2>
            <button className="text-primary text-sm font-bold">See all</button>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-5 px-5 snap-x">
            <div 
              onClick={() => navigate('/tutorial/bottle-plant-pot')}
              className="min-w-[140px] sm:min-w-[180px] bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 snap-start flex-shrink-0 cursor-pointer active:scale-95 transition-transform"
            >
              <div className="h-[120px] w-full">
                <img 
                  alt="Bottle Plant Pot" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuByibuKupxDSIckKgdi1pM069KhcFNk1gKldGxe-THyHUHcjn5--oGxsD9LBeTs09hlhrfJH5haegX73NjWpV2jO3ldERtuSBOHXA3gFY1Pgd-L5JnHerO_M7llDVSemSU6opUm5SJgCcfc43NG63M4nx2I-QIAvLe9iaDV04azW4W_635czSq3n8ljxrPMZ_S7pzCUxGSHFRQJkov5PKZLkZPsJt0U1NIoieNiwd1nrXBa_UheaKTfmWPEzfSBpc21hwiIXue_HrA" 
                />
              </div>
              <div className="p-3 bg-primary/5">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block mb-0.5">Outdoor</span>
                <h4 className="text-sm font-bold text-on-surface truncate">Bottle Plant Pot</h4>
                <p className="text-sm text-primary font-bold mt-0.5">IDR 35.000</p>
              </div>
            </div>

            <div 
              onClick={() => navigate('/tutorial/plastic-apron')}
              className="min-w-[140px] sm:min-w-[180px] bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 snap-start flex-shrink-0 cursor-pointer active:scale-95 transition-transform"
            >
              <div className="h-[120px] w-full">
                <img 
                  alt="Plastic Apron" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYg-J8CXaDzKED0CBQ4_kqWG4Z086VhZybNacr5jfeK89e15sFCgry-xbiWM8avUYLiEHyZh__T5wZd2efGW5MhrfdI4WejKfbbtQfNY2m-tKiodU8UTMyAhgfuRXY0u9HWW3veewIz2G9oizfzNYbBE656JdygDedrvSZn_j2s7Hqj7LQzUfQJ-fZMInS9NxK_a0Uir2EOX5yofOfmR8htZJ3lzQO33suqUnIZTfy_vBEVV7rnr4KA-OZNb8aJBW1ATQYAcUTSvk" 
                />
              </div>
              <div className="p-3 bg-primary/5">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block mb-0.5">Kitchen</span>
                <h4 className="text-sm font-bold text-on-surface truncate">Plastic Apron</h4>
                <p className="text-sm text-primary font-bold mt-0.5">IDR 20.000</p>
              </div>
            </div>

             <div 
              onClick={() => navigate('/tutorial/desk-organizer')}
              className="min-w-[140px] sm:min-w-[180px] bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 snap-start flex-shrink-0 cursor-pointer active:scale-95 transition-transform"
            >
              <div className="h-[120px] w-full bg-surface-variant flex items-center justify-center">
                 <img 
                  alt="Cardboard Organizer" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUn6BGiVMXG_YbJsSmEsGKa-5Fr-Zkw-gi6V0e1mQmrt6zYlVchMMAZVmGCc4HHnwtkJUJOhBSfGaUCzoTkSLWRtdkmXbKeK5f2rxjfSa4h4MreVrIA7GX_0A3gui7Xjyb63R0QuBZu2s6RrLmwv_RKXim6H4cYDC9ub8hBtK4YbCyCHSsEwAgZJ3qAe_st0YnBdxP1Awp0RLFGz4g4FCtSilUsKy-GuTLMLpLP7Mbr54pxh1q8XlmG04A3SYadF0YpnhftoJWTeU" 
                />
              </div>
              <div className="p-3 bg-primary/5">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block mb-0.5">Office</span>
                <h4 className="text-sm font-bold text-on-surface truncate">Desk Organizer</h4>
                <p className="text-sm text-primary font-bold mt-0.5">IDR 45.000</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
