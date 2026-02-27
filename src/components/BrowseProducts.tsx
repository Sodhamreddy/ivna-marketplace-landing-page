import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const categories = ["Latest Tools", "Caregiver Tools", "Top rated Tools", "Most viewed Tools"];

const products = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  name: ["Divi Supreme Pro", "Divi Plus", "Divi Events Calendar"][i % 3],
  price: ["$79", "$79", "$14"][i % 3],
  rating: "300+",
  image: null,
}));

const BrowseProducts = () => {
  const [activeCategory, setActiveCategory] = useState("Latest Tools");

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">Browse All Products</h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-secondary border border-border rounded-lg py-2 px-4 pr-9 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
              <button className="p-2 border border-border rounded-lg hover:bg-secondary transition-colors">
                <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-[200px_1fr] gap-6">
            {/* Sidebar */}
            <div className="bg-card rounded-xl border border-border p-4">
              <h3 className="font-semibold text-sm text-foreground mb-3">Categories</h3>
              <ul className="space-y-1">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left text-xs py-1.5 px-2 rounded-md transition-colors ${
                        activeCategory === cat
                          ? "text-primary font-semibold bg-primary/5"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-card rounded-xl border border-border overflow-hidden card-hover cursor-pointer"
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 via-accent/5 to-secondary flex items-center justify-center relative">
                    <div className="absolute top-2 left-2 bg-primary/10 text-primary text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      {product.rating} reviews
                    </div>
                    <span className="text-muted-foreground text-xs">Product Preview</span>
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-primary/20" />
                        <p className="text-xs font-medium text-foreground">{product.name}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-foreground">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseProducts;
