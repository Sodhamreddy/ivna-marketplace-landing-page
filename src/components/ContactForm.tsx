import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    email: "",
    phone: "",
    shifts: "",
    marketSize: "",
    message: "",
  });

  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-6 xl:px-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#1D1F2D]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Ready to Transform Your Communication?
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">
            We're here to answer your questions and guide you toward smarter,
            seamless communication. Book your demo now!
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052FF]/30 focus:border-[#0052FF] transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Job or position title"
              className="bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052FF]/30 focus:border-[#0052FF] transition-colors"
              value={formData.jobTitle}
              onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
            />
            <input
              type="email"
              placeholder="Business email address"
              className="bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052FF]/30 focus:border-[#0052FF] transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Company phone"
              className="bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052FF]/30 focus:border-[#0052FF] transition-colors"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <input
              type="text"
              placeholder="# of total SPL shift"
              className="bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052FF]/30 focus:border-[#0052FF] transition-colors"
              value={formData.shifts}
              onChange={(e) => setFormData({ ...formData, shifts: e.target.value })}
            />
            <select
              className="bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/30 focus:border-[#0052FF] transition-colors"
              value={formData.marketSize}
              onChange={(e) => setFormData({ ...formData, marketSize: e.target.value })}
            >
              <option value="">Market size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>
          <textarea
            placeholder="How can we help you?"
            rows={4}
            className="w-full mt-4 bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052FF]/30 focus:border-[#0052FF] transition-colors resize-none"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button className="w-full mt-4 bg-[#0052FF] hover:bg-[#003ECC] text-white py-3 rounded-lg text-sm font-semibold transition-colors shadow-sm">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
