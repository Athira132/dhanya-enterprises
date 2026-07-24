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
    image: "/images/portfolio_velvethaven.png",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "iPhonix Mobile Service Centre",
    url: "https://iphonix.in/",
    category: "Business Website",
    desc: "Professional multi-brand smartphone repair service center website in Trivandrum, presenting repair services, booking options, and diagnostic details.",
    image: "/images/portfolio_iphonix.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "KL Ayurvedha",
    url: "https://klayurveda.com/",
    category: "Wellness Website",
    desc: "Created a wellness-focused website presenting Ayurvedic treatments, natural healthcare solutions, wellness programs, and consultation services with a calming, trustworthy design.",
    image: "/images/portfolio_ayurveda.png",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Chorode SCB",
    url: "https://chorodescb.in/",
    category: "Banking Website",
    desc: "Developed a secure corporate banking and agricultural cooperative portal with structured financial services and student cooperative modules.",
    image: "/images/portfolio_chorode.png",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
  },
  {
    title: "Lemppaat Academy",
    url: "https://lemppaatacademy.com/",
    category: "Educational Academy",
    desc: "Built a professional academy website showcasing training programs, admissions, faculty information, career-oriented courses, and lead-generation features.",
    image: "/images/portfolio_academy.png",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
  },
  {
    title: "Shoranur Co-operative Service Bank (SCSB)",
    url: "https://scsb.in/",
    category: "Banking Website",
    desc: "Designed a secure and modern corporate banking and agricultural cooperative portal for Shoranur Co-operative Service Bank, featuring member facilities, loan programs, and local financial updates.",
    image: "/images/portfolio_scsb.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];
