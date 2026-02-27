import { Globe, Users, Mail, Shield, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="w-full max-w-[1440px] mx-auto px-6 xl:px-16 pt-14 pb-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/images/ivna logo.png"
                alt="IVNA Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs leading-relaxed text-gray-500 max-w-[200px]">
              Transforming home care with professional AI-powered solutions designed for agencies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-[#0052FF] font-semibold text-sm mb-5"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs text-gray-500">
              <li className="flex items-center gap-2">
                <Globe className="w-3 h-3 text-[#0052FF]" />
                <a href="#" className="hover:text-[#0052FF] transition-colors">Product Showcase</a>
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-3 h-3 text-[#0052FF]" />
                <a href="#" className="hover:text-[#0052FF] transition-colors">Features</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-[#0052FF]" />
                <a href="#" className="hover:text-[#0052FF] transition-colors">Contact</a>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-3 h-3 text-[#0052FF]" />
                <a href="#" className="hover:text-[#0052FF] transition-colors">Privacy Policy</a>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-3 h-3 text-[#0052FF]" />
                <a href="#" className="hover:text-[#0052FF] transition-colors">Terms and Conditions</a>
              </li>
            </ul>
          </div>

          {/* Product Service */}
          <div>
            <h4
              className="text-[#0052FF] font-semibold text-sm mb-5"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Product Service
            </h4>
            <div className="flex flex-col gap-3">
              <button className="bg-[#0052FF] hover:bg-[#003ECC] text-white px-5 py-2.5 rounded-lg text-xs font-medium transition-colors w-36 text-center shadow-sm">
                Book a demo
              </button>
              <button className="border border-[#0052FF] text-[#0052FF] hover:bg-[#0052FF]/5 px-5 py-2.5 rounded-lg text-xs font-medium transition-colors w-36 text-center">
                Watch demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-[#E5F0FF] py-3 text-center text-xs font-medium text-[#0052FF]">
        © 2024 IVNA AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
