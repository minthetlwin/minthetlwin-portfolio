import React, { useEffect } from 'react';
import '../css/preloader.css';

export default function Preloader({ isFadingOut }) {
  useEffect(() => {
    if (!isFadingOut) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isFadingOut]);

  return (
    <div className={`portfolio-preloader-screen ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="loader">
        
        {/* Global Vector Gradient Pools */}
        <svg height="0" width="0" className="absolute">
          <defs xmlns="http://www.w3.org/2000/svg">
            <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="b">
              <stop stopColor="#973BED"></stop>
              <stop stopColor="#007CFF" offset="1"></stop>
            </linearGradient>
            
            <linearGradient gradientUnits="userSpaceOnUse" y2="0" x2="0" y1="64" x1="0" id="c">
              <stop stopColor="#FFC800"></stop>
              <stop stopColor="#F0F" offset="1"></stop>
              <animateTransform 
                repeatCount="1" 
                fill="freeze" 
                keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1" 
                keyTimes="0; 0.25; 0.5; 0.75; 1" 
                dur="2.5s" 
                values="0 32 32;-270 32 32;-540 32 32;-810 32 32;-1080 32 32" 
                type="rotate" 
                attributeName="gradientTransform"
              />
            </linearGradient>
            
            <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="d">
              <stop stopColor="#00E0ED"></stop>
              <stop stopColor="#00DA72" offset="1"></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Name Vector Slices Wrapper */}
        <div className="name-row">
          {/* ==================== WORD 1: MIN ==================== */}
          <div className="word-block">
            <svg viewBox="0 0 64 64" className="inline-block glow-purple"><path stroke="url(#b)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="dash" pathLength="360" d="M 10,54 V 10 L 32,34 L 54,10 V 54" /></svg>
            <svg viewBox="0 0 64 64" className="inline-block glow-cyan"><path stroke="url(#d)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="dash" pathLength="360" d="M 20,10 H 44 M 32,10 V 54 M 20,54 H 44" /></svg>
            <svg viewBox="0 0 64 64" className="inline-block glow-purple"><path stroke="url(#b)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="dash" pathLength="360" d="M 12,54 V 10 L 52,54 V 10" /></svg>
          </div>

          <div className="word-spacer"></div>

          {/* ==================== WORD 2: THET ==================== */}
          <div className="word-block">
            <svg viewBox="0 0 64 64" className="inline-block glow-gold"><path stroke="url(#c)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" className="spin" pathLength="360" d="M 10,14 H 54 M 32,14 V 54" /></svg>
            <svg viewBox="0 0 64 64" className="inline-block glow-purple"><path stroke="url(#b)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="dash" pathLength="360" d="M 12,10 V 54 M 12,32 H 52 M 52,10 V 54" /></svg>
            <svg viewBox="0 0 64 64" className="inline-block glow-cyan"><path stroke="url(#d)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="dash" pathLength="360" d="M 50,10 H 14 V 54 H 50 M 14,32 H 42" /></svg>
            <svg viewBox="0 0 64 64" className="inline-block glow-purple"><path stroke="url(#b)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="dash" pathLength="360" d="M 10,10 H 54 M 32,10 V 54" /></svg>
          </div>

          <div className="word-spacer"></div>

          {/* ==================== WORD 3: LWIN ==================== */}
          <div className="word-block">
            <svg viewBox="0 0 64 64" className="inline-block glow-cyan"><path stroke="url(#d)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="dash" pathLength="360" d="M 18,10 V 54 H 52" /></svg>
            <svg viewBox="0 0 64 64" className="inline-block glow-purple"><path stroke="url(#b)" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" className="dash" pathLength="360" d="M 10,10 L 21,54 L 32,24 L 43,54 L 54,10" /></svg>
            <svg viewBox="0 0 64 64" className="inline-block glow-cyan"><path stroke="url(#d)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="dash" pathLength="360" d="M 20,10 H 44 M 32,10 V 54 M 20,54 H 44" /></svg>
            <svg viewBox="0 0 64 64" className="inline-block glow-purple"><path stroke="url(#b)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="dash" pathLength="360" d="M 12,54 V 10 L 52,54 V 10" /></svg>
          </div>
        </div>

        {/* Smooth Left-Right Infinite Progress Accent Bar */}
        <div className="track-bar"></div>

      </div>
    </div>
  );
}