"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ContactPerson from "@/components/elements/ContactPerson";

export default function LandingPage() {
  const targetDate = new Date("2026-08-22T00:00:00");
  const [timeLeft, setTimeLeft] = useState({ d: "00", h: "00", m: "00", s: "00" });

  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date();
      const diff = Math.max(0, targetDate.getTime() - now.getTime());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ d: String(d).padStart(2, "0"), h: String(h).padStart(2, "0"), m: String(m).padStart(2, "0"), s: String(s).padStart(2, "0") });
      if (diff <= 0) {
        clearInterval(id);
      }
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#08112a] via-[#1c1742] to-[#4b2a92] text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Open Recruitment Ambassador<br/>Open House Fasilkom UI 2026</h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-200 mb-8">Ambassador Open House Fasilkom UI adalah ikon OH Fasilkom UI yang bertugas untuk mempromosikan acara OH Fasilkom UI dan Fakultas Ilmu Komputer Universitas Indonesia kepada masyarakat.</p>

        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="bg-gradient-to-br from-[#6e4ce6] to-[#b68cff] rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-lg">
            <span className="text-2xl font-bold">{timeLeft.d}</span>
            <span className="text-xs opacity-90">Days</span>
          </div>
          <div className="bg-gradient-to-br from-[#6e4ce6] to-[#b68cff] rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-lg">
            <span className="text-2xl font-bold">{timeLeft.h}</span>
            <span className="text-xs opacity-90">Hours</span>
          </div>
          <div className="bg-gradient-to-br from-[#6e4ce6] to-[#b68cff] rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-lg">
            <span className="text-2xl font-bold">{timeLeft.m}</span>
            <span className="text-xs opacity-90">Minutes</span>
          </div>
          <div className="bg-gradient-to-br from-[#6e4ce6] to-[#b68cff] rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-lg">
            <span className="text-2xl font-bold">{timeLeft.s}</span>
            <span className="text-xs opacity-90">Seconds</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button variant="primary" className="bg-cyan-500 hover:bg-cyan-600">Daftar Sekarang</Button>
          <Button variant="ghost" className="border border-white/20">Pelajari Lebih Lanjut</Button>
        </div>
      </section>
      {/* About Ambassador */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Apa itu Ambassador Open House Fasilkom UI?</h2>
            <p className="text-lg text-slate-200 mb-6">Program Ambassador Open House Fasilkom UI 2026 mengajak anak-anak SMA/K sederajat dan influencer untuk meningkatkan brand awareness Fasilkom UI. Ambassador bertugas membuat konten digital untuk menyebarkan informasi mengenai Open House Fasilkom UI dan Fasilkom UI.</p>

            <div className="flex gap-4">
              <div className="bg-white/6 p-6 rounded-lg w-40">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm opacity-80">Pendaftar dari seluruh Indonesia</div>
              </div>
              <div className="bg-white/6 p-6 rounded-lg w-40">
                <div className="text-2xl font-bold">250+</div>
                <div className="text-sm opacity-80">Pengguna Referral Code</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full h-64 bg-white/5 rounded-xl flex items-center justify-center">Mascot / Illustration</div>
          </div>
        </div>
      </section>
      {/* Archive */}
      <section className="container mx-auto px-6 py-16 bg-gradient-to-b from-transparent to-white/5">
        <h3 className="text-2xl text-center font-bold mb-8">Ambassador 2025's Archive</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white/6 rounded-lg h-44 flex items-center justify-center">Photo {i + 1}</div>
          ))}
        </div>
      </section>
    </main>
  );
}
