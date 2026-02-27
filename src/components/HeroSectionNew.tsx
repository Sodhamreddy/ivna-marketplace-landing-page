import { Search } from "lucide-react";
import { useState } from "react";

const tabs = [
  { label: "All Products", icon: null },
  { label: "Latest Tools", icon: "📡" },
  { label: "Extensions", icon: null },
  { label: "AI tools", icon: null },
  { label: "Others", icon: null },
];

const HeroSectionNew = () => {
  const [activeTab, setActiveTab] = useState("All Products");

  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '64px' }}>
      {/* Hero Background - new home hero bg */}
      <div
        className="relative flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: "url('/images/new home hero bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '480px',
          padding: '60px 24px 0',
        }}
      >
        {/* "AI" watermark text */}
        {/* <div
          className="absolute right-16 top-12 text-black/10 font-black select-none pointer-events-none"
          style={{ fontSize: '180px', lineHeight: 1, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.05em' }}
        >
          AI
        </div> */}

        {/* Floating icons overlay */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 left-12 text-gray-400/30">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
          </div>
          <div className="absolute top-10 left-28 text-gray-400/20">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
          </div>
          <div className="absolute bottom-28 left-14 text-gray-400/20">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
          </div>
          <div className="absolute bottom-16 left-8 text-gray-400/20">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
          </div>
        </div> */}

        {/* Content */}
        <div className="relative z-10 w-full max-w-3xl mx-auto">
          <h1
            className="text-5xl md:text-6xl font-black text-gray-900 mb-5"
            style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.01em' }}
          >
            Market Place
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Designed by home care industry experts and private duty home care agencies,
            IVNA is transforming the home care software industry.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-24">
            <div className="relative">
              <input
                type="text"
                placeholder="Search the Market Place"
                className="w-full bg-white rounded-full py-3.5 px-6 pr-14 text-gray-500 text-sm focus:outline-none shadow-lg"
                style={{ border: '2px solid rgba(0,0,0,0.08)' }}
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0052FF]">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Tab Bar - absolutely pinned to bottom, full width */}
        <div
          className="absolute bottom-0 left-0 right-0 w-full"
          style={{
            background: 'rgba(0,0,0,0.06)',
            borderTop: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          <div className="flex items-center justify-center gap-2 overflow-x-auto py-2">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`flex items-center gap-2 px-5 py-1.5 text-sm font-medium transition-all whitespace-nowrap rounded-full ${
                  activeTab === tab.label
                    ? "bg-white text-gray-900 shadow"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.icon && <span>{tab.icon}</span>}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionNew;
