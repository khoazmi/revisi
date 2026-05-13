import { Users, UserCircle, Search, SlidersHorizontal, Leaf, Wine, Package } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Community() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-on-surface pb-8 overflow-x-hidden relative" style={{ backgroundColor: '#FEFBF5' }}>
      {/* Background patterned mesh */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-50"
        style={{
            backgroundImage: `radial-gradient(at 0% 0%, rgba(45, 106, 79, 0.06) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(45, 106, 79, 0.08) 0px, transparent 50%)`
        }}
      />
      
      <header className="bg-primary text-white sticky top-0 z-40 border-b border-outline-variant/10 shadow-sm relative">
        <div className="flex justify-between items-center px-5 h-16 w-full">
          <div className="flex items-center gap-2">
            <Users size={24} />
            <h1 className="text-xl font-bold">Community</h1>
          </div>
          <button className="flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors">
            <UserCircle size={28} />
          </button>
        </div>
      </header>

      <main className="w-full px-5 pt-6 relative z-10">
        <div className="relative mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-outline-variant/30 flex items-center px-4 py-3 gap-3">
            <Search className="text-outline" size={20} />
            <input 
              type="text" 
              placeholder="Search Projects" 
              className="flex-1 bg-transparent border-none focus:ring-0 text-base outline-none p-0 placeholder:text-outline/60"
            />
            <SlidersHorizontal className="text-primary" size={20} />
          </div>
        </div>

        <section className="mb-10">
          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-md group">
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIXrB2W-KUNFaefViTiHLWzePT0fYtquRcqx1aD8SGBoS-SPxxy405tp83zuhheHQGTJLOkeuWpCAR5DyEOrsRIH77C3s4c0Prf9qne7FgHBXJCZu92wZ1Kk3HkN-asQWfYUaZgW2Z38zPfXWy66pp3GHRjxday_SFpT9cD1BgutGMDIf2H4SPaNive8F755PaEd3AX4PktKxWkmXbgg3Md2QRvrTRbT4PxORGPf89dNtYdZz30T_cv1NJH9RxSSj7l4htkyHNcAI"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-primary/20"></div>
            <div className="absolute inset-0 flex flex-col justify-end text-white p-6">
              <div className="flex items-center gap-2 mb-2">
                <Leaf className="text-secondary-fixed" size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary-fixed">Monthly Challenge</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 pr-4">"Turn Plastic Bottles Into Planters!"</h2>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-semibold opacity-90">Global Progress: 63%</span>
                </div>
                <div className="h-3 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary-fixed w-[63%] rounded-full shadow-[0_0_8px_rgba(160,244,200,0.5)]"></div>
                </div>
              </div>

              <button 
                onClick={() => navigate('/tutorial/bottle-planter-challenge')}
                className="w-max flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl text-sm font-bold transition-all hover:bg-secondary-fixed hover:text-on-secondary-fixed-variant active:scale-95 shadow-md"
              >
                Join Challenge
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-primary mb-6">Project Feed</h3>
          <div className="flex flex-col gap-4">
            
            <div 
              onClick={() => navigate('/tutorial/desk-organizer')}
              className="bg-primary/95 p-4 rounded-2xl flex gap-4 items-center shadow-sm hover:shadow-md cursor-pointer active:scale-[0.98] transition-all"
            >
              <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0 bg-surface">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALfPjvUr3IFPA6t-hi6AWHSL7-JrVT1BQ3Z4Abr1MmCs98sOAqF2usV6d9Ss4eKfKmPQApi3nCBXIrJUQLIoQpeFXqctUpGOZ0T6K0CSW0xPoguIQs9F5LmK1Gp3oKAs6obmdqLgxPAGTXaD7IpCVUOaqkCJwygtJIUZeBtYDv8JnmEnTS632TOGabuVTV9zeSC7CBgZ-MtJglmt4I1gbSdpniCGdbUKPgUIehSJeZSO7q47WkmY4ThUNgWzkhoqT8KTfKdSXxFoE"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1 text-white h-28">
                <div>
                  <h4 className="text-[17px] font-bold leading-tight mb-1.5">Bottle Desk Organizer</h4>
                  <div className="flex items-center gap-1.5 text-secondary-fixed">
                    <Leaf size={14} />
                    <span className="text-xs font-semibold">CO2 Saved: 0.4 kg</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-white/10 px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/10 shadow-sm backdrop-blur-sm">
                    <Wine size={14} />
                    <span className="text-xs font-semibold">x2</span>
                  </div>
                  <div className="bg-white/5 px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/5 opacity-60">
                    <Package size={14} />
                    <span className="text-xs font-semibold">x0</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              onClick={() => navigate('/tutorial/bottle-plant-pot')}
              className="bg-primary/95 p-4 rounded-2xl flex gap-4 items-center shadow-sm hover:shadow-md cursor-pointer active:scale-[0.98] transition-all"
            >
              <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0 bg-surface">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlNvHT2AY7mc4OG3tH9yuunwqmbdFiTr9R-Uo4hi2LFdns-VPPaK96SaPM5wFiqFNen1vFMRBiqCCZqBuvOQqqziHpdGtvl-01h0CoobvnrAf0ISbT6TwR944T3I6Q9ZvIW0nmGN3wia8WbK7VZ6lCPxxm1PrzinuthT2Jmx23Ljbd8oolIqSLGLzLcAlH7ydz5dOXcHQanrbQzX9OD1RmM18yzAhMRmyCyrePh21tQuOk1KGKjFyKBjUEllNTWUUT8pIkeltb6J0"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1 text-white h-28">
                <div>
                  <h4 className="text-[17px] font-bold leading-tight mb-1.5">Bottle Plant Pot</h4>
                  <div className="flex items-center gap-1.5 text-secondary-fixed">
                    <Leaf size={14} />
                    <span className="text-xs font-semibold">CO2 Saved: 0.2 kg</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-white/10 px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/10 shadow-sm backdrop-blur-sm">
                    <Wine size={14} />
                    <span className="text-xs font-semibold">x4</span>
                  </div>
                  <div className="bg-white/5 px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/5 opacity-60">
                    <Package size={14} />
                    <span className="text-xs font-semibold">x0</span>
                  </div>
                </div>
              </div>
            </div>

             <div 
              onClick={() => navigate('/tutorial/tin-can-lantern')}
              className="bg-primary/95 p-4 rounded-2xl flex gap-4 items-center shadow-sm hover:shadow-md cursor-pointer active:scale-[0.98] transition-all"
            >
              <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0 bg-surface">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuANaWUdKycb_YvkMYVbyfm9H-FKhcXdTwHoImWYe4hNgq0NVcdQj2bF-ClSvmKH-KYvjihcmIwXmUr-AnQj0ZemXWtdMQjnVa1LDdsw-05KF9kU7SXSyNvpLtBdMZ91J_YizJAOhRr4C7tKw29AgIPBiLyLyOO9QZqj_TdLDFvkttzt8mUgsLh9UHlsaq4o5D9I-SGRO_WIymdkUZ0VpEeduvVo8XLC1Dr1QEVd-s1J-IR2TAAFHXWdTNWch21xZeJiNvq_VCQtyis"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1 text-white h-28">
                <div>
                  <h4 className="text-[17px] font-bold leading-tight mb-1.5">Tin Can Lantern</h4>
                  <div className="flex items-center gap-1.5 text-secondary-fixed">
                    <Leaf size={14} />
                    <span className="text-xs font-semibold">CO2 Saved: 0.1 kg</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-white/5 px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/5 opacity-60">
                    <Wine size={14} />
                    <span className="text-xs font-semibold">x0</span>
                  </div>
                  <div className="bg-white/10 px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/10 shadow-sm backdrop-blur-sm">
                    <Package size={14} />
                    <span className="text-xs font-semibold">x3</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
