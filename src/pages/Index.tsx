import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsGrid from "@/components/ProductsGrid";
import BundlesSection from "@/components/BundlesSection";
import CategoriesSection from "@/components/CategoriesSection";
import AssessmentBanner from "@/components/AssessmentBanner";
import BrowseProducts from "@/components/BrowseProducts";
import EnterpriseCTA from "@/components/EnterpriseCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductsGrid />
      <BundlesSection />
      <CategoriesSection />
      <AssessmentBanner />
      <BrowseProducts />
      <EnterpriseCTA />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
