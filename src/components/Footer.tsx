import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <span className="text-primary-foreground font-bold text-xl" style={{ fontFamily: 'Poppins' }}>IVNA</span>
            <p className="text-xs mt-3 leading-relaxed">
              Transforming the home care software industry with AI-driven solutions.
            </p>
          </div>
          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-3">Products</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Voica AI</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Pulseboard</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Caregiver Onboarding</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Client Assessment</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-3">Contact</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2"><Mail className="w-3 h-3" /> info@ivna.ai</li>
              <li className="flex items-center gap-2"><Phone className="w-3 h-3" /> +1 (800) 555-0123</li>
              <li className="flex items-center gap-2"><MapPin className="w-3 h-3" /> San Francisco, CA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs">
          © 2024 IVNA AI Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
