const EnterpriseCTA = () => {
  return (
    <section className="py-16 bundle-gradient-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '25px 25px'
      }} />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 max-w-lg mx-auto">
          Enterprise-Grade Applications Built for Better Care Outcomes
        </h2>
        <button className="border-2 border-primary-foreground text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-foreground hover:text-primary transition-colors mt-2">
          Know more
        </button>
      </div>
    </section>
  );
};

export default EnterpriseCTA;
