import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, CheckCircle } from 'lucide-react';

export default function Scanner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  const [scanSuccess, setScanSuccess] = useState(false);

  useEffect(() => {
    let activeStream: MediaStream | null = null;
    
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'environment' } 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        activeStream = stream;
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    };

    startCamera();

    const timer = setTimeout(() => {
      setScanSuccess(true);
      setTimeout(() => {
        navigate('/app');
      }, 2000); // Navigate to home 2 seconds after success
    }, 3000); // Scan takes 3 seconds

    return () => {
      clearTimeout(timer);
      if (activeStream) {
        activeStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [navigate]);

  return (
    <div className="flex flex-col h-[100dvh] w-full bg-black relative sm:max-w-[480px] sm:mx-auto overflow-hidden">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full p-4 z-20 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent">
         <button onClick={() => navigate(-1)} className="text-white p-2 bg-black/40 rounded-full backdrop-blur-md">
            <X size={24} />
         </button>
         <div className="text-white font-semibold">Scan Trash</div>
         <div className="w-10"></div> {/* Spacer for centering */}
      </div>

      {/* Video Feed */}
      <video 
        ref={videoRef}
        autoPlay 
        playsInline 
        muted 
        className="w-full h-[100dvh] object-cover"
      />

      {/* Overlay guide */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
         <div className="w-[70%] max-w-[300px] aspect-square border-2 border-white/50 rounded-3xl relative">
            {/* Viewfinder corners */}
            <div className="absolute top-[-2px] left-[-2px] w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-3xl"></div>
            <div className="absolute top-[-2px] right-[-2px] w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-3xl"></div>
            <div className="absolute bottom-[-2px] left-[-2px] w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-3xl"></div>
            <div className="absolute bottom-[-2px] right-[-2px] w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-3xl"></div>
         </div>
      </div>
      
      {/* Scanning indicator */}
      {!scanSuccess && (
        <div className="absolute bottom-32 left-0 w-full text-center z-20">
          <div className="inline-flex items-center gap-3 bg-black/60 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-lg">
            <div className="animate-spin w-4 h-4 border-2 border-primary border-t-transparent rounded-full"></div>
            <span className="font-semibold text-sm tracking-wide">Analyzing item...</span>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {scanSuccess && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-sm px-6">
          <div className="bg-surface-container-lowest p-8 rounded-3xl w-full max-w-sm flex flex-col items-center text-center shadow-2xl scale-100 transform transition-all duration-300">
            <div className="w-16 h-16 bg-secondary-container text-on-secondary-container flex items-center justify-center rounded-full mb-4 shadow-lg border-4 border-primary-fixed">
              <CheckCircle size={32} />
            </div>
            <h2 className="text-2xl font-bold text-on-surface mb-2">Scan Berhasil!</h2>
            <p className="text-on-surface-variant mb-2 text-sm font-medium">Bahan dapat didaur ulang. Mengarahkan kembali...</p>
          </div>
        </div>
      )}
    </div>
  );
}
