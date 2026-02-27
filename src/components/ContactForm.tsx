import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "",
    employees: "", industry: "", message: ""
  });

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Ready to Transform Your Communication?
          </h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-lg mx-auto">
            We're here to answer your questions and guide you toward smarter, 
            seamless communication. Book your demo now!
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="bg-secondary border border-border rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input
              type="email"
              placeholder="Job or position title"
              className="bg-secondary border border-border rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <input
              type="email"
              placeholder="Business email address"
              className="bg-secondary border border-border rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="tel"
              placeholder="Company phone"
              className="bg-secondary border border-border rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <input
              type="text"
              placeholder="# of total SPL shift"
              className="bg-secondary border border-border rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <select className="bg-secondary border border-border rounded-lg py-2.5 px-4 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option>Market size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Enterprise</option>
            </select>
          </div>
          <textarea
            placeholder="How can we help you?"
            rows={4}
            className="w-full mt-4 bg-secondary border border-border rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
          <button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg text-sm font-medium transition-colors">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
