import React, { ReactNode } from 'react';
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import Image from "next/image";
import Link from 'next/link';

interface Project {
  title: ReactNode;
  description: string;
  image?: string;
  tags: string[];
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    title:<Link href={"https://aestheticmedicinesurgery.vercel.app"}>E-Clinic</Link>,
    description:
      "A responsive portfolio website showcasing projects, skills, and contact information with smooth animations and optimal performance.",
    image: "/projects/e-clinic.png",
    tags: ["Next", "Typescript", "NodeJS"],
    link: "https://aestheticmedicinesurgery.vercel.app",
    github: "#",
  },
  {
    title:<Link href={"https://pursuitmedicalschoolquiz.vercel.app"}>Pursuit Medical School</Link>,
    description:
      "Pursuit Medical School is an innovative e-learning platform designed to revolutionize medical education by providing aspiring physicians with comprehensive, interactive, and accessible preparation for their medical school journey.",
    image: "/projects/School.png",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    link: "https://pursuitmedicalschoolquiz.vercel.app",
    github: "#",
  },
  {
    title:<Link href={"https://pursuit-digital-services.vercel.app"}>Pursuit Digital Services</Link>,
    description:
      "Pursuit Digital Services transforms businesses through cutting-edge digital solutions that blend innovative technology with strategic execution.",
    image: "/projects/Services.png",
    tags: ["Next.js", "Framer motion", "MDx"],
    link: "https://pursuit-digital-services.vercel.app",
    github: "#",
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-muted-foreground">No Image</span>
                  </div>
                )}
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label={`Visit ${project.title} website`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};












// import { ArrowUpRight, Github } from "lucide-react";
// import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
// import Image from "next/image";
// const projects = [
//   {
//     title: "E-Clinic",
//     description:
//       "A responsive portfolio website showcasing projects, skills, and contact information with smooth animations and optimal performance.",
//     image: "/projects\e-clinic.png",
//     tags: ["Next", "Typescript", "NodeJS"],
//     link: "https://aestheticmedicinesurgery.vercel.app",
    
//     github: "#",
//   },
//   {
//     title: "Pursuit Medical School",
//     description:
//       "Pursuit Medical School is an innovative e-learning platform designed to revolutionize medical education by providing aspiring physicians with comprehensive, interactive, and accessible preparation for their medical school journey.",
//     image: "/projects/project2.png",
//     tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
//     link: "https://pursuitmedicalschoolquiz.vercel.app",
//     github: "#",
//   },
//   {
//     title: "Pursuit Digital Services",
//     description:
//       "Pursuit Digital Services transforms businesses through cutting-edge digital solutions that blend innovative technology with strategic execution.",
//     tags: ["Next.js", "Framer motion", "MDx"],
//     link: "https://pursuit-digital-services.vercel.app",
//     github: "#",
//   },
// ];

// export const Projects = () => {
//   return (
//     <section id="projects" className="py-32 relative overflow-hidden">
//       {/* Bg glows */}
//       <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mx-auto max-w-3xl mb-16">
//           <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
//             Featured Work
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
//             Projects that
//             <span className="font-serif italic font-normal text-white">
//               {" "}
//               make an impact.
//             </span>
//           </h2>
//           <p className="text-muted-foreground animate-fade-in animation-delay-200">
//             A selection of my recent work, from complex web applications to
//             innovative tools that solve real-world problems.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, idx) => (
//             <div
//               key={idx}
//               className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
//               style={{ animationDelay: `${(idx + 1) * 100}ms` }}
//             >
//               {/* Image */}
//               <div className="relative overflow-hidden aspect-video">
//                 <Image
//                                   src="/hero-bg.jpg"
//                                   alt="Muhammad Ijaz"
//                                   width={1200} 
//                                   height={800}
//                                   className="w-full aspect-4/5 object-cover rounded-2xl"
//                                 />
//                 <div
//                   className="absolute inset-0 
//                 bg-linear-to-t from-card via-card/50
//                  to-transparent opacity-60"
//                 />
//                 {/* Overlay Links */}
//                 <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <a
//                     href={project.link}
//                     className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
//                   >
//                     <ArrowUpRight className="w-5 h-5" />
//                   </a>
//                   <a
//                     href={project.github}
//                     className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
//                   >
//                     <Github className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6 space-y-4">
//                 <div className="flex items-start justify-between">
//                   <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
//                     {project.title}
//                   </h3>
//                   <ArrowUpRight
//                     className="w-5 h-5 
//                   text-muted-foreground group-hover:text-primary
//                    group-hover:translate-x-1 
//                    group-hover:-translate-y-1 transition-all"
//                   />
//                 </div>
//                 <p className="text-muted-foreground text-sm">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, tagIdx) => (
//                     <span
//                       key={tagIdx}
//                       className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All CTA */}
//         <div className="text-center mt-12 animate-fade-in animation-delay-500">
//           <AnimatedBorderButton>
//             View All Projects
//             <ArrowUpRight className="w-5 h-5" />
//           </AnimatedBorderButton>
//         </div>
//       </div>
//     </section>
//   );
// };
