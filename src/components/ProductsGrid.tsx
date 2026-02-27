const products = [
  {
    name: "Voica AI",
    image: "https://ivna.ai/sections/voicaai.png",
    color: "from-blue-500/10 to-purple-500/10",
  },
  {
    name: "Pulseboard",
    image: "https://ivna.ai/sections/pulse.png",
    color: "from-orange-500/10 to-yellow-500/10",
  },
  {
    name: "Caregiver Onboarding",
    image: "https://ivna.ai/sections/caregiver.png",
    color: "from-green-500/10 to-teal-500/10",
  },
  {
    name: "Client Assessment",
    image: "https://ivna.ai/sections/client.png",
    color: "from-pink-500/10 to-red-500/10",
  },
  {
    name: "Chatbot",
    image: "https://ivna.ai/sections/chatbot.png",
    color: "from-cyan-500/10 to-blue-500/10",
  },
  {
    name: "Voica AI Pro",
    image: "https://ivna.ai/sections/voicaai.png",
    color: "from-indigo-500/10 to-violet-500/10",
  },
  {
    name: "Pulse Board",
    image: "https://ivna.ai/sections/pulse.png",
    color: "from-amber-500/10 to-orange-500/10",
  },
  {
    name: "Smart Analytics",
    image: "https://ivna.ai/sections/decision.png",
    color: "from-emerald-500/10 to-green-500/10",
  },
];

const ProductsGrid = () => {
  return (
    <section className="py-16 bg-surface-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Everything Your Business Needs,{" "}
            <span className="text-highlight">In One Place</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-lg mx-auto">
            Specializations that empower teams, streamline processes, and drive smarter decisions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-card rounded-xl overflow-hidden card-hover cursor-pointer border border-border shadow-sm group"
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${product.color} flex items-center justify-center p-4`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="p-3 text-center">
                <p className="text-xs font-semibold text-foreground">{product.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="border border-border bg-card hover:bg-secondary text-foreground px-6 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
            Know more
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
