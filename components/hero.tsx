"use client";
import { handleScroll } from "@/utils/scroll-onclick";
import Image from "next/image";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Web Developer",
  "Laravel, Livewire, Next.js, React.js, Vue.js Engineer",
  "Web Development Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        40,
      );
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="profile"
      className="relative flex items-center justify-center min-h-screen bg-center bg-cover"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      <div
        data-aos="fade-down"
        className="relative z-10 flex flex-col items-center gap-6 px-6 text-center"
      >
        <div className="ring-4 ring-cyan-400 ring-offset-4 ring-offset-black/40 rounded-full shadow-2xl overflow-hidden w-32 h-32 md:w-40 md:h-40">
          <Image
            src="/images/profile-image.jpg"
            alt="Allan Justine Mascariñas"
            width={160}
            height={160}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div>
          <p className="text-cyan-300 text-sm font-semibold tracking-widest uppercase mb-1">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Allan Justine Mascariñas
          </h1>
          <div className="mt-3 h-8 flex items-center justify-center">
            <span className="text-lg md:text-xl text-cyan-300 font-medium">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </div>
        <p className="max-w-xl text-gray-300 text-sm md:text-base leading-relaxed">
          Passionate about crafting beautiful, performant web applications with
          modern technologies.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <a
            href="https://github.com/allanjustine"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gray-800 border border-gray-600 rounded-full hover:bg-gray-700 hover:-translate-y-1 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.797 8.207 11.387.599.111.82-.261.82-.578v-2.17c-3.338.725-4.038-1.607-4.038-1.607-.545-1.384-1.333-1.752-1.333-1.752-1.09-.747.083-.73.083-.73 1.207.085 1.838 1.238 1.838 1.238 1.073 1.837 2.809 1.305 3.494 1 .108-.777.419-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.933 0-1.31.468-2.378 1.236-3.22-.125-.303-.535-1.525.117-3.175 0 0 1.009-.322 3.303 1.23a11.48 11.48 0 0 1 3.006-.405c1.023.005 2.047.138 3.003.405 2.293-1.552 3.303-1.23 3.303-1.23.653 1.65.243 2.872.119 3.175.767.842 1.236 1.91 1.236 3.22 0 4.615-2.814 5.626-5.489 5.922.43.374.819 1.106.819 2.232v3.289c0 .319.223.693.825.576C20.56 21.795 24 17.3 24 12 24 5.373 18.627 0 12 0z" />
            </svg>
            GitHub
          </a>
          <a
            href="/files/My-Resume.pdf"
            download="My-Resume.pdf"
            target="_blank"
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-cyan-500 rounded-full hover:bg-cyan-400 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-cyan-500/30"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18" />
            </svg>
            Download CV
          </a>
          <a
            href="mailto:labya31@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-cyan-400 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Hire Me
          </a>
        </div>
        <button
          type="button"
          onClick={handleScroll("#projects")}
          className="mt-6 animate-bounce text-gray-400 hover:text-cyan-400 transition-colors"
          aria-label="Scroll down"
        >
          <svg
            className="w-12 h-20"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <rect x="7" y="2" width="10" height="16" rx="5" ry="5" />
            <line x1="12" y1="6" x2="12" y2="9" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
