"use client";

import { useState } from "react";
import Image from "next/image";

type Project = {
  title: string;
  images: string[];
  github?: string;
  githubFE?: string;
  githubBE?: string;
  live?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? project.images.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === project.images.length - 1 ? 0 : c + 1));

  const links = [
    project.github && {
      href: project.github,
      label: "GitHub",
      icon: "fab fa-github",
    },
    project.githubFE && {
      href: project.githubFE,
      label: "GitHub FE",
      icon: "fab fa-github",
    },
    project.githubBE && {
      href: project.githubBE,
      label: "GitHub BE",
      icon: "fab fa-github",
    },
    project.live && {
      href: project.live,
      label: "Live Preview",
      icon: "fas fa-external-link-alt",
    },
  ].filter(Boolean) as { href: string; label: string; icon: string }[];

  return (
    <div className="flex-shrink-0 w-72 md:w-80 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group snap-center">
      <div className="relative w-full h-48">
        <Image
          src={project.images[current]}
          alt={project.title}
          fill
          className="object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => window.open(project.images[current], "_blank")}
        />

        {project.images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-all"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 6 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-all"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 6 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-200 ${i === current ? "w-4 h-2 bg-white" : "w-2 h-2 bg-white/50"}`}
                />
              ))}
            </div>
            <span className="absolute top-2 right-2 z-30 text-xs font-medium text-white bg-black/40 px-2 py-0.5 rounded-full">
              {current + 1}/{project.images.length}
            </span>
          </>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-sm mb-3 line-clamp-2 leading-snug">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                l.label.includes("Live")
                  ? "bg-cyan-50 text-cyan-600 border border-cyan-200 hover:bg-cyan-500 hover:text-white hover:border-cyan-500"
                  : "bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-800 hover:text-white hover:border-gray-800"
              }`}
            >
              <i className={`${l.icon} text-xs`} />
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
