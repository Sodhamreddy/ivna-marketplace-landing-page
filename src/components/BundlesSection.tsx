const bundles = [
  {
    title: "The Ultimate Inhome care Bundle",
    description: "Stay in control with a unified view of all your business.",
    gradient: "bundle-gradient-blue",
  },
  {
    title: "The Ultimate Business development AI Bundle",
    description: "Stay in control with a unified view of all your business.",
    gradient: "bundle-gradient-dark",
  },
];

const BundlesSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {bundles.map((bundle, i) => (
            <div
              key={i}
              className={`${bundle.gradient} rounded-2xl p-8 text-primary-foreground card-hover cursor-pointer relative overflow-hidden`}
            >
              {/* Decorative circles */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-primary-foreground/5" />
              <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-primary-foreground/5" />
              
              <h3 className="text-xl font-bold mb-2 relative z-10">{bundle.title}</h3>
              <p className="text-primary-foreground/60 text-sm relative z-10">{bundle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BundlesSection;
