// ProductsGrid - "Everything Your Business Needs, In One Place" section
// Top row: 4 photo cards, Bottom row: 4 brand cards

const topRowProducts = [
  {
    image: "/images/Group 172.jpg",
    alt: "Caregiver Onboarding",
  },
  {
    image: "/images/Group 173.jpg",
    alt: "Client Assessment",
  },
  {
    image: "/images/Group 174.jpg",
    alt: "VoicaAI",
  },
  {
    image: "/images/Group 175.jpg",
    alt: "Pulse Board",
  },
];

const bottomRowProducts = [
  {
    image: "/images/Group 176.jpg",
    alt: "Caregiver Onboarding Brand",
  },
  {
    image: "/images/Group 177.jpg",
    alt: "Chatbot",
  },
  {
    image: "/images/Group 178.jpg",
    alt: "VoicaAI Brand",
  },
  {
    image: "/images/Group 179.jpg",
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
            </div>
          ))}
        </div>

        {/* Bottom Row - Brand cards (3 col) */}
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
        {/* <div className="text-center mt-10">
          <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-8 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
            Know more
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ProductsGrid;
