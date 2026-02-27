const AssessmentBanner = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden relative" style={{
          background: 'linear-gradient(135deg, hsl(300 60% 95%) 0%, hsl(200 80% 92%) 50%, hsl(180 60% 90%) 100%)'
        }}>
          <div className="grid md:grid-cols-2 gap-6 p-8 md:p-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-3">
                Deliver Better Care Through Clear Assessments
              </h2>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Connect with us and learn how PulseBoard can give your business the edge.
              </p>
              <button className="border-2 border-foreground text-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-foreground hover:text-primary-foreground transition-colors">
                Know more
              </button>
            </div>

            {/* Right - Device mockups with badge */}
            <div className="relative flex justify-center items-center">
              {/* 50% OFF Badge */}
              <div className="absolute -top-2 right-4 md:right-12 z-20 w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-lg" style={{
                background: 'linear-gradient(135deg, hsl(15 90% 60%) 0%, hsl(0 85% 55%) 100%)'
              }}>
                <span className="text-primary-foreground font-bold text-lg leading-none">50%</span>
                <span className="text-primary-foreground font-bold text-sm leading-none">OFF</span>
                <span className="text-primary-foreground/70 text-[8px]">*Conditions apply</span>
              </div>

              {/* Device mockups placeholder */}
              <div className="flex items-end gap-2">
                <div className="w-32 h-56 bg-foreground/10 rounded-xl border-2 border-foreground/20 flex items-center justify-center">
                  <div className="w-24 h-44 bg-card rounded-lg shadow-inner flex items-center justify-center">
                    <span className="text-muted-foreground text-[10px] text-center">Dashboard<br/>Preview</span>
                  </div>
                </div>
                <div className="w-24 h-44 bg-foreground/10 rounded-xl border-2 border-foreground/20 flex items-center justify-center">
                  <div className="w-18 h-36 bg-card rounded-lg shadow-inner flex items-center justify-center">
                    <span className="text-muted-foreground text-[10px] text-center">Mobile<br/>View</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentBanner;
