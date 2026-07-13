"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";

function Counter({ value, duration = 1.5 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Parse numeric values and suffixes (e.g. "250+" -> 250 and "+")
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!isInView || target === 0) return;

    const end = target;
    const totalDurationMs = duration * 1000;
    
    // We want to update at roughly 60fps
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(totalDurationMs / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      // Ease out cubic
      const progress = frame / totalFrames;
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.round(easeOutProgress * end);

      setCount(currentCount);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-heading font-black text-5xl md:text-6xl text-white">
      {count}
      <span className="text-primary">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const stats = [
    { value: "250+", label: "Happy Clients" },
    { value: "400+", label: "Projects Completed" },
    { value: "8+", label: "Years of Experience" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-20 bg-[#111111] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 justify-items-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center text-center gap-3.5"
            >
              <Counter value={stat.value} />
              <p className="font-sans text-sm md:text-base text-gray-400 font-semibold tracking-wider uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
