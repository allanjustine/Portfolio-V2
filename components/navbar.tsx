"use client";

import { useActiveLink } from "@/hooks/active-link-hooks";
import { handleScroll } from "@/utils/scroll-onclick";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#profile", label: "Profile" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About Me" },
  { href: "#languages", label: "Languages & Tools" },
  { href: "#contact", label: "Contact Me" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { active } = useActiveLink();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    handleScroll(href)();
  };

  return (
    <nav
      ref={navRef}
      id="navbar"
      className={`fixed z-50 w-full max-w-screen-lg -translate-x-1/2 left-1/2 top-4 rounded-2xl transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/10"
          : ""
      }`}
    >
      <div className="flex items-center justify-between px-5 py-3">
        <button
          type="button"
          onClick={() => handleLinkClick("#profile")}
          className="text-lg font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          &lt;Dev_Allan-J /&gt;
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              type="button"
              onClick={() => handleLinkClick(l.href)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === l.href
                  ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/30"
                  : "text-cyan-500 hover:text-cyan-300 hover:bg-white/10"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-cyan-500 hover:text-cyan-300 transition-colors p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-1">
          {links.map((l) => (
            <button
              type="button"
              key={l.href}
              onClick={() => handleLinkClick(l.href)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === l.href
                  ? "bg-cyan-500 text-white"
                  : "text-cyan-500 hover:bg-white/10 hover:text-cyan-300"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
