import Navbar from "@/components/Navbar";
import HeroSectionNew from "@/components/HeroSectionNew";
import ProductsGrid from "@/components/ProductsGrid";
import BundlesSection from "@/components/BundlesSection";
import CategoriesSection from "@/components/CategoriesSection";
import AssessmentBanner from "@/components/AssessmentBanner";
import BrowseProducts from "@/components/BrowseProducts";
import EnterpriseCTANew from "@/components/EnterpriseCTANew";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const HomeNew = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSectionNew />
      <ProductsGrid />
      <BundlesSection />
      <CategoriesSection />
      <AssessmentBanner />
      <BrowseProducts />
      <EnterpriseCTANew />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomeNew;
