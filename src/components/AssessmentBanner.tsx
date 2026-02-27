// AssessmentBanner - "Deliver Better Care Through Clear Assessments" section
// Light gradient background, text on left, device mockup on right

const AssessmentBanner = () => {
  return (
    <section className="py-16 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-6 xl:px-16">
        <div
          className="w-full rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #e8d5f5 0%, #d0e8ff 50%, #c8f0f0 100%)',
          }}
        >
          <div className="grid md:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="p-8 md:p-12 lg:p-16">
              {/* Pulseboard badge */}
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="/images/Pulseboard-02 1.png"
                  alt="Pulse Board"
                  className="h-12 w-auto object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div>
                  <div className="font-black text-[#1D1F2D] text-lg leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    PULSE BOARD
                  </div>
                  <div className="text-xs text-gray-500">Powered by KLEZA</div>
                </div>
              </div>

              <h2
                className="text-2xl md:text-3xl font-bold text-[#1D1F2D] leading-tight mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Deliver Better Care Through Clear Assessments
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-7">
                Connect with us and learn how PulseBoard can give your business the edge.
                Transform your home care assessments with AI-powered insights.
              </p>
              <button className="border-2 border-[#1D1F2D] text-[#1D1F2D] hover:bg-[#1D1F2D] hover:text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200">
                Know more
              </button>
            </div>

            {/* Right - Device mockup */}
            <div className="relative flex justify-center items-center p-6 md:p-0">
              <img
                src="/images/Group 166.jpg"
                alt="Device Assessments Mockup"
                className="w-full h-auto object-contain max-w-md mx-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/500x380/c8deff/2563EB?text=Device+Mockup';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentBanner;
