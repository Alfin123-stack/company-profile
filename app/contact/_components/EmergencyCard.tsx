"use client";

import { Siren } from "lucide-react";

export default function EmergencyCard() {
  return (
    <div className="p-8 rounded-3xl bg-ink text-white">
      <Siren className="w-8 h-8 mb-4 text-red-400" />
      <h3
        className="text-lg font-bold mb-2"
        style={{ fontFamily: "var(--font-display)" }}>
        Situasi Darurat?
      </h3>
      <p className="text-white/60 text-sm mb-4">
        Untuk kondisi darurat yang membutuhkan respons cepat, hubungi langsung:
      </p>
      <div className="text-sage-400 font-mono font-bold text-xl">
        0812-0000-0000
      </div>
      <div className="text-white/40 text-xs mt-1">Pengurus RW (24 jam)</div>
    </div>
  );
}
