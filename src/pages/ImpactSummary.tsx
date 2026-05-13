import { useNavigate, useParams } from 'react-router-dom';
import { Leaf, Award, Home } from 'lucide-react';

const impactData = {
  default: { impact: '0.2 kg', xp: 50 },
  'bottle-plant-pot': { impact: '0.2 kg', xp: 50 },
  'plastic-apron': { impact: '0.5 kg', xp: 120 },
  'desk-organizer': { impact: '0.4 kg', xp: 90 },
  'bottle-planter-challenge': { impact: '0.8 kg', xp: 200 },
  'tin-can-lantern': { impact: '0.1 kg', xp: 30 }
};

export default function ImpactSummary() {
  const navigate = useNavigate();
  const { id } = useParams();

  const data = impactData[id as keyof typeof impactData] || impactData.default;

  return (
    <div className="flex flex-col h-screen bg-primary max-w-[480px] mx-auto overflow-hidden shadow-2xl relative text-white">
      {/* Simple patterned bg effect */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} 
      />

      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center z-10 relative">
        <div className="w-24 h-24 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-primary-fixed">
          <Leaf size={48} fill="currentColor" />
        </div>

        <h1 className="text-4xl font-black mb-2 tracking-tight">Awesome!</h1>
        <p className="text-primary-fixed-dim text-lg mb-8">You've successfully completed the upcycling project.</p>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 w-full max-w-sm border border-white/20 shadow-lg">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary-fixed mb-4">Your Impact</h2>
          
          <div className="flex justify-between items-center py-3 border-b border-white/10">
            <div className="flex items-center gap-3">
               <Leaf size={24} className="text-secondary-fixed" />
               <span className="font-medium text-lg">CO₂ Saved</span>
            </div>
            <span className="font-bold text-xl text-secondary-fixed">{data.impact}</span>
          </div>

          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-3">
               <Award size={24} className="text-[#FFD700]" />
               <span className="font-medium text-lg">XP Earned</span>
            </div>
            <span className="font-bold text-xl text-[#FFD700]">+{data.xp} XP</span>
          </div>
        </div>
      </main>

      <div className="p-6 relative z-10 shrink-0">
        <button 
          onClick={() => navigate('/app')}
          className="w-full bg-white text-primary font-bold py-4 rounded-full shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <Home size={20} />
          Back to Home
        </button>
      </div>
    </div>
  );
}
