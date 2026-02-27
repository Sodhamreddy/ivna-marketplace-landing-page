import { Globe, Users, Mail, Shield, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Brand */}
          <div>
            <span className="text-primary-foreground font-bold text-2xl block mb-3" style={{ fontFamily: 'Poppins' }}>
              IVNA
            </span>
            <p className="text-xs leading-relaxed text-primary-foreground/50">
              Transforming business communication with professional VoiceAI solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Globe className="w-3 h-3 text-primary" />
                <a href="#" className="hover:text-primary-foreground transition-colors">Product Showcase</a>
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-3 h-3 text-primary" />
                <a href="#" className="hover:text-primary-foreground transition-colors">Features</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-primary" />
                <a href="#" className="hover:text-primary-foreground transition-colors">Contact</a>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-3 h-3 text-primary" />
                <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-3 h-3 text-primary" />
                <a href="#" className="hover:text-primary-foreground transition-colors">Terms and Conditions</a>
              </li>
            </ul>
          </div>

          {/* Product Demos */}
          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-4">Product Demos</h4>
            <div className="flex flex-col gap-3">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium transition-colors w-fit">
                Book a demo
              </button>
              <button className="border border-primary-foreground/30 hover:border-primary-foreground text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium transition-colors w-fit">
                Watch demo
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/40">
          © 2025 Callncare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
