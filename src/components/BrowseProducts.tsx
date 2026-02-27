import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const categories = [
  "Latest Tools",
  "Caregiver Tools",
  "Top rated Tools",
  "Most viewed Tools",
];

const products = [
  { id: 1, name: "Divi Supreme Pro",      price: "$79", image: "/images/Group 172.jpg" },
  { id: 2, name: "Divi Plus",             price: "$79", image: "/images/Group 173.jpg" },
  { id: 3, name: "Divi Events Calendar",  price: "$54", image: "/images/Group 174.jpg" },
  { id: 4, name: "Divi Supreme Pro",      price: "$79", image: "/images/Group 175.jpg" },
  { id: 5, name: "Divi Plus",             price: "$79", image: "/images/Group 176.jpg" },
  { id: 6, name: "Divi Events Calendar",  price: "$54", image: "/images/Group 177.jpg" },
  { id: 7, name: "Divi Supreme Pro",      price: "$79", image: "/images/Group 178.jpg" },
  { id: 8, name: "Divi Plus",             price: "$79", image: "/images/Group 179.jpg" },
  { id: 9, name: "Divi Events Calendar",  price: "$54", image: "/images/Group 172.jpg" },
];

const BrowseProducts = () => {
  const [activeCategory, setActiveCategory] = useState("Latest Tools");
  const [checked, setChecked] = useState<string[]>([]);

  const toggleCheck = (cat: string) => {
    setChecked((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
    setActiveCategory(cat);
  };

  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at left center, #f8d7f0 0%, #ffffff 40%, #ffffff 60%, #d7e8f8 100%)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 xl:px-16">

        {/* Header row */}
        <div className="flex items-center gap-4 mb-8">
          <h2
            className="text-xl font-bold text-[#1D1F2D] whitespace-nowrap"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Browse All Products
          </h2>

          {/* Search bar */}
          <div className="relative flex-1 max-w-xs">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-white border border-gray-200 rounded-full py-2 pl-4 pr-10 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-sm"
            />
            <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-blue-400" />
          </div>

          {/* Filter icon */}
          <button className="p-2 hover:bg-white/60 rounded-lg transition-colors">
            <SlidersHorizontal className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Sidebar + Grid */}
        <div className="grid md:grid-cols-[220px_1fr] gap-6 items-start">

          {/* Sidebar */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3
              className="font-bold text-[#1D1F2D] text-sm mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Categories
            </h3>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={checked.includes(cat)}
                      onChange={() => toggleCheck(cat)}
                      className="w-4 h-4 rounded border-gray-300 accent-blue-500 cursor-pointer"
                    />
                    <span
                      className={`text-sm transition-colors ${
                        checked.includes(cat)
                          ? "text-[#0052FF] font-semibold"
                          : "text-gray-600 group-hover:text-gray-900"
                      }`}
                    >
                      {cat}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200 group border border-gray-100"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://placehold.co/400x250/e2e8f0/94a3b8?text=" +
                        encodeURIComponent(product.name);
                    }}
                  />
                </div>

                {/* Name + Price */}
                <div className="px-3 py-2.5 flex items-center justify-between">
                  <p
                    className="text-xs font-semibold text-[#1D1F2D] truncate max-w-[70%]"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {product.name}
                  </p>
                  <span className="text-xs font-bold text-gray-400">
                    {product.price}
                  </span>
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
