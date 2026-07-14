"use client";

import React, { useState, useEffect } from "react";

export default function CookieBanner() {
  const [hasConsented, setHasConsented] = useState<boolean | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("cookie_consent_constructora");
      if (consent) {
        setHasConsented(consent === "accepted");
      } else {
        setTimeout(() => setShowBanner(true), 1000);
      }
    } catch {
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    try {
      localStorage.setItem("cookie_consent_constructora", "accepted");
    } catch {}
    setHasConsented(true);
    setShowBanner(false);
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).dataLayer.push({ event: "cookie_consent_accepted" });
    }
  };

  const rejectCookies = () => {
    try {
      localStorage.setItem("cookie_consent_constructora", "rejected");
    } catch {}
    setHasConsented(false);
    setShowBanner(false);
  };

  const openBanner = () => {
    setShowBanner(true);
  };

  if (hasConsented === null && !showBanner) return null;

  return (
    <>
      <div 
        className={`fixed bottom-0 left-0 w-full bg-slate-900 text-white p-4 md:p-6 shadow-2xl z-[9999] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 border-t-2 border-orange-600 transition-transform duration-500 ease-in-out ${
          showBanner ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex-1">
          <p className="text-sm md:text-base text-slate-300">
            Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.{" "}
            <a href="/politica-de-cookies/" className="text-orange-500 hover:text-orange-400 underline transition-colors">
            Más información
          </a>.
          </p>
        </div>
        <div className="flex flex-row w-full md:w-auto gap-3">
          <button 
            className="flex-1 md:flex-none px-6 py-2.5 rounded-full font-bold transition-colors border border-slate-500 text-slate-300 hover:bg-slate-800 hover:text-white" 
            onClick={rejectCookies}
          >
            Rechazar
          </button>
          <button 
            className="flex-1 md:flex-none px-6 py-2.5 rounded-full font-bold transition-colors bg-orange-600 text-white hover:bg-orange-700" 
            onClick={acceptCookies}
          >
            Aceptar
          </button>
        </div>
      </div>

      {/* Botón Flotante para reabrir */}
      <button
        className={`fixed bottom-5 left-5 w-12 h-12 bg-slate-900 border-2 border-orange-600 rounded-full text-white flex justify-center items-center text-2xl shadow-lg z-[9998] transition-all duration-300 ${
          !showBanner && hasConsented !== null ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
        } hover:scale-110 hover:bg-orange-600`}
        onClick={openBanner}
        aria-label="Gestionar cookies"
        title="Gestionar preferencias de cookies"
      >
        🍪
      </button>
    </>
  );
}
