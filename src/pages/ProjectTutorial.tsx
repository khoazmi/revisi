import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import bottleWasteImage from '../assets/bottle_waste.webp';
import choppedBottleImage from '../assets/chopped_bottle.webp';
import plasticWasteImage from '../assets/plastic_waste.webp';
import flattenPlasticImage from '../assets/flatten_plastic.jpg';
import ironingPlasticImage from '../assets/ironing_plastic.jpg';
import measureCardboardImage from '../assets/measure_cardboard.jpeg';
import assembleCardboardImage from '../assets/assemble_cardboard.jpg';
import cansImage from '../assets/cans.jpg';
import freezingCanImage from '../assets/freezing_can.jpg';
import holingCanImage from '../assets/holing_can.jpg';

const tutorials = {
  default: {
    title: 'Bottle Plant Pot',
    impact: '0.2 kg CO₂',
    xp: 50,
    steps: [
      {
        title: 'Prepare the Bottle',
        desc: 'Clean the plastic bottle thoroughly and remove any labels. Mark a line around the middle where you want to cut.',
        img: bottleWasteImage
      },
      {
        title: 'Cut & Shape',
        desc: 'Carefully cut along the marked line. You can shape the upper edge to look like animal ears if you want to make it cute!',
        img: choppedBottleImage
      },
      {
        title: 'Paint & Decorate',
        desc: 'Paint the outside of the bottle with acrylic paint. Let it dry, then draw faces or patterns.',
        img: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=600&h=400&fit=crop'
      },
      {
        title: 'Plant',
        desc: 'Fill the pot with soil and plant your favorite small succulent or herb. You are done!',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByibuKupxDSIckKgdi1pM069KhcFNk1gKldGxe-THyHUHcjn5--oGxsD9LBeTs09hlhrfJH5haegX73NjWpV2jO3ldERtuSBOHXA3gFY1Pgd-L5JnHerO_M7llDVSemSU6opUm5SJgCcfc43NG63M4nx2I-QIAvLe9iaDV04azW4W_635czSq3n8ljxrPMZ_S7pzCUxGSHFRQJkov5PKZLkZPsJt0U1NIoieNiwd1nrXBa_UheaKTfmWPEzfSBpc21hwiIXue_HrA'
      }
    ]
  },
  'bottle-plant-pot': {
    title: 'Bottle Plant Pot',
    impact: '0.2 kg CO₂',
    xp: 50,
    steps: [
      {
        title: 'Prepare the Bottle',
        desc: 'Clean the plastic bottle thoroughly and remove any labels. Mark a line around the middle where you want to cut.',
        img: bottleWasteImage
      },
      {
        title: 'Cut & Shape',
        desc: 'Carefully cut along the marked line. You can shape the upper edge to look like animal ears if you want to make it cute!',
        img: choppedBottleImage
      },
      {
        title: 'Paint & Decorate',
        desc: 'Paint the outside of the bottle with acrylic paint. Let it dry, then draw faces or patterns.',
        img: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=600&h=400&fit=crop'
      },
      {
        title: 'Plant',
        desc: 'Fill the pot with soil and plant your favorite small succulent or herb. You are done!',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByibuKupxDSIckKgdi1pM069KhcFNk1gKldGxe-THyHUHcjn5--oGxsD9LBeTs09hlhrfJH5haegX73NjWpV2jO3ldERtuSBOHXA3gFY1Pgd-L5JnHerO_M7llDVSemSU6opUm5SJgCcfc43NG63M4nx2I-QIAvLe9iaDV04azW4W_635czSq3n8ljxrPMZ_S7pzCUxGSHFRQJkov5PKZLkZPsJt0U1NIoieNiwd1nrXBa_UheaKTfmWPEzfSBpc21hwiIXue_HrA'
      }
    ]
  },
  'plastic-apron': {
    title: 'Plastic Apron',
    impact: '0.5 kg CO₂',
    xp: 120,
    steps: [
      {
        title: 'Collect Materials',
        desc: 'Gather large plastic bags or wrappers. Make sure they are clean and dry.',
        img: plasticWasteImage
      },
      {
        title: 'Cut and Flatten',
        desc: 'Cut the bags open and flatten them out to create large sheets of plastic.',
        img: flattenPlasticImage
      },
      {
        title: 'Ironing',
        desc: 'Layer the plastic sheets between parchment paper and lightly iron them to fuse them into a thicker, durable fabric.',
        img: ironingPlasticImage
      },
      {
        title: 'Sew and Finish',
        desc: 'Cut the fused plastic into an apron shape, attach straps, and sew the edges. Your eco-friendly apron is ready!',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYg-J8CXaDzKED0CBQ4_kqWG4Z086VhZybNacr5jfeK89e15sFCgry-xbiWM8avUYLiEHyZh__T5wZd2efGW5MhrfdI4WejKfbbtQfNY2m-tKiodU8UTMyAhgfuRXY0u9HWW3veewIz2G9oizfzNYbBE656JdygDedrvSZn_j2s7Hqj7LQzUfQJ-fZMInS9NxK_a0Uir2EOX5yofOfmR8htZJ3lzQO33suqUnIZTfy_vBEVV7rnr4KA-OZNb8aJBW1ATQYAcUTSvk'
      }
    ]
  },
  'desk-organizer': {
    title: 'Desk Organizer',
    impact: '0.4 kg CO₂',
    xp: 90,
    steps: [
      {
        title: 'Find Cardboard',
        desc: 'Collect sturdy cardboard boxes from your recent deliveries.',
        img: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=600&h=400&fit=crop'
      },
      {
        title: 'Measure and Cut',
        desc: 'Draw out the dimensions for the base, back, and dividers of your organizer. Carefully cut out the pieces.',
        img: measureCardboardImage
      },
      {
        title: 'Assemble',
        desc: 'Use strong glue or hot glue to assemble the pieces together. Make sure the structure is stable.',
        img: assembleCardboardImage
      },
      {
        title: 'Organize',
        desc: 'Once dry, place it on your desk and start organizing your pens, notebooks, and tools!',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUn6BGiVMXG_YbJsSmEsGKa-5Fr-Zkw-gi6V0e1mQmrt6zYlVchMMAZVmGCc4HHnwtkJUJOhBSfGaUCzoTkSLWRtdkmXbKeK5f2rxjfSa4h4MreVrIA7GX_0A3gui7Xjyb63R0QuBZu2s6RrLmwv_RKXim6H4cYDC9ub8hBtK4YbCyCHSsEwAgZJ3qAe_st0YnBdxP1Awp0RLFGz4g4FCtSilUsKy-GuTLMLpLP7Mbr54pxh1q8XlmG04A3SYadF0YpnhftoJWTeU'
      }
    ]
  },
  'bottle-planter-challenge': {
    title: 'Bottle Planter Challenge',
    impact: '0.8 kg CO₂',
    xp: 200,
    steps: [
      {
        title: 'Gather Multiple Bottles',
        desc: 'Collect several plastic bottles of different sizes to create a diverse hanging garden.',
        img: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=600&h=400&fit=crop'
      },
      {
        title: 'Create Openings',
        desc: 'Cut rectangular openings on the sides of the bottles to allow plants to grow outwards.',
        img: 'https://images.unsplash.com/photo-1595057097725-78e71bdac7b1?q=80&w=600&h=400&fit=crop'
      },
      {
        title: 'Add Drainage',
        desc: 'Puncture small holes at the bottom of each bottle to ensure proper water drainage.',
        img: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=600&h=400&fit=crop'
      },
      {
        title: 'String and Hang',
        desc: 'Thread a strong cord through the top of the bottles and hang them securely. Add soil and seeds!',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIXrB2W-KUNFaefViTiHLWzePT0fYtquRcqx1aD8SGBoS-SPxxy405tp83zuhheHQGTJLOkeuWpCAR5DyEOrsRIH77C3s4c0Prf9qne7FgHBXJCZu92wZ1Kk3HkN-asQWfYUaZgW2Z38zPfXWy66pp3GHRjxday_SFpT9cD1BgutGMDIf2H4SPaNive8F755PaEd3AX4PktKxWkmXbgg3Md2QRvrTRbT4PxORGPf89dNtYdZz30T_cv1NJH9RxSSj7l4htkyHNcAI'
      }
    ]
  },
  'tin-can-lantern': {
    title: 'Tin Can Lantern',
    impact: '0.1 kg CO₂',
    xp: 30,
    steps: [
      {
        title: 'Clean the Can',
        desc: 'Wash an empty tin can thoroughly and remove the paper label completely.',
        img: cansImage
      },
      {
        title: 'Freeze Water Inside',
        desc: 'Fill the can with water and freeze it solid. This prevents the can from denting when you punch holes.',
        img: freezingCanImage
      },
      {
        title: 'Punch the Pattern',
        desc: 'Use a hammer and a nail to punch holes into the can following a pattern or design.',
        img: holingCanImage
      },
      {
        title: 'Melt Ice and Light',
        desc: 'Let the ice melt, dry the can, and place a candle or LED light inside to see it glow.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANaWUdKycb_YvkMYVbyfm9H-FKhcXdTwHoImWYe4hNgq0NVcdQj2bF-ClSvmKH-KYvjihcmIwXmUr-AnQj0ZemXWtdMQjnVa1LDdsw-05KF9kU7SXSyNvpLtBdMZ91J_YizJAOhRr4C7tKw29AgIPBiLyLyOO9QZqj_TdLDFvkttzt8mUgsLh9UHlsaq4o5D9I-SGRO_WIymdkUZ0VpEeduvVo8XLC1Dr1QEVd-s1J-IR2TAAFHXWdTNWch21xZeJiNvq_VCQtyis'
      }
    ]
  }
};

