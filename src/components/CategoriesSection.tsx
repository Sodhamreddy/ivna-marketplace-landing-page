const categories = [
  {
    name: "AGENCY TOOLS",
    borderColor: "border-t-red-500",
    bgColor: "bg-red-50",
    products: [
      { name: "Contact Forms", icon: "📋", color: "bg-red-100" },
      { name: "Diri Plus", icon: "📊", color: "bg-green-100" },
      { name: "Social Business", icon: "📱", color: "bg-blue-100" },
      { name: "Invoice Builder", icon: "🧾", color: "bg-orange-100" },
    ],
  },
  {
    name: "MARKET AI TOOLS",
    borderColor: "border-t-green-500",
    bgColor: "bg-green-50",
    products: [
      { name: "Blog & Post", icon: "✍️", color: "bg-pink-100" },
      { name: "Content Creator", icon: "🎨", color: "bg-purple-100" },
      { name: "Diri Plus", icon: "📊", color: "bg-green-100" },
      { name: "AI Writer", icon: "🤖", color: "bg-cyan-100" },
    ],
  },
  {
    name: "MANAGEMENT TOOLS",
    borderColor: "border-t-blue-500",
    bgColor: "bg-blue-50",
    products: [
      { name: "Contact Forms", icon: "📋", color: "bg-indigo-100" },
      { name: "Diri Plus", icon: "📊", color: "bg-teal-100" },
      { name: "Scheduling", icon: "📅", color: "bg-amber-100" },
      { name: "Reports", icon: "📈", color: "bg-rose-100" },
    ],
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Wave decorative background */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-30 wave-bg" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((category, i) => (
            <div
              key={i}
              className={`bg-card rounded-2xl border border-border ${category.borderColor} border-t-4 p-6 card-hover`}
            >
              <h3 className="text-xs font-bold text-muted-foreground tracking-wider mb-4">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.products.map((product, j) => (
                  <div
                    key={j}
                    className={`${product.color} rounded-xl p-4 text-center card-hover cursor-pointer`}
                  >
                    <div className="text-2xl mb-1">{product.icon}</div>
                    <p className="text-[10px] font-medium text-foreground">{product.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
