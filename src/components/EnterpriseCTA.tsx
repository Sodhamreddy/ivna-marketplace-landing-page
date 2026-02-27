// EnterpriseCTA - "Enterprise-Grade Applications Built for Better Care Outcomes"
// Blue gradient background with dot pattern

const EnterpriseCTA = () => {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0052FF 0%, #3b82f6 40%, #6366f1 100%)',
      }}
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Content */}
      <div className="w-full max-w-[1440px] mx-auto px-6 xl:px-16 text-center relative z-10">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 max-w-3xl mx-auto leading-tight"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Enterprise-Grade Applications
          <br />
          Built for Better Care Outcomes
        </h2>
        <button className="bg-white text-[#0052FF] hover:bg-gray-50 px-8 py-3 rounded-lg text-sm font-semibold shadow-sm transition-colors">
          Overview
        </button>
      </div>
    </section>
  );
};

export default EnterpriseCTA;
