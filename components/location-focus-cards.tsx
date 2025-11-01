"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Phone, Mail, MapPin } from "lucide-react";

type LocationCard = {
  title: string;
  state: string;
  phone: string;
  email: string;
  office: string;
  mapSrc: string;
};

export const LocationCard = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: LocationCard;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-3xl relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-2xl border border-white/20 overflow-hidden h-96 w-full transition-all duration-700 ease-out shadow-2xl",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-60"
      )}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-purple-600/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Map iframe */}
      <iframe
        src={card.mapSrc}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Content overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8 transition-opacity duration-700",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="space-y-6">
          {/* Header */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-primary/30 to-purple-600/30 rounded-full blur-sm"></div>
            <h3 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
              {card.title}
            </h3>
            <p className="text-xl text-gray-300 font-medium mb-4">{card.state}</p>
            <div className="flex items-center gap-4">
              <div className="w-24 h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-600 rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/25 to-primary/15 rounded-2xl flex items-center justify-center border border-primary/30">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Phone</p>
                <p className="text-white text-lg font-bold">{card.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/25 to-primary/15 rounded-2xl flex items-center justify-center border border-primary/30">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Email</p>
                <p className="text-white text-sm font-semibold">{card.email}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/25 to-primary/15 rounded-2xl flex items-center justify-center border border-primary/30">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Office</p>
                <p className="text-white text-sm font-semibold">{card.office}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
);

LocationCard.displayName = "LocationCard";

export function LocationFocusCards({ cards }: { cards: LocationCard[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
      {cards.map((card, index) => (
        <LocationCard
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
