/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Droplets,
  ShieldCheck,
  CheckCircle2,
  Share2,
  Menu,
  X,
  Compass,
  ArrowRight,
  Info
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const candidateData = {
    nameEn: "G Mallikarjuna Reddy",
    nameTe: "జి. మల్లికార్జున రెడ్డి",
    roleEn: "Candidate for Chairman, Adoni Municipality",
    roleTe: "చైర్మన్ అభ్యర్థి, ఆదోని పురపాలక సంఘం",
    districtEn: "Kurnool District, Andhra Pradesh",
    districtTe: "కర్నూలు జిల్లా, ఆంధ్రప్రదేశ్",
    taglineTe: "ఆదోని అభివృద్ధే నా లక్ష్యం",
    taglineEn: "Adoni's development is my goal",
    party: "YSRCP",
    partyFull: "Yuvajana Sramika Rythu Congress Party",
    partyTe: "వైఎస్సార్‌సీపీ (YSRCP)",
    address: "6-305-25, T G L Colony, Near T G L High School, Adoni, Andhra Pradesh - 518301",
    addressTe: "6-305-25, టి జి ఎల్ కాలనీ, టి జి ఎల్ హైస్కూల్ దగ్గర, ఆదోని, కర్నూలు జిల్లా, ఆంధ్రప్రదేశ్ - 518301",
    phone: "+91 90104 52529",
    phoneRaw: "+919010452529",
    email: "info@gmallikarjunareddy.in",
    domain: "gmallikarjunareddy.in",
    photoUrl: "/assets/aistudio/45576497_591739731275174_8598520841510060032_n_18a715f0.jpg"
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    candidateData.address
  )}`;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-english">
      {/* Top Civic Verification & Party Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-emerald-800 text-white text-xs sm:text-sm py-2 px-4 shadow-sm border-b border-emerald-600/30">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-telugu">అధికారిక ఎన్నికల ప్రచార వెబ్‌సైట్</span>
            <span className="hidden sm:inline text-blue-200">|</span>
            <span className="hidden sm:inline">Official Campaign Website</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-emerald-700/80 hover:bg-emerald-700 text-emerald-100 font-semibold px-2.5 py-0.5 rounded text-xs tracking-wider border border-emerald-400/30">
              Party: {candidateData.party}
            </span>
            <span className="text-blue-100 font-mono text-xs hidden md:inline">
              {candidateData.domain}
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
          {/* Logo / Candidate Header Identity */}
          <a href="#hero" className="flex flex-col group">
            <span className="font-telugu font-bold text-lg sm:text-xl text-blue-900 group-hover:text-blue-700 transition">
              {candidateData.nameTe}
            </span>
            <span className="font-bold text-sm sm:text-base text-slate-900 tracking-tight">
              {candidateData.nameEn}
            </span>
            <span className="text-xs font-medium text-emerald-700">
              Adoni Municipality • YSRCP
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <a
              href="#hero"
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-900 hover:bg-blue-50/60 transition"
            >
              <span className="font-telugu block text-xs text-slate-500 font-normal">ప్రధానం</span>
              Home
            </a>
            <a
              href="#about"
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-900 hover:bg-blue-50/60 transition"
            >
              <span className="font-telugu block text-xs text-slate-500 font-normal">గురించి</span>
              About
            </a>
            <a
              href="#priorities"
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-900 hover:bg-blue-50/60 transition"
            >
              <span className="font-telugu block text-xs text-slate-500 font-normal">ప్రాధాన్యతలు</span>
              Priorities
            </a>
            <a
              href="#contact"
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-900 hover:bg-blue-50/60 transition"
            >
              <span className="font-telugu block text-xs text-slate-500 font-normal">సంప్రదించండి</span>
              Contact
            </a>

            <div className="pl-2 flex items-center gap-2">
              <a
                href={`tel:${candidateData.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call Candidate</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${candidateData.phoneRaw}`}
              aria-label="Call candidate"
              className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-blue-50"
            >
              <span className="font-telugu font-semibold text-blue-900 mr-2">ప్రధానం</span>
              <span>Home</span>
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-blue-50"
            >
              <span className="font-telugu font-semibold text-blue-900 mr-2">గురించి</span>
              <span>About Candidate</span>
            </a>
            <a
              href="#priorities"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-blue-50"
            >
              <span className="font-telugu font-semibold text-blue-900 mr-2">ప్రాధాన్యతలు</span>
              <span>Municipal Priorities</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-blue-50"
            >
              <span className="font-telugu font-semibold text-blue-900 mr-2">సంప్రదించండి</span>
              <span>Official Contact</span>
            </a>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${candidateData.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white rounded-lg font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>Call {candidateData.phone}</span>
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-50 text-blue-900 border border-blue-200 rounded-lg font-medium text-sm"
              >
                <MapPin className="w-4 h-4 text-blue-700" />
                <span>Open Adoni Office Location</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* SECTION 1: HERO */}
      <section id="hero" className="relative bg-gradient-to-b from-blue-50/70 via-white to-slate-50 pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Candidate Information & Tagline */}
            <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1">
              {/* Party & Office Designation Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-blue-900 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Party: {candidateData.party}
                </span>
                <span className="inline-flex items-center text-xs sm:text-sm font-medium bg-emerald-100 text-emerald-900 border border-emerald-300 px-3 py-1 rounded-full">
                  ఆదోని మునిసిపాలిటీ / Adoni Municipality
                </span>
              </div>

              {/* Candidate Name in Telugu & English */}
              <div className="space-y-1 mb-4">
                <h1 className="font-telugu font-extrabold text-3xl sm:text-4xl md:text-5xl text-blue-950 tracking-tight leading-tight">
                  {candidateData.nameTe}
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {candidateData.nameEn}
                </h2>
              </div>

              {/* Role Line */}
              <div className="mb-6 border-l-4 border-emerald-600 pl-3.5 py-1 bg-emerald-50/50 rounded-r-lg max-w-xl">
                <p className="font-telugu text-base sm:text-lg font-semibold text-emerald-950">
                  {candidateData.roleTe}
                </p>
                <p className="text-sm sm:text-base font-semibold text-slate-700">
                  Candidate for Chairman, Adoni
                </p>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {candidateData.districtEn}
                </p>
              </div>

              {/* Tagline Box */}
              <div className="w-full bg-white rounded-xl p-4 sm:p-5 border border-blue-200/90 shadow-sm mb-6">
                <div className="text-xs font-semibold tracking-wider text-blue-800 uppercase mb-1">
                  Tagline / లక్ష్యం
                </div>
                <p className="font-telugu text-xl sm:text-2xl font-bold text-blue-950 mb-1">
                  "{candidateData.taglineTe}"
                </p>
                <p className="text-slate-600 font-medium text-sm sm:text-base italic">
                  "{candidateData.taglineEn}"
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-semibold text-base transition shadow-md hover:shadow-lg active:scale-98"
                >
                  <span className="font-telugu">సంప్రదించండి</span>
                  <span className="text-blue-300">/</span>
                  <span>Contact</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <a
                  href={`tel:${candidateData.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base transition shadow-sm active:scale-98"
                >
                  <Phone className="w-4 h-4" />
                  <span>{candidateData.phone}</span>
                </a>
              </div>
            </div>

            {/* Right: Candidate Photo Placeholder Frame */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
                
                {/* Background decorative halo */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-emerald-500 rounded-3xl blur-md opacity-25"></div>

                {/* Candidate Photo Card Frame */}
                <div className="relative bg-white p-3 rounded-2xl shadow-xl border-2 border-slate-200 overflow-hidden">
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                    <img
                      src={candidateData.photoUrl}
                      alt="G Mallikarjuna Reddy - Candidate for Chairman, Adoni Municipality (Replace this photo by editing the image path)"
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                      onError={(e) => {
                        // Fallback UI in case asset path cannot be found
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full flex flex-col items-center justify-center p-6 text-center bg-blue-50 text-blue-900';
                          fallback.innerHTML = `
                            <svg class="w-16 h-16 text-blue-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            <p class="font-bold text-lg">G Mallikarjuna Reddy</p>
                            <p class="text-xs text-slate-600 mt-1">Candidate Photo Placeholder</p>
                          `;
                          parent.appendChild(fallback);
                        }
                      }}
                    />

                    {/* Official Stamp Badge */}
                    <div className="absolute bottom-3 left-3 right-3 bg-slate-900/85 backdrop-blur-md text-white text-xs py-2 px-3 rounded-lg flex items-center justify-between border border-white/20 shadow-md">
                      <div>
                        <div className="font-telugu font-semibold text-emerald-300">జి. మల్లికార్జున రెడ్డి</div>
                        <div className="font-medium text-slate-200 text-[11px]">Adoni Municipality Candidate</div>
                      </div>
                      <span className="font-bold bg-emerald-500 text-slate-950 px-2 py-0.5 rounded text-[10px] tracking-wider uppercase">
                        YSRCP
                      </span>
                    </div>
                  </div>

                  {/* Photo Replacement Note for Site Owner / Verification */}
                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 px-1">
                    <span className="flex items-center gap-1 text-[11px]">
                      <Info className="w-3.5 h-3.5 text-blue-600" />
                      Candidate Portrait Photo Slot
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Adoni, AP
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT CANDIDATE */}
      <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-2">
              అభ్యర్థి పరిచయం / About Candidate
            </span>
            <h2 className="font-telugu font-extrabold text-2xl sm:text-3xl text-blue-950">
              అభ్యర్థి గురించి
            </h2>
            <p className="text-lg sm:text-xl font-bold text-slate-900">
              About G Mallikarjuna Reddy
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-emerald-600 mx-auto mt-3 rounded-full"></div>
          </div>

          {/* Bilingual Intro Card */}
          <div className="bg-slate-50/90 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
            
            {/* Telugu Introduction (3 to 4 neutral, accurate sentences) */}
            <div className="bg-white p-5 sm:p-6 rounded-xl border-l-4 border-blue-800 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-800"></span>
                <span className="font-telugu font-bold text-sm text-blue-900 uppercase">తెలుగు పరిచయం</span>
              </div>
              <p className="font-telugu text-slate-800 text-base sm:text-lg leading-relaxed font-normal">
                జి. మల్లికార్జున రెడ్డి గారు కర్నూలు జిల్లాలోని ఆదోని పురపాలక సంఘం (Adoni Municipality) చైర్మన్ ఎన్నికల్లో వైఎస్సార్‌సీపీ (YSRCP) తరఫున పోటీ చేస్తున్న అభ్యర్థి. ఆదోని పట్టణ ప్రజల సంక్షేమం, సమగ్ర అభివృద్ధి మరియు స్థానిక సమస్యల శాశ్వత పరిష్కారమే వీరి ప్రధాన ధ్యేయం. పురపాలక సంఘం పరిధిలోని అన్ని వార్డుల ప్రజలకు ఎల్లవేళలా అందుబాటులో ఉంటూ, పారదర్శకమైన మరియు సమర్థవంతమైన ప్రజా సేవను అందించడానికి వీరు కట్టుబడి ఉన్నారు.
              </p>
            </div>

            {/* English Introduction (3 to 4 neutral, accurate sentences) */}
            <div className="bg-white p-5 sm:p-6 rounded-xl border-l-4 border-emerald-700 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-700"></span>
                <span className="font-bold text-xs sm:text-sm text-emerald-900 uppercase tracking-wide">English Summary</span>
              </div>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                G Mallikarjuna Reddy is a candidate representing YSRCP for the post of Chairman in the Adoni Municipality election, Kurnool District, Andhra Pradesh. His objective is to dedicate himself to the service of the people of Adoni and work towards civic welfare, municipal development, and local problem-solving. He is committed to remaining accessible to all residents across all municipal wards and providing honest, responsive public service.
              </p>
            </div>

            {/* Quick Candidate Snapshot Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white p-3.5 rounded-lg border border-slate-200 text-center">
                <div className="text-xs text-slate-500 font-medium">స్థానం / Post</div>
                <div className="font-telugu font-bold text-blue-950 text-sm mt-0.5">చైర్మన్ అభ్యర్థి</div>
                <div className="text-xs text-slate-700 font-semibold">Chairman Candidate</div>
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-slate-200 text-center">
                <div className="text-xs text-slate-500 font-medium">పురపాలక సంఘం / Town</div>
                <div className="font-telugu font-bold text-blue-950 text-sm mt-0.5">ఆదోని, కర్నూలు</div>
                <div className="text-xs text-slate-700 font-semibold">Adoni Municipality</div>
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-slate-200 text-center">
                <div className="text-xs text-slate-500 font-medium">పార్టీ / Political Party</div>
                <div className="font-bold text-emerald-800 text-sm mt-0.5">YSRCP</div>
                <div className="text-xs text-slate-600 font-medium">Text Affiliation Only</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: PRIORITIES */}
      <section id="priorities" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full border border-blue-200 mb-2">
              ముఖ్య ప్రాధాన్యతలు / Civic Priorities
            </span>
            <h2 className="font-telugu font-extrabold text-2xl sm:text-3xl text-blue-950">
              పురపాలక అభివృద్ధి ప్రాధాన్యతలు
            </h2>
            <p className="text-lg sm:text-xl font-bold text-slate-900">
              Municipal Development Priorities
            </p>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Generic, non-controversial civic themes focused on the well-being of all residents in Adoni.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-emerald-600 mx-auto mt-3 rounded-full"></div>
          </div>

          {/* 3 Simple Priority Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Priority Card 1: Clean Drinking Water */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-800 mb-5">
                  <Droplets className="w-7 h-7" />
                </div>
                
                <div className="space-y-1 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-800">ప్రాధాన్యత 1 / Priority 1</span>
                  <h3 className="font-telugu font-bold text-lg sm:text-xl text-slate-900 leading-snug">
                    మంచి నీటి సరఫరా
                  </h3>
                  <h4 className="font-bold text-base text-blue-900">
                    Clean Drinking Water Supply
                  </h4>
                </div>

                <div className="space-y-3 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                  <p className="font-telugu text-slate-700">
                    ఆదోని మునిసిపాలిటీలోని ప్రతి వార్డు మరియు కాలనీకి నిరంతరం పరిశుభ్రమైన, సురక్షితమైన తాగునీరు సక్రమంగా అందేలా తగిన చర్యలు చేపట్టడం.
                  </p>
                  <p>
                    Ensuring regular, clean, and safe drinking water supply to all residential wards and colonies across Adoni Municipality.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-blue-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Basic Civic Necessity</span>
              </div>
            </div>

            {/* Priority Card 2: Roads & Drainage */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 mb-5">
                  <Compass className="w-7 h-7" />
                </div>
                
                <div className="space-y-1 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">ప్రాధాన్యత 2 / Priority 2</span>
                  <h3 className="font-telugu font-bold text-lg sm:text-xl text-slate-900 leading-snug">
                    రోడ్లు మరియు డ్రైనేజీ వ్యవస్థ
                  </h3>
                  <h4 className="font-bold text-base text-emerald-900">
                    Roads & Drainage Infrastructure
                  </h4>
                </div>

                <div className="space-y-3 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                  <p className="font-telugu text-slate-700">
                    మునిసిపల్ పరిధిలోని కాలనీల్లో అంతర్గత రోడ్ల పునరుద్ధరణ మరియు వర్షపు నీరు సాఫీగా వెళ్లేలా ప్రణాళికాబద్ధమైన డ్రైనేజీ వ్యవస్థ ఏర్పాటు.
                  </p>
                  <p>
                    Proper maintenance and paving of municipal streets along with structured drainage channels to prevent waterlogging.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Ward Infrastructure</span>
              </div>
            </div>

            {/* Priority Card 3: Sanitation & Public Health */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-900 mb-5">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                
                <div className="space-y-1 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-800">ప్రాధాన్యత 3 / Priority 3</span>
                  <h3 className="font-telugu font-bold text-lg sm:text-xl text-slate-900 leading-snug">
                    పారిశుధ్యం మరియు ప్రజారోగ్యం
                  </h3>
                  <h4 className="font-bold text-base text-blue-950">
                    Sanitation & Public Health
                  </h4>
                </div>

                <div className="space-y-3 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                  <p className="font-telugu text-slate-700">
                    రోజూ క్రమం తప్పకుండా చెత్త సేకరణ, పారిశుధ్య నిర్వహణ, వీధి దీపాల సదుపాయం మరియు పట్టణ ప్రజల ఆరోగ్య భద్రతకు ప్రాధాన్యత.
                  </p>
                  <p>
                    Regular solid waste collection, clean public spaces, vector control, functional street lighting, and proactive sanitation.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-blue-900 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Clean & Healthy Adoni</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: CONTACT & VERIFICATION */}
      <section id="contact" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-2">
              అధికారిక సంప్రదింపు సమాచారం / Official Contact Details
            </span>
            <h2 className="font-telugu font-extrabold text-2xl sm:text-3xl text-blue-950">
              సంప్రదించండి
            </h2>
            <p className="text-lg sm:text-xl font-bold text-slate-900">
              Official Candidate Contact
            </p>
            <p className="text-sm text-slate-500 mt-1">
              All details published below are verified for official communications and Meta / Facebook ad disclaimers.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-emerald-600 mx-auto mt-3 rounded-full"></div>
          </div>

          {/* Copy feedback toast notification */}
          {copiedField && (
            <div className="mb-6 p-3 bg-emerald-50 text-emerald-900 border border-emerald-300 rounded-xl text-center text-sm font-semibold flex items-center justify-center gap-2 animate-fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Copied {copiedField} to clipboard!</span>
            </div>
          )}

          {/* Contact Details Card */}
          <div className="bg-slate-50 rounded-2xl border-2 border-slate-200/90 shadow-sm p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Left Column: Official Postal Address */}
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-telugu font-bold text-slate-900 text-base">కార్యాలయ చిరునామా</div>
                      <div className="font-bold text-xs uppercase text-slate-500 tracking-wider">Official Postal Address</div>
                    </div>
                  </div>

                  {/* Exactly as requested in prompt */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <p className="font-semibold text-slate-900 text-base leading-relaxed select-all">
                      {candidateData.address}
                    </p>
                    <p className="font-telugu text-slate-600 text-sm mt-2 leading-relaxed">
                      {candidateData.addressTe}
                    </p>
                  </div>
                </div>

                {/* Google Maps link button */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold transition shadow-xs"
                  >
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopy(candidateData.address, "Address")}
                    className="px-3.5 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-sm font-medium border border-slate-300 transition"
                  >
                    Copy Address
                  </button>
                </div>
              </div>

              {/* Right Column: Phone, Email, Domain */}
              <div className="space-y-4">
                
                {/* Phone Box with click-to-call tel: link */}
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-600" />
                      <span className="font-telugu text-xs font-semibold text-slate-500">ఫోన్ నంబర్ / Phone</span>
                    </div>
                    <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Click to Call
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <a
                      href={`tel:${candidateData.phoneRaw}`}
                      className="font-bold text-lg sm:text-xl text-blue-950 hover:text-blue-700 transition"
                    >
                      {candidateData.phone}
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy(candidateData.phone, "Phone Number")}
                      className="text-xs text-slate-500 hover:text-slate-800 underline px-1"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                {/* Email Box with mailto: link */}
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-700" />
                      <span className="font-telugu text-xs font-semibold text-slate-500">ఈమెయిల్ / Official Email</span>
                    </div>
                    <span className="text-[11px] font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      Click to Mail
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <a
                      href={`mailto:${candidateData.email}`}
                      className="font-semibold text-base sm:text-lg text-slate-900 hover:text-blue-700 transition break-all"
                    >
                      {candidateData.email}
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy(candidateData.email, "Email")}
                      className="text-xs text-slate-500 hover:text-slate-800 underline px-1"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                {/* Domain & Party Badge */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-xs text-slate-500 block">అధికారిక వెబ్‌సైట్ / Domain</span>
                    <span className="font-semibold text-slate-900 font-mono text-xs sm:text-sm">
                      {candidateData.domain}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">పార్టీ పేరు / Political Party</span>
                    <span className="font-bold text-emerald-800">
                      {candidateData.party}
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Disclaimer & Transparency Statement */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 text-xs sm:text-sm text-slate-600 bg-white/70 p-4 rounded-xl">
              <div className="flex items-start gap-2.5">
                <Info className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-medium text-slate-800">
                    <strong className="text-blue-950">Meta / Facebook Ad Disclaimer Verification Notice:</strong> This single-page official website confirms the political candidacy and identity of <span className="font-semibold text-slate-900">G Mallikarjuna Reddy</span> for Chairman, Adoni Municipality. All contact coordinates, address, telephone number, and email address listed here are official and active.
                  </p>
                  <p className="font-telugu text-slate-600">
                    ఆదోని మునిసిపాలిటీ ఎన్నికల అధికారిక సమాచారం మరియు ధ్రువీకరణ కొరకు ఈ వెబ్‌సైట్ ప్రచురించబడింది.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: FOOTER */}
      <footer className="mt-auto bg-slate-900 text-slate-300 py-12 border-t-4 border-emerald-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            {/* Candidate Details */}
            <div className="space-y-1">
              <div className="font-telugu text-xl font-bold text-white">
                {candidateData.nameTe}
              </div>
              <div className="text-lg font-bold text-white tracking-wide">
                {candidateData.nameEn}
              </div>
              <div className="text-sm text-emerald-400 font-medium">
                Candidate for Chairman, Adoni Municipality
              </div>
              <div className="text-sm text-slate-400">
                Adoni, Kurnool District, Andhra Pradesh
              </div>
              <div className="font-telugu text-xs text-slate-400">
                ఆదోని, కర్నూలు జిల్లా, ఆంధ్రప్రదేశ్
              </div>
            </div>

            {/* Quick Links & Contact in Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
              <a
                href={`tel:${candidateData.phoneRaw}`}
                className="flex items-center gap-2 hover:text-emerald-400 transition"
              >
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>{candidateData.phone}</span>
              </a>
              <span className="hidden sm:inline text-slate-700">•</span>
              <a
                href={`mailto:${candidateData.email}`}
                className="flex items-center gap-2 hover:text-blue-400 transition"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{candidateData.email}</span>
              </a>
              <span className="hidden sm:inline text-slate-700">•</span>
              <span className="font-medium text-emerald-400">
                Party: {candidateData.party}
              </span>
            </div>
          </div>

          {/* Mandatory Footer Publication Notice & Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
            <div className="space-y-0.5">
              <p className="font-medium text-slate-300">
                Website published by G Mallikarjuna Reddy
              </p>
              <p className="font-telugu text-slate-400">
                జి. మల్లికార్జున రెడ్డి గారిచే ప్రచురించబడిన వెబ్‌సైట్
              </p>
            </div>
            <div className="text-slate-500">
              © {new Date().getFullYear()} {candidateData.nameEn}. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
