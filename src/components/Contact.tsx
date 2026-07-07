"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessName: "",
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
                      placeholder="John Doe"
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
                      placeholder="john@example.com"
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
                      placeholder="+91 98765 43210"
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
                      placeholder="Acme Corp"
                    />
                  </div>
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
                  Your inquiry was successfully sent. A marketing expert from Dhanya Enterprises will contact you within 24 hours.
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
              <div>
                <h4 className="font-heading font-bold text-sm text-dark mb-1">Phone</h4>
                <a href="tel:+919840123456" className="font-sans text-xs text-text-secondary hover:text-primary transition-colors">
                  +91 98401 23456
                </a>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-border-light shadow-sm">
              <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-dark mb-1">Email</h4>
                <a href="mailto:info@dhanyaenterprises.com" className="font-sans text-xs text-text-secondary hover:text-primary transition-colors">
                  info@dhanyaenterprises.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-border-light shadow-sm">
              <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-dark mb-1">Address</h4>
                <p className="font-sans text-xs text-text-secondary leading-relaxed">
                  Suite 405, Executive Chambers, MG Road, Bangalore, Karnataka - 560001
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-border-light shadow-sm">
              <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                <Clock size={18} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-dark mb-1">Hours</h4>
                <p className="font-sans text-xs text-text-secondary leading-relaxed">
                  Mon - Sat: 9:00 AM - 6:30 PM<br />Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-border-light relative bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9715978168285!2d77.6085189!3d12.9733475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1679904d94b1%3A0xa1fa816e8854de56!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1783070000000!5m2!1sen!2sin"
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
