"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import { Star, ChevronRight, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { staticGoogleReviews, GoogleReview } from "@/data/googleReviews";

export default function TestimonialsPage() {
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
        console.error("Failed to load Google Reviews, using cached fallback data:", err);
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Banner Section */}
        <section className="relative pt-36 pb-20 bg-[#111111] text-white overflow-hidden">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-sans font-semibold text-gray-400 mb-6 tracking-wider uppercase">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={12} className="text-gray-600" />
              <span className="text-primary font-bold">Testimonials</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-white mb-4 tracking-tight">
                Client Success Stories
              </h1>
              <p className="font-sans text-base sm:text-lg text-gray-400 leading-relaxed">
                Trusted by businesses across Kerala and beyond. Read genuine reviews from our Google Business Profile.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials List */}
        <section className="py-24 bg-white relative">
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            {isLoading ? (
              <div className="flex flex-col gap-8 animate-pulse">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white border border-border-light rounded-[20px] p-8 h-48 flex flex-col justify-between" />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                {reviews.map((test, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="bg-white border border-border-light rounded-[20px] p-8 shadow-sm flex flex-col md:flex-row gap-8 items-start relative hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
                  >
                    {/* Decorative big quote icon */}
                    <div className="absolute right-8 top-8 opacity-[0.03] text-dark select-none pointer-events-none">
                      <Quote size={120} />
                    </div>

                    {/* Left Column: Author meta */}
                    <div className="w-full md:w-1/4 shrink-0 flex flex-col">
                      <div className="flex gap-3 items-center mb-4">
                        {test.profile_photo_url ? (
                          <div className="relative w-11 h-11 rounded-full overflow-hidden border border-border-light bg-gray-50">
                            <Image
                              src={test.profile_photo_url}
                              alt={test.author_name}
                              fill
                              sizes="44px"
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                        ) : (
                          <div className="w-11 h-11 rounded-full bg-primary/5 text-primary border border-primary/10 flex items-center justify-center font-sans font-bold text-sm shrink-0">
                            {getInitials(test.author_name)}
                          </div>
                        )}
                        <div className="flex flex-col">
                          <h4 className="font-heading font-bold text-sm text-dark leading-tight group-hover:text-primary transition-colors">
                            {test.author_name}
                          </h4>
                          <span className="font-sans text-[10px] text-gray-400 font-semibold tracking-wide block mt-0.5">
                            {test.relative_time_description}
                          </span>
                        </div>
                      </div>
                      
                      {/* Stars */}
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={i < test.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} 
                          />
                        ))}
                      </div>
                      
                      <span className="text-[9px] font-sans font-black bg-[#4285F4]/10 text-[#4285F4] px-2 py-0.5 rounded border border-[#4285F4]/10 uppercase tracking-widest leading-none w-fit mt-1">
                        Google Verified
                      </span>
                    </div>

                    {/* Right Column: Review Text */}
                    <div className="flex-1 font-sans text-base text-text-secondary leading-relaxed pt-1 md:pt-0 flex flex-col justify-between h-full">
                      <p className="relative pl-6 mb-6">
                        <span className="absolute left-0 top-0 text-primary font-serif text-3xl leading-none">&ldquo;</span>
                        {test.text}
                        <span className="text-primary font-serif text-3xl leading-none">&rdquo;</span>
                      </p>
                      
                      <a
                        href={test.author_url || "https://share.google/k78HUfvZnF8SRXVq1"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans font-bold text-xs text-primary hover:text-primary-hover flex items-center gap-1.5 transition-colors cursor-pointer w-fit"
                      >
                        Read Original Review on Google
                        <span className="text-[10px]">&rarr;</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            
            {/* Call to Action at Bottom */}
            <div className="text-center mt-16">
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
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
