import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, X, CheckCircle } from 'lucide-react';

export default function Scanner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const captureCanvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);

  useEffect(() => {
    let activeStream: MediaStream | null = null;
    
    const startCamera = async () => {
      try {
        setCameraError(null);
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'environment' } 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        activeStream = stream;
      } catch (err) {
        console.error("Error accessing camera:", err);
        setCameraError('Camera tidak bisa diakses. Coba izinkan kamera dan refresh halaman.');
      }
    };

    startCamera();

    return () => {
      if (activeStream) {
        activeStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [navigate]);

  const handleTakePhoto = () => {
    const video = videoRef.current;
    const canvas = captureCanvasRef.current;

    if (!video || !canvas || !video.videoWidth || !video.videoHeight) {
      return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');

    if (!context) {
      return;
    }

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    setCapturedPhoto(canvas.toDataURL('image/jpeg', 0.9));
    setIsAnalyzing(true);

    window.setTimeout(() => {
      navigate('/tutorial/bottle-plant-pot');
    }, 1800);
  };

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

      <canvas ref={captureCanvasRef} className="hidden" />

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
      
      {/* Status message */}
      {cameraError && (
        <div className="absolute bottom-32 left-0 w-full text-center z-20 px-6">
          <div className="inline-flex items-center gap-3 bg-red-500/85 backdrop-blur-md text-white px-5 py-3 rounded-full shadow-lg">
            <span className="font-semibold text-sm tracking-wide">{cameraError}</span>
          </div>
        </div>
      )}

      {/* Photo Button */}
      {!isAnalyzing && !cameraError && (
        <div className="absolute bottom-28 left-0 w-full z-20 flex justify-center px-6">
          <button
            onClick={handleTakePhoto}
            className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl border-4 border-white/60 active:scale-95 transition-transform"
            aria-label="Take photo"
          >
            <Camera size={28} />
          </button>
        </div>
      )}

      {/* Analyzing Popup */}
      {isAnalyzing && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-sm px-6">
          <div className="bg-surface-container-lowest p-8 rounded-3xl w-full max-w-sm flex flex-col items-center text-center shadow-2xl scale-100 transform transition-all duration-300">
            <div className="w-16 h-16 bg-secondary-container text-on-secondary-container flex items-center justify-center rounded-full mb-4 shadow-lg border-4 border-primary-fixed animate-pulse">
              <CheckCircle size={32} />
            </div>
            <h2 className="text-2xl font-bold text-on-surface mb-2">Analyzing...</h2>
            <p className="text-on-surface-variant mb-4 text-sm font-medium">Please wait while we identify the item.</p>
            {capturedPhoto && (
              <div className="w-full rounded-2xl overflow-hidden border border-outline-variant/20 shadow-sm mb-2">
                <img src={capturedPhoto} alt="Captured preview" className="w-full h-40 object-cover" />
              </div>
            )}
            <div className="flex items-center gap-3 text-sm text-on-surface-variant">
              <div className="animate-spin w-4 h-4 border-2 border-primary border-t-transparent rounded-full"></div>
              <span>Redirecting to project...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
