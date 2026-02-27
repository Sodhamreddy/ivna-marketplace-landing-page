// ProductsGrid - "Everything Your Business Needs, In One Place" section
// Top row: 4 photo cards, Bottom row: 4 brand cards

const topRowProducts = [
  {
    image: "/images/Rectangle 116.png",
    alt: "Caregiver Onboarding",
    badge: "/images/Rectangle 149.png",
    badgeAlt: "Caregiver Onboarding Badge",
  },
  {
    image: "/images/Rectangle 117.png",
    alt: "Client Assessment",
    badge: "/images/Rectangle 108.png",
    badgeAlt: "Client Assessment Badge",
  },
  {
    image: "/images/Rectangle 118.png",
    alt: "VoicaAI",
    badge: "/images/Voica_04-11 1.png",
    badgeAlt: "VoicaAI Badge",
  },
  {
    image: "/images/Rectangle 148.png",
    alt: "Pulse Board",
    badge: "/images/Pulseboard-02 1.png",
    badgeAlt: "Pulseboard Badge",
  },
];

const bottomRowProducts = [
  {
    image: "/images/Rectangle 150.png",
    alt: "Caregiver Onboarding Brand",
  },
  {
    image: "/images/Rectangle 151.png",
    alt: "Chatbot",
  },
  {
    image: "/images/Rectangle 152.png",
    alt: "VoicaAI Brand",
  },
  {
    image: "/images/Rectangle 153.png",
    alt: "Pulse Board Brand",
  },
];

const ProductsGrid = () => {
  return (
    <section className="py-20 bg-[#F0F6FF]">
      <div className="w-full max-w-[1440px] mx-auto px-6 xl:px-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1D1F2D]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Everything Your Business Needs,{" "}
            <span className="text-[#0052FF]">In One Place</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-4 max-w-2xl mx-auto">
            Specializations that empower teams, streamline processes, and drive smarter decisions
          </p>
        </div>

        {/* Top Row - Photo cards (4 col) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
          {topRowProducts.map((product, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden cursor-pointer group relative shadow-sm border border-gray-100 aspect-[4/3]"
            >
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/400x300/e2e8f0/94a3b8?text=' + encodeURIComponent(product.alt);
                }}
              />
              {/* Badge overlay at bottom-left */}
              {product.badge && (
                <div className="absolute bottom-3 left-3">
                  <img
                    src={product.badge}
                    alt={product.badgeAlt}
                    className="h-10 w-auto object-contain drop-shadow-lg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Row - Brand cards (4 col) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {bottomRowProducts.map((product, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden cursor-pointer group relative shadow-sm border border-gray-100 aspect-[4/3]"
            >
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/400x300/e2e8f0/94a3b8?text=' + encodeURIComponent(product.alt);
                }}
              />
            </div>
          ))}
        </div>

        {/* Know more button */}
        <div className="text-center mt-10">
          <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-8 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
            Know more
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
