import { Search } from "lucide-react";
import { useState } from "react";

const tabs = ["All Products", "Direct Tools", "Onboarding", "AI Tools", "Others"];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("All Products");

  return (
    <section className="hero-gradient pt-24 pb-12 relative overflow-hidden">
      {/* Decorative dots/grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Market Place
        </h1>
        <p className="text-primary-foreground/70 max-w-lg mx-auto text-sm mb-8 leading-relaxed">
          Designed by home care industry experts and private duty home care agencies, 
          IVNA is transforming the home care software industry.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search the Market Place"
              className="w-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-full py-3 px-5 pr-12 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 search-glow"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-1 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeTab === tab
                  ? "bg-primary-foreground text-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
