"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { staticGoogleReviews, GoogleReview } from "@/data/googleReviews";

export default function Testimonials() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadReviews() {
      try {
        const cached = localStorage.getItem("dhanya_google_reviews");
        if (cached) {
          setReviews(JSON.parse(cached));
          setIsLoading(false);
          
          fetch("/api/reviews")
            .then((res) => {
              if (!res.ok) throw new Error();
              return res.json();
            })
            .then((data: GoogleReview[]) => {
              if (Array.isArray(data) && data.length > 0) {
                const filtered = data.filter((r: GoogleReview) => r.rating >= 4);
                setReviews(filtered);
                localStorage.setItem("dhanya_google_reviews", JSON.stringify(filtered));
              }
            })
            .catch(() => {});
          return;
        }

        const res = await fetch("/api/reviews");
        if (!res.ok) throw new Error();
        const data: GoogleReview[] = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const filtered = data.filter((r: GoogleReview) => r.rating >= 4);
          setReviews(filtered);
          localStorage.setItem("dhanya_google_reviews", JSON.stringify(filtered));
        } else {
          throw new Error();
        }
      } catch (err) {
        console.error("Failed to load Google Reviews, using static fallback cache:", err);
        setReviews(staticGoogleReviews);
      } finally {
        setIsLoading(false);
      }
    }
    loadReviews();
  }, []);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  if (isLoading) {
    return (
      <section id="testimonials" className="py-24 bg-[#F8F8F8] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mx-auto mb-3" />
            <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mx-auto mb-4" />
            <div className="h-4 w-96 bg-gray-200 rounded animate-pulse mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-border-light rounded-[18px] p-8 h-64 animate-pulse flex flex-col justify-between">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200" />
                  <div className="flex flex-col gap-2">
                    <div className="h-4 w-28 bg-gray-200 rounded" />
                    <div className="h-3 w-16 bg-gray-200 rounded" />
                  </div>
                </div>
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-3/4 bg-gray-200 rounded" />
                <div className="h-8 w-24 bg-gray-200 rounded mt-4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-24 bg-[#F8F8F8] relative overflow-hidden">
      {/* Decorative Blur Background Overlay */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-semibold text-xs tracking-wider uppercase text-primary mb-2.5 block">
            Google Reviews
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-dark tracking-tight leading-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="font-sans text-base text-text-secondary leading-relaxed">
            Trusted by businesses across Kerala and beyond. Read genuine reviews from our Google Business Profile.
          </p>
        </div>

        {/* Swiper Slider wrapper with layout buttons */}
        <div className="px-2 pb-12 relative group/carousel">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ 
              delay: 5500, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white border border-border-light rounded-[18px] p-8 h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative group">
                  
                  {/* Card Header Info */}
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-3.5 items-center">
                        {item.profile_photo_url ? (
                          <div className="relative w-11 h-11 rounded-full overflow-hidden border border-border-light bg-gray-50">
                            <Image
                              src={item.profile_photo_url}
                              alt={item.author_name}
                              fill
                              sizes="44px"
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                        ) : (
                          <div className="w-11 h-11 rounded-full bg-primary/5 text-primary border border-primary/10 flex items-center justify-center font-sans font-bold text-sm shrink-0">
                            {getInitials(item.author_name)}
                          </div>
                        )}
                        <div className="flex flex-col">
                          <h4 className="font-heading font-bold text-sm text-dark leading-tight group-hover:text-primary transition-colors">
                            {item.author_name}
                          </h4>
                          <span className="font-sans text-[10px] text-gray-400 font-semibold tracking-wide block mt-0.5">
                            {item.relative_time_description}
                          </span>
                        </div>
                      </div>

                      {/* Google Logo / Verified Badge */}
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="text-[9px] font-sans font-black bg-[#4285F4]/10 text-[#4285F4] px-2 py-0.5 rounded border border-[#4285F4]/10 uppercase tracking-widest leading-none">
                          Google
                        </span>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1.5 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={i < item.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} 
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6">
                      {item.text}
                    </p>
                  </div>

                  {/* Read on Google Link */}
                  <div className="border-t border-border-light/70 pt-4 mt-auto">
                    <a
                      href={item.author_url || "https://share.google/k78HUfvZnF8SRXVq1"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-bold text-xs text-primary hover:text-primary-hover flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      Read on Google
                      <span className="text-[10px]">&rarr;</span>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-11 h-11 rounded-full bg-white border border-border-light shadow-sm text-text-secondary hover:text-primary hover:border-primary/20 flex items-center justify-center z-20 cursor-pointer opacity-0 group-hover/carousel:opacity-100 transition-all duration-300">
            <ChevronLeft size={18} />
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-11 h-11 rounded-full bg-white border border-border-light shadow-sm text-text-secondary hover:text-primary hover:border-primary/20 flex items-center justify-center z-20 cursor-pointer opacity-0 group-hover/carousel:opacity-100 transition-all duration-300">
            <ChevronRight size={18} />
          </button>
        </div>

        {/* CTA View All Reviews Button */}
        <div className="text-center mt-6">
          <Link
            href="https://share.google/k78HUfvZnF8SRXVq1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-border-light text-text-dark font-sans font-bold text-sm px-7 py-3.5 rounded-full hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all duration-300 shadow-sm cursor-pointer"
          >
            <Star className="fill-yellow-400 text-yellow-400" size={16} />
            View All Google Reviews
          </Link>
        </div>

      </div>
    </section>
  );
}
