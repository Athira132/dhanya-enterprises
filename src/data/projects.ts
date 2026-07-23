export interface Project {
  title: string;
  url: string;
  category: string;
  desc: string;
  image: string;
  tech: string[];
  github?: string;
}

export const projects: Project[] = [
  {
    title: "New Vishwas Furniture",
    url: "https://newvishwasfurniture.in/",
    category: "Furniture & Interiors",
    desc: "Premium furniture showroom website showcasing luxury home and office collections.",
    image: "/images/portfolio_furniture.png",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Alfa Travel Link",
    url: "https://alfatravellink.com/",
    category: "Travel & Tourism",
    desc: "Professional travel agency portal presenting global tours, visa assistance, and flight booking.",
    image: "/images/portfolio_travel.png",
    tech: ["React", "CSS3", "Next.js"],
  },
  {
    title: "Mondari Group",
    url: "https://mondarigroup.com/",
    category: "Corporate Business",
    desc: "Multi-divisional corporate enterprise website highlighting group services and values.",
    image: "/images/portfolio_corporate.png",
    tech: ["TypeScript", "Next.js", "Tailwind"],
  },
  {
    title: "Life Care Health Solutions",
    url: "https://lifecarehealthsolutions.com/",
    category: "Healthcare & Nursing",
    desc: "Patient-oriented platform presenting home nursing, clinical care, and support details.",
    image: "/images/portfolio_healthcare.png",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "Bloomax Residency",
    url: "https://bloomaxresidency.com/",
    category: "Hotel & Residency",
    desc: "Elegant hospitality booking showcase outlining modern residency rooms and premium amenities.",
    image: "/images/portfolio_residency.png",
    tech: ["React", "Tailwind", "Vite"],
  },
  {
    title: "Classy Wood Interior",
    url: "https://classywoodinterior.com/",
    category: "Interior Design",
    desc: "Premium interior designers portfolio displaying custom home space architectures.",
    image: "/images/portfolio_interior.png",
    tech: ["Next.js", "Tailwind", "CSS Grid"],
  },
  {
    title: "Velvet Haven",
    url: "https://velvethaven.in/",
    category: "Resort Website",
    desc: "Premium private pool villa and luxury resort website in Vagamon, Kerala, offering booking integration, room showcases, and a refined brand identity.",
    image: "/images/velvethaven.jpg",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "iPhonix",
    url: "https://iphonix.in/",
    category: "Business Website",
    desc: "Professional multi-brand smartphone repair service center website in Trivandrum, presenting repair services, booking options, and diagnostic details.",
    image: "/images/iphonix.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];
