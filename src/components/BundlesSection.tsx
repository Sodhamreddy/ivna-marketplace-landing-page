// BundlesSection - Two large bundle cards side by side
const bundles = [
  {
    bg: "/images/Rectangle 135.png",
    title: "The Ultimate\nInhome care Bundle",
    subtitle: "Stay in control with a unified view\nof all your business",
  },
  {
    bg: "/images/Rectangle 153.png",
    title: "The Ultimate Business\ndevelopment AI Bundle",
    subtitle: "Stay in control with a unified view\nof all your business",
  },
];

const BundlesSection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Subtle wave decoration at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '120px',
          background: 'url(/images/wave-decoration.svg) bottom/cover no-repeat',
          opacity: 0.15,
        }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 xl:px-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          {bundles.map((bundle, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-shadow duration-300"
              style={{ minHeight: '240px' }}
            >
              {/* Background image */}
              <img
                src={bundle.bg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />

              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Text content */}
              <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-10 py-12">
                <h3
                  className="text-white font-bold text-2xl md:text-3xl leading-snug mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif', whiteSpace: 'pre-line' }}
                >
                  {bundle.title}
                </h3>
                <p
                  className="text-white/75 text-sm leading-relaxed"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {bundle.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BundlesSection;
