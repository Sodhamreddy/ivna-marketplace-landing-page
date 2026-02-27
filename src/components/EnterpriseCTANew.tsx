// EnterpriseCTANew - for home-new page with "new home cta bg.jpg" (dark charcoal)

const EnterpriseCTANew = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* new home cta bg image */}
      <img
        src="/images/new home cta bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
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
        <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg text-sm font-semibold shadow-sm transition-colors">
          Overview
        </button>
      </div>
    </section>
  );
};

export default EnterpriseCTANew;
