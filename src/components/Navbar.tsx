const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between py-3 px-6 xl:px-16">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <img
            src="/images/ivna logo.png"
            alt="IVNA Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Nav Links + CTA - all right-aligned */}
        <div className="ml-auto flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="flex items-center gap-1.5 text-gray-600 hover:text-[#0052FF] text-sm font-medium transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
              Features
            </a>
            <a href="#" className="flex items-center gap-1.5 text-gray-600 hover:text-[#0052FF] text-sm font-medium transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
              Product
            </a>
            <a href="#" className="flex items-center gap-1.5 text-gray-600 hover:text-[#0052FF] text-sm font-medium transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <button className="bg-[#0052FF] hover:bg-[#003ECC] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm">
            Book Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
