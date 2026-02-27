import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const categories = [
  "Latest Tools",
  "Caregiver Tools",
  "Top rated Tools",
  "Most viewed Tools",
  "AI Extensions",
  "Clinical Tools",
];

// Use the image 20.png for the plugin grid items
const products = [
  { id: 1, name: "Divi Supreme Pro", price: "$79", rating: "300+", image: "/images/image 20.png", color: "#7C3AED" },
  { id: 2, name: "Divi Plus", price: "$79", rating: "300+", image: "/images/image 20.png", color: "#2ECC71" },
  { id: 3, name: "Divi Events Calendar", price: "$14", rating: "300+", image: "/images/image 20.png", color: "#E53E3E" },
  { id: 4, name: "Divi Supreme Pro", price: "$79", rating: "300+", image: "/images/image 20.png", color: "#7C3AED" },
  { id: 5, name: "Divi Plus", price: "$79", rating: "300+", image: "/images/image 20.png", color: "#2ECC71" },
  { id: 6, name: "Divi Events Calendar", price: "$14", rating: "300+", image: "/images/image 20.png", color: "#E53E3E" },
  { id: 7, name: "Divi Supreme Pro", price: "$79", rating: "300+", image: "/images/image 20.png", color: "#7C3AED" },
  { id: 8, name: "Divi Plus", price: "$79", rating: "300+", image: "/images/image 20.png", color: "#2ECC71" },
  { id: 9, name: "Divi Events Calendar", price: "$14", rating: "300+", image: "/images/image 20.png", color: "#E53E3E" },
];

const BrowseProducts = () => {
  const [activeCategory, setActiveCategory] = useState("Latest Tools");

  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-6 xl:px-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#1D1F2D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Browse All Products
          </h2>
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-50 border border-gray-200 rounded-lg py-2 px-4 pr-9 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/30"
              />
              <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <SlidersHorizontal className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Layout: Sidebar + Grid */}
        <div className="grid md:grid-cols-[200px_1fr] gap-6">
          {/* Sidebar */}
          <div className="bg-gray-50 rounded-xl border border-gray-100 p-4 h-fit">
            <h3 className="font-semibold text-sm text-[#1D1F2D] mb-3">Categories</h3>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left text-xs py-2 px-3 rounded-md transition-colors flex items-center gap-2 ${activeCategory === cat
                        ? "text-[#0052FF] font-semibold bg-[#0052FF]/10"
                        : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                      }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${activeCategory === cat ? 'bg-[#0052FF]' : 'bg-gray-300'}`} />
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="aspect-[16/11] relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.style.display = 'none';
                      const parent = el.parentElement;
                      if (parent) {
                        parent.style.background = product.color;
                        parent.style.display = 'flex';
                        parent.style.alignItems = 'center';
                        parent.style.justifyContent = 'center';
                        parent.innerHTML = `<span style="color:white;font-size:0.8rem;font-weight:700;text-align:center;padding:8px">${product.name}</span>`;
                      }
                    }}
                  />
                  <div
                    className="absolute top-2 left-2 text-white text-[9px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(0,0,0,0.5)' }}
                  >
                    {product.rating} reviews
                  </div>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3.5 h-3.5 rounded-full" style={{ background: product.color }} />
                      <p className="text-xs font-medium text-[#1D1F2D]">{product.name}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#1D1F2D]">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseProducts;
