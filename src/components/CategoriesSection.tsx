// CategoriesSection - Three columns: TOP AI TOOLS, LATEST AI TOOLS, ASSESSMENT AI TOOLS

const columns = [
  { image: "/images/Group 180.png", alt: "Top AI Tools" },
  { image: "/images/Group 181.png", alt: "Latest AI Tools" },
  { image: "/images/Group 182.png", alt: "Assessment AI Tools" },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-[#fdf8ff] relative overflow-hidden">
      {/* Subtle wave bg */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none opacity-20"
        style={{ background: 'linear-gradient(0deg, #e8d5f5 0%, transparent 100%)' }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 xl:px-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-6 xl:gap-8">
          {columns.map((col, i) => (
            <div key={i} className="cursor-pointer hover:scale-[1.02] transition-transform duration-300">
              <img
                src={col.image}
                alt={col.alt}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
