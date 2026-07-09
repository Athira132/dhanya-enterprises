import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects & Marketing Case Studies | Dhanya Enterprises Kerala",
  description: "Browse our digital marketing case studies and website development portfolio in Kerala. Discover how we scale booking queries, property leads, and business stores.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
