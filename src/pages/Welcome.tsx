import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Step 1: Scan Your Trash',
    desc: 'Detect recyclable vs non-recyclable items instantly with our AI-powered scanner.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBwisuNMUoqiX3MRFiBaOro-pzgiuUPHOUs1MMv0kk7uKxG0wu5_rT-Ao6P4NmmThgtvTHhdtEdvoVQiCf-5MFr0a1KsVPrHR0RA7UvBt4E6UAZik48beuuBoirBZUoZ2IgShIeg3bVga-cDF3X57r__u7h88BsZ03ao6S4S5SIj9l3PjZ4E3p9Ovw48ivnGaLc6HLnLnPFLu3EI4M75UDYViG4C3CgX2oxjkiNvdVORuvs-U0mPpzdfBuPSRujylc0cz7xh68gYc',
  },
  {
    title: 'Step 2: Create Something New',
    desc: 'Get personalized upcycle projects based on what you scanned in your local area.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDujPfF1U9eJe2Hre68L6jaiJKbc936nJEW6l1B8JqOSUqGFDxib9lkm1Eu7kNXSqiOODaBHgKM0cycGYsvjYqMnPVrzflSeCA89oXQtlX5xXkKiPG9KToakERWi6kbril6en95uyFR9gLZrsmIJ4Mr89bFfj_JLeGxZ4dkukynntjQkWzHkk5aR5zYQvgoMw7uuDfIRN0UwkWsrz9QHwC2J5cV1wFTAFIDMfYavE4Hhwe2ZD2o1gk2HKWGZj2eHwjmk4NzLsowlkw',
  },
  {
    title: 'Step 3: Track Your Impact',
    desc: 'See how much waste you\'ve saved from landfills and share your success with others.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBTZOS5Z2e00pNSLJAM9mD6jtp0Y04i69Zo-wlIXkpXR0rMBDNVSrZSRdSXJQzWsFOuoIrUAqEY2W0K4v191ZurHCdpLcITrNjE-1KGkUMrHuEKX7UGesVHP48bGXJAnrOb5QiOiWp3JJOJPsRhoC1FFopc9nbPPaq1XfJ1vvP7W-LJPsg2f17unIVzbJ2sIYagaZIpvoLc53qZn5GWUoepeV3BLYTRwDLFSkYBn7gnGE-KICor2sTGnrOMaUyrE9gnPfE74encoA',
  },
];

export default function Welcome() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-surface max-w-[480px] mx-auto shadow-2xl overflow-hidden relative">
      <header className="bg-primary pt-10 pb-6 px-5 text-center flex-shrink-0 relative">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} 
        />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl tracking-tight font-black text-on-primary flex items-center gap-2">RE-VISI</h1>
          <p className="font-bold text-base mt-1 text-on-primary">Join the Re-Visi Movement.</p>
          <p className="text-[10px] mt-0.5 text-on-primary/80 uppercase tracking-widest">Scan smarter, save more, and create better.</p>
        </div>
        <div className="absolute -bottom-6 left-0 right-0 h-12 bg-surface rounded-t-[3rem]"></div>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center py-4 relative bg-surface mt-[-24px] z-10 rounded-t-[2rem]">
        <div className="w-full relative h-[380px] overflow-hidden">
            <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((s, i) => (
                    <div key={i} className="min-w-full flex flex-col items-center px-12 text-center flex-shrink-0">
                        <div className="w-full max-w-[200px] aspect-square flex items-center justify-center mb-6 bg-surface-container-lowest rounded-3xl p-4 shadow-sm">
                            <img alt={s.title} className="w-full h-full object-contain" src={s.img} />
                        </div>
                        <h3 className="text-2xl font-bold text-on-surface mb-3">{s.title}</h3>
                        <p className="text-sm text-on-surface-variant leading-relaxed max-w-[280px]">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="flex gap-2 mt-2">
            {slides.map((_, i) => (
                <div key={i} className={`h-1.5 w-10 rounded-full transition-colors duration-300 ${i === current ? 'bg-primary' : 'bg-surface-variant'}`} />
            ))}
        </div>
      </main>

      <footer className="px-6 pb-8 space-y-3 w-full bg-surface relative z-20 flex-shrink-0">
        <button 
          onClick={() => navigate('/app')}
          className="w-full h-12 bg-primary text-on-primary text-sm rounded-full font-bold shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          Start Directly (Skip Login)
          <ArrowRight size={20} />
        </button>
        <button 
          onClick={() => navigate('/signup')}
          className="w-full h-12 border-2 border-primary text-primary bg-transparent text-sm rounded-full font-bold hover:bg-primary/5 active:scale-[0.98] transition-all"
        >
          Sign Up
        </button>
        <button 
          onClick={() => navigate('/login')}
          className="w-full h-12 border-2 border-primary/20 text-on-surface bg-transparent text-sm rounded-full font-bold hover:bg-surface-container-low active:scale-[0.98] transition-all"
        >
          Log In
        </button>
        <p className="text-center text-[11px] text-on-surface-variant pt-2">
          By continuing, you agree to our <a className="underline font-bold" href="#">Terms of Service</a>.
        </p>
      </footer>
    </div>
  );
}
