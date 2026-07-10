import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap", // performance optimization
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap", // performance optimization
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dhanyaenterprises.com"),
  title: {
    default: "Dhanya Enterprises | Best Digital Marketing Agency in Pattambi, Kerala",
    template: "%s | Dhanya Enterprises Pattambi",
  },
  description: "Dhanya Enterprises is the top digital marketing and web development agency in Pattambi, Kerala. We scale brands with SEO, Ads, and creative solutions.",
  keywords: [
    "Digital Marketing Agency in Pattambi",
    "Best Digital Marketing Company in Kerala",
    "Website Development in Pattambi",
    "Website Designing in Kerala",
    "SEO Services in Kerala",
    "Social Media Marketing Kerala",
    "Branding Agency Kerala",
    "Dhanya Enterprises Pattambi",
    "Google Ads management Kerala",
    "Meta Ads Kerala",
    "Graphic Designing Pattambi"
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Dhanya Enterprises | Best Digital Marketing Agency in Pattambi, Kerala",
    description: "Dhanya Enterprises is the premier digital marketing and website development agency in Pattambi, Kerala. We scale brands with SEO, Google Ads, Meta campaigns, and graphic design.",
    url: "https://dhanya-enterprises.vercel.app",
    siteName: "Dhanya Enterprises",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo-new.png",
        width: 415,
        height: 444,
        alt: "Dhanya Enterprises Logo",
      }
    ]
  },
  twitter: {
    card: "summary",
    title: "Dhanya Enterprises | Best Digital Marketing Agency in Pattambi, Kerala",
    description: "Dhanya Enterprises is the premier digital marketing and website development agency in Pattambi, Kerala. We scale brands with SEO, Google Ads, Meta campaigns, and graphic design.",
    images: ["/images/logo-new.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAFAFA] text-[#1F2937]">
        {/* Organization & Local Business Combined JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://dhanya-enterprises.vercel.app/#organization",
                  "name": "Dhanya Enterprises",
                  "url": "https://dhanya-enterprises.vercel.app",
                  "logo": "https://dhanya-enterprises.vercel.app/images/logo-new.png",
                  "sameAs": [
                    "https://www.facebook.com/dhanyaenterprisesptb",
                    "https://www.instagram.com/dhanyaenterprisesptb/",
                    "https://www.youtube.com/@dhanyaenterprises",
                    "https://www.linkedin.com/company/dhanyaenterprises/",
                    "https://x.com/dhanyaent"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://dhanya-enterprises.vercel.app/#website",
                  "url": "https://dhanya-enterprises.vercel.app",
                  "name": "Dhanya Enterprises",
                  "publisher": {
                    "@id": "https://dhanya-enterprises.vercel.app/#organization"
                  }
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://dhanya-enterprises.vercel.app/#localbusiness",
                  "name": "Dhanya Enterprises",
                  "image": "https://dhanya-enterprises.vercel.app/images/portfolio_ecommerce.jpg",
                  "url": "https://dhanya-enterprises.vercel.app",
                  "telephone": ["+919745108772", "+919961992772"],
                  "priceRange": "$$",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Hayath Complex, Opposite Police Station",
                    "addressLocality": "Pattambi",
                    "addressRegion": "Kerala",
                    "postalCode": "679303",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "10.8091",
                    "longitude": "76.1969"
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday"
                    ],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                }
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
