"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle, Navigation } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request or link to WhatsApp
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        service: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white border border-border-light rounded-[24px] p-8 md:p-12 shadow-sm"
        >
          <div className="mb-8">
            <span className="font-sans font-semibold text-xs tracking-wider uppercase text-primary mb-2 block">
              Get in Touch
            </span>
            <h3 className="font-heading font-black text-2xl md:text-3xl text-dark">
              Request a Free Consultation
            </h3>
          </div>

          <AnimatePresence mode="wait">
            {!submitSuccess ? (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-sans text-xs font-semibold text-text-secondary">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="font-sans text-sm border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-[#FAFAFA]"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-sans text-xs font-semibold text-text-secondary">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="font-sans text-sm border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-[#FAFAFA]"
                      placeholder="your.email@gmail.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-sans text-xs font-semibold text-text-secondary">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="font-sans text-sm border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-[#FAFAFA]"
                      placeholder="+91 97451 08772"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="businessName" className="font-sans text-xs font-semibold text-text-secondary">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="font-sans text-sm border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-[#FAFAFA]"
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="font-sans text-xs font-semibold text-text-secondary">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="font-sans text-sm border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-[#FAFAFA]"
                  >
                    <option value="" disabled>Select a Service</option>
                    <option value="Website Design & Development">Website Design & Development</option>
                    <option value="E-commerce Website Development">E-commerce Website Development</option>
                    <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                    <option value="Mobile App Marketing">Mobile App Marketing</option>
                    <option value="Meta Ads (Facebook & Instagram Advertising)">Meta Ads (Facebook & Instagram Advertising)</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Video Editing & Motion Graphics">Video Editing & Motion Graphics</option>
                    <option value="Lead Generation Campaigns">Lead Generation Campaigns</option>
                    <option value="Local SEO & Google Business Profile Optimization">Local SEO & Google Business Profile Optimization</option>
                    <option value="Marketing Strategy & Consulting">Marketing Strategy & Consulting</option>
                    <option value="Marketplace Marketing (Amazon, Flipkart, etc.)">Marketplace Marketing (Amazon, Flipkart, etc.)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-sans text-xs font-semibold text-text-secondary">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="font-sans text-sm border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-[#FAFAFA] resize-none"
                    placeholder="Tell us about your digital marketing goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary-hover disabled:bg-primary/70 text-white font-sans font-bold text-base py-4 rounded-xl transition-all duration-300 shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-0.5 text-center mt-2 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center text-center py-12 gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center shadow-inner">
                  <CheckCircle size={36} />
                </div>
                <h4 className="font-heading font-bold text-2xl text-dark">Thank You!</h4>
                <p className="font-sans text-sm md:text-base text-text-secondary max-w-sm">
                  Your inquiry was successfully sent. A digital marketing expert from Dhanya Enterprises will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="text-primary hover:text-primary-hover font-sans font-semibold text-sm mt-4 underline focus:outline-none"
                >
                  Send another inquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right Side: Contact Cards & Maps */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          {/* Header */}
          <div>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-dark tracking-tight leading-tight mb-4">
              Connect With Us
            </h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed max-w-md">
              Have questions? We are always here to chat about your projects, strategies, or budget needs.
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-border-light shadow-sm">
              <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                <Phone size={18} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-heading font-bold text-sm text-dark">Phone</h4>
                <a href="tel:+919745108772" className="font-sans text-[11px] text-text-secondary hover:text-primary transition-colors font-semibold">
                  +91 97451 08772 (Office)
                </a>
                <a href="tel:+919961992772" className="font-sans text-[11px] text-text-secondary hover:text-primary transition-colors font-semibold">
                  +91 99619 92772 (CEO)
                </a>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-border-light shadow-sm">
              <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                <Mail size={18} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-heading font-bold text-sm text-dark">Email</h4>
                <a href="mailto:dhanyaenterprisesptb@gmail.com" className="font-sans text-[11px] text-text-secondary hover:text-primary transition-colors font-semibold truncate max-w-[180px]">
                  dhanyaenterprisesptb@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-border-light shadow-sm">
              <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                <MapPin size={18} />
              </div>
              <div className="flex-1">
                <h4 className="font-heading font-bold text-sm text-dark mb-1">Address</h4>
                <p className="font-sans text-xs text-text-secondary leading-relaxed mb-2.5">
                  Hayath Complex, Opp. Police station, Pattambi, Kerala - 679303
                </p>
                <a
                  href="https://maps.app.goo.gl/CcX7dnayUTSRZDFUA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs font-bold text-primary hover:text-primary-hover inline-flex items-center gap-1 group cursor-pointer"
                >
                  <Navigation size={12} className="text-primary group-hover:animate-pulse" />
                  Get Directions
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-border-light shadow-sm">
              <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                <Clock size={18} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-dark mb-1">Hours</h4>
                <p className="font-sans text-xs text-text-secondary leading-relaxed">
                  Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Embedded Google Map (New Address) */}
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-border-light relative bg-gray-100">
            <iframe
              src="https://maps.google.com/maps?q=Hayath%20Complex,%20Opp.%20Police%20station,%20Pattambi&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dhanya Enterprises Office Map"
              className="absolute inset-0"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
