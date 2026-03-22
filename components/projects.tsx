"use client";
import { useRef } from "react";
import { projects } from "@/data/portfolio";
import ProjectCard from "./project-card";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -350 : 350, behavior: "smooth" });
  };

  return (
    <section id="projects" data-aos="fade-up" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            My <span className="text-cyan-500">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full mx-auto" />
          <p className="mt-4 text-gray-500 text-sm max-w-md mx-auto">
            A collection of projects I&apos;ve built — from full-stack apps to management systems.
          </p>
          <span className="inline-block mt-3 px-3 py-1 text-xs font-semibold text-cyan-600 bg-cyan-50 border border-cyan-200 rounded-full">
            {projects.length} projects
          </span>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute z-20 left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg hover:bg-cyan-50 transition-all duration-200 border border-gray-100"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute z-20 right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg hover:bg-cyan-50 transition-all duration-200 border border-gray-100"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
            </svg>
          </button>

          <div ref={scrollRef} className="overflow-x-auto scroll-smooth scrollbar-hide px-6 py-4">
            <div className="flex gap-5 w-max">
              {projects.map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
