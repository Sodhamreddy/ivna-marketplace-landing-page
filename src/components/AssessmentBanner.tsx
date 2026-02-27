// AssessmentBanner - "Deliver Better Care Through Clear Assessments" section

const AssessmentBanner = () => {
  return (
    <section className="py-10 relative overflow-hidden">

      {/* Rectangle 154 background image */}
      <img
        src="/images/Rectangle 154.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 xl:px-16 relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-8">

          {/* Left Content */}
          <div className="py-8">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1F2D] leading-tight mb-5"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Deliver Better Care<br />
              Through Clear<br />
              Assessments
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
              Connect with us and learn how PulseBoard<br />
              can give your business the edge.
            </p>
            <button
              className="border border-gray-400 text-gray-700 hover:border-[#0052FF] hover:text-[#0052FF] px-8 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 bg-white shadow-sm"
            >
              Know more
            </button>
          </div>

          {/* Right - Device mockup with 50% OFF badge */}
          <div className="relative flex justify-center items-center">
            {/* Device mockup image */}
            <img
              src="/images/Group 166.jpg"
              alt="Client Assessment Device Mockup"
              className="w-full h-auto object-contain max-w-lg mx-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/500x380/f0f6ff/2563EB?text=Device+Mockup';
              }}
            />

            {/* 50% OFF badge - Group 170 image */}
            <img
              src="/images/Group 170.png"
              alt="50% OFF - Conditions apply"
              className="absolute top-1/2 -translate-y-1/2 object-contain drop-shadow-xl"
              style={{ left: '3.5rem', width: '10rem', height: '10rem' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AssessmentBanner;
