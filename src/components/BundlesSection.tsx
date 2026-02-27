// BundlesSection - Two large bundle cards side by side
const BundlesSection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Subtle wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30 pointer-events-none" style={{
        background: 'linear-gradient(0deg, #f0f4ff 0%, transparent 100%)'
      }} />

      <div className="w-full max-w-[1440px] mx-auto px-6 xl:px-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Bundle 1 - In-home Care */}
          <div className="rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 group">
            <img
              src="/images/Frame 5.png"
              alt="The Ultimate Inhome care Bundle"
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.style.background = 'linear-gradient(135deg, #0d47a1, #1976d2)';
                  parent.style.minHeight = '220px';
                  parent.style.display = 'flex';
                  parent.style.alignItems = 'center';
                  parent.style.justifyContent = 'center';
                  parent.innerHTML = '<div style="color:white;text-align:center;padding:32px"><h3 style="font-size:1.5rem;font-weight:700;margin-bottom:8px">The Ultimate Inhome care Bundle</h3><p style="opacity:0.7;font-size:0.9rem">Stay in control with a unified view of all your business</p></div>';
                }
              }}
            />
          </div>

          {/* Bundle 2 - Business AI */}
          <div className="rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 group">
            <img
              src="/images/Frame 7.png"
              alt="The Ultimate Business development AI Bundle"
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.style.background = 'linear-gradient(135deg, #4a148c, #6a1b9a)';
                  parent.style.minHeight = '220px';
                  parent.style.display = 'flex';
                  parent.style.alignItems = 'center';
                  parent.style.justifyContent = 'center';
                  parent.innerHTML = '<div style="color:white;text-align:center;padding:32px"><h3 style="font-size:1.5rem;font-weight:700;margin-bottom:8px">The Ultimate Business development AI Bundle</h3><p style="opacity:0.7;font-size:0.9rem">Stay in control with a unified view of all your business</p></div>';
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BundlesSection;
