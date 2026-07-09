import type { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews | Dhanya Enterprises",
  description: "Read verified customer success stories and live Google Reviews. Trusted by local retail shops, start-ups, and professionals across Kerala.",
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
