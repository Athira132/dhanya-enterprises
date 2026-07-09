export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
  author_url?: string;
}

export const staticGoogleReviews: GoogleReview[] = [
  {
    author_name: "Santhosh Kumar",
    rating: 5,
    text: "Highly professional digital marketing service! Their local maps SEO optimization dramatically boosted our retail store footfalls in Pattambi. Hassle-free and excellent communication.",
    relative_time_description: "2 months ago",
  },
  {
    author_name: "Athira Sasi",
    rating: 5,
    text: "Outstanding graphic designer and web development services. They built a custom responsive brand profile for my fashion boutique Vogue Maison. Highly recommended!",
    relative_time_description: "1 month ago",
  },
  {
    author_name: "Dr. K. Mehta",
    rating: 5,
    text: "Excellent clinic portal built using Next.js. Very fast speed and optimized for mobile users. We now receive regular customer inquiries daily.",
    relative_time_description: "3 weeks ago",
  },
  {
    author_name: "Prakash Raj",
    rating: 5,
    text: "Outstanding vehicle finance and insurance service. Extremely prompt response and minimal paperwork. Low interest rate and low document charges.",
    relative_time_description: "4 months ago",
  },
  {
    author_name: "Deepa Menon",
    rating: 5,
    text: "Superb web development agency. They helped us map our domains and launch a highly stable portal with excellent support.",
    relative_time_description: "5 months ago",
  }
];