export default function ProjectTutorial() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const tutorial = tutorials[id as keyof typeof tutorials] || tutorials.default;
  const isLastStep = currentStep === tutorial.steps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      navigate(`/impact-summary/${id}`);
    } else {
      setCurrentStep(s => s + 1);
    }
  };

  const progress = ((currentStep + 1) / tutorial.steps.length) * 100;

  return (
    <div className="flex flex-col h-screen bg-surface max-w-[480px] mx-auto overflow-hidden shadow-2xl relative">
      <header className="flex items-center px-4 h-16 shrink-0 bg-surface z-10 border-b border-outline-variant/10">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-surface-variant transition-colors">
          <ChevronLeft size={24} className="text-on-surface" />
        </button>
        <div className="flex-1 text-center font-bold text-on-surface mr-8">
          {tutorial.title}
        </div>
      </header>

      <div className="px-5 pt-4 pb-2 shrink-0">
        <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
          <div 
            className="bg-primary h-full rounded-full transition-all duration-300 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-center text-xs font-bold text-on-surface-variant mt-3 uppercase tracking-wide">
          Step {currentStep + 1} of {tutorial.steps.length}
        </div>
      </div>

      <main className="flex-1 overflow-y-auto pb-24 px-5 pt-3">
        <div className="rounded-3xl overflow-hidden aspect-[4/3] mb-6 shadow-sm border border-outline-variant/20 bg-surface-variant">
          <img 
            src={tutorial.steps[currentStep].img} 
            alt={tutorial.steps[currentStep].title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h2 className="text-2xl font-bold text-on-surface mb-3">
          {tutorial.steps[currentStep].title}
        </h2>
        <p className="text-base text-on-surface-variant leading-relaxed">
          {tutorial.steps[currentStep].desc}
        </p>
      </main>

      <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-surface via-surface to-transparent">
        <button 
          onClick={handleNext}
          className="w-full bg-primary text-white font-bold py-4 rounded-full shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          {isLastStep ? (
            <>
              Finish Project <Check size={20} />
            </>
          ) : (
            <>
              Next Step <ChevronRight size={20} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
