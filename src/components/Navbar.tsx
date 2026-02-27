import { Search, Mail, Zap, Package, Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-2">
          <span className="text-primary-foreground font-bold text-2xl tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            IVNA
          </span>
          <span className="text-muted-foreground text-[10px] leading-tight">AI<br/>SOLUTIONS</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm flex items-center gap-1.5 transition-colors">
            <Zap className="w-3.5 h-3.5" /> Features
          </a>
          <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm flex items-center gap-1.5 transition-colors">
            <Package className="w-3.5 h-3.5" /> Product
          </a>
          <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm flex items-center gap-1.5 transition-colors">
            <Mail className="w-3.5 h-3.5" /> Contact
          </a>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium transition-colors">
          Book Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
