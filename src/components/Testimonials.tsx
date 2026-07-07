"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star, Quote } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Founder",
      company: "Sharma Retail Group",
      rating: 5,
      review: "Dhanya Enterprises transformed our digital footprint. Our store sales increased by 145% in 3 months! Their local SEO strategies and Google Ads setups are extremely effective.",
      initials: "RS",
      gradient: "from-[#E30613] to-red-400",
    },
    {
      name: "Anjali Nair",
      role: "Marketing Director",
      company: "Nair Organics",
      rating: 5,
      review: "We received over 60 high-quality leads for our organic products launch within the first month. Their Instagram and Meta Ads targeting is precise and returns excellent value.",
      initials: "AN",
      gradient: "from-blue-500 to-teal-400",
    },
    {
      name: "Mohammed Asif",
      role: "Co-Founder",
      company: "Asif Tech Solutions",
      rating: 5,
      review: "The new website they built is ultra-fast and matches our premium tech branding. We've seen a 210% increase in online inquiries. Excellent design team!",
      initials: "MA",
      gradient: "from-purple-500 to-indigo-400",
    },
    {
      name: "Priya Menon",
      role: "CEO",
      company: "Menon & Associates",
      rating: 5,
      review: "Our training workshop led by Dhanya Enterprises was outstanding. Our sales teams saw instant performance improvements. The branding materials they designed are state-of-the-art.",
      initials: "PM",
      gradient: "from-amber-500 to-orange-400",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#F8F8F8] relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-semibold text-xs tracking-wider uppercase text-primary mb-2.5 block">
            Reviews
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-dark tracking-tight leading-tight mb-4">
            What Our Clients <span className="text-primary">Say</span>
          </h2>
          <p className="font-sans text-lg text-text-secondary">
            Hear directly from the business owners and marketing executives who have scaled their brands with us.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="px-2 pb-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white border border-border-light rounded-[18px] p-8 h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative group">
                  {/* Quote Icon Overlay */}
                  <div className="absolute top-6 right-6 text-border-light group-hover:text-primary/10 transition-colors duration-300">
                    <Quote size={40} className="transform rotate-180" />
                  </div>

                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed mb-8 italic">
                      &ldquo;{item.review}&rdquo;
                    </p>
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center gap-4 border-t border-border-light/70 pt-6 mt-auto">
                    {/* Initials Avatar */}
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${item.gradient} text-white flex items-center justify-center font-heading font-extrabold text-sm shadow-inner`}>
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-dark leading-tight">
                        {item.name}
                      </h4>
                      <p className="font-sans text-xs text-text-secondary font-medium">
                        {item.role}, <span className="text-primary font-semibold">{item.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
