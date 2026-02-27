// CategoriesSection - Three columns: TOP AI TOOLS, LATEST AI TOOLS, ASSESSMENT AI TOOLS
// Each column shows a 2x4 grid of plugin/tool cards

const pluginCards = [
  // Row 1 pair
  { name: "CONTACT\nFORM +", bg: "#1b2b3c", textColor: "#fff", badge: null, icon: "📋" },
  { name: "divi supreme", bg: "#7C3AED", textColor: "#fff", badge: "NEW", icon: "D" },
  // Row 2 pair
  { name: "divi plus", bg: "#2ECC71", subtext: "150+ Full Sites", textColor: "#fff", badge: "TRY WITH DIVI 5\n100+ Modules", icon: "d" },
  { name: "MASONRY", bg: "#E53E3E", textColor: "#fff", badge: "TOP PLUGIN", icon: "⊞" },
  // Row 3 pair
  { name: "EVENTS", bg: "#2563EB", textColor: "#fff", badge: "Divi 4 & 5 Compatible\n20% OFF", icon: "📅" },
  { name: "Divi Essential", bg: "#7C3AED", subtext: "79+ Modules", textColor: "#fff", badge: null, icon: "Q" },
  // Row 4 pair
  { name: "Table Maker", bg: "#f0f8ff", textColor: "#333", badge: null, icon: "📊" },
  { name: "DiviGear Carousel", bg: "#E53E3E", textColor: "#fff", badge: "6 Carousels", icon: "3.0" },
];

const latestPluginCards = [
  { name: "SOCIAL\nSHARING", bg: "#27ae60", textColor: "#fff", badge: "TRY WITH DIVI 5", icon: "📤" },
  { name: "headers for divi", bg: "#f5f5f5", textColor: "#333", badge: "410 Layouts", icon: "H" },
  { name: "divi gallery extended", bg: "#34495e", textColor: "#fff", badge: "5 Modules", icon: "🖼" },
  { name: "Blog & Post\nLAYOUT PACK", bg: "#ecf0f1", textColor: "#333", badge: null, icon: "📰" },
  { name: "Mailchimp", bg: "#f39c12", textColor: "#fff", badge: null, icon: "M" },
  { name: "Divi", bg: "#e74c3c", textColor: "#fff", badge: null, icon: "D" },
  { name: "divi cart pro\nchild theme", bg: "#3498db", textColor: "#fff", badge: "4 Modules", icon: "🛒" },
  { name: "DiviMenus", bg: "#f5f5f5", textColor: "#888", badge: null, icon: "🍴" },
];

interface PluginCard {
  name: string;
  bg: string;
  textColor: string;
  badge?: string | null;
  subtext?: string;
  icon: string;
}

const PluginCardItem = ({ card }: { card: PluginCard }) => (
  <div
    className="rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-200 relative aspect-square flex flex-col items-center justify-center p-2 text-center"
    style={{ background: card.bg }}
  >
    {card.badge && (
      <div className="absolute top-1.5 left-1.5 right-1.5 bg-[#27ae60] text-white text-[7px] font-bold px-1 py-0.5 rounded text-center leading-tight whitespace-pre-line">
        {card.badge}
      </div>
    )}
    <div
      className="text-lg font-black leading-tight whitespace-pre-line mt-2"
      style={{ color: card.textColor, fontFamily: 'Poppins, sans-serif', fontSize: '11px' }}
    >
      {card.name}
    </div>
    {card.subtext && (
      <div className="text-[8px] font-semibold mt-1" style={{ color: card.textColor, opacity: 0.85 }}>
        {card.subtext}
      </div>
    )}
  </div>
);

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-[#fdf8ff] relative overflow-hidden">
      {/* Subtle wave bg */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none opacity-20" style={{
        background: 'linear-gradient(0deg, #e8d5f5 0%, transparent 100%)'
      }} />

      <div className="w-full max-w-[1440px] mx-auto px-6 xl:px-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-6 xl:gap-8">

          {/* Column 1 - TOP AI TOOLS */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="bg-[#e53e3e] text-white text-xs font-bold px-3 py-1 rounded" style={{ fontFamily: 'Poppins, sans-serif' }}>
                TOP AI TOOLS
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {pluginCards.map((card, j) => (
                <PluginCardItem key={j} card={card} />
              ))}
            </div>
          </div>

          {/* Column 2 - LATEST AI TOOLS */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="bg-[#f5a623] text-white text-xs font-bold px-3 py-1 rounded" style={{ fontFamily: 'Poppins, sans-serif' }}>
                LATEST AI TOOLS
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {latestPluginCards.map((card, j) => (
                <PluginCardItem key={j} card={card} />
              ))}
            </div>
          </div>

          {/* Column 3 - ASSESSMENT AI TOOLS */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="bg-[#2563EB] text-white text-xs font-bold px-3 py-1 rounded" style={{ fontFamily: 'Poppins, sans-serif' }}>
                ASSESSMENT AI TOOLS
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {pluginCards.map((card, j) => (
                <PluginCardItem key={j} card={card} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
