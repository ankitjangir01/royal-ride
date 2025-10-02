import React, { useEffect, useState } from 'react';

const DeveloperPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000); // Show after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed bottom-8 right-8 z-50 bg-black text-white shadow-2xl rounded-2xl px-6 py-5 flex flex-col items-end min-w-[260px] border-2 border-gold font-sans animate-popup-bounce-in"
      style={{
        animation: 'popupBounceIn 0.9s cubic-bezier(0.23,1.07,0.32,1)',
        boxShadow: '0 8px 32px 0 rgba(169, 141, 21, 0.15)',
      }}
    >
      <style>{`
        @keyframes popupBounceIn {
          0% { opacity: 0; transform: translateY(80px) scale(0.7); }
          60% { opacity: 1; transform: translateY(-10px) scale(1.08); }
          80% { transform: translateY(2px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .pulse-gold {
          box-shadow: 0 0 0 0 #A98D15, 0 0 0 4px rgba(169,141,21,0.15);
          animation: pulseGold 1.5s infinite;
        }
        @keyframes pulseGold {
          0% { box-shadow: 0 0 0 0 #A98D15, 0 0 0 4px rgba(169,141,21,0.15); }
          70% { box-shadow: 0 0 0 8px rgba(169,141,21,0.15), 0 0 0 12px rgba(169,141,21,0.07); }
          100% { box-shadow: 0 0 0 0 #A98D15, 0 0 0 4px rgba(169,141,21,0.15); }
        }
        .wave {
          display: inline-block;
          animation: waveHand 1.6s infinite;
          transform-origin: 70% 70%;
        }
        @keyframes waveHand {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
      <button
        className="text-gold hover:text-white text-2xl mb-1 self-end transition-colors duration-200"
        onClick={() => setShow(false)}
        aria-label="Close"
        style={{ lineHeight: 1 }}
      >
        ×
      </button>
      <div className="w-full flex flex-col items-center">
        <div className="font-pacifico text-lg text-gold mb-1 flex items-center gap-1">
          <span className="wave">👋</span> Developer Contact
        </div>
        <div className="text-sm text-center mb-2">Have feedback or need help?</div>
        <span
          className="text-gold font-medium underline cursor-pointer hover:text-white transition-colors duration-200"
          onClick={() => window.open('mailto:jangirankit@proton.me')}
        >
          jangirankit@proton.me
        </span>
      </div>
    </div>
  );
};

export default DeveloperPopup;
