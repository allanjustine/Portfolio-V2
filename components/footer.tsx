"use client";

import { useActiveLink } from "@/hooks/active-link-hooks";
import { handleScroll } from "@/utils/scroll-onclick";

const footerLinks = [
  { href: "#profile", label: "Profile" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About Me" },
  { href: "#contact", label: "Contact Me" },
];

const socials = [
  { href: "https://www.facebook.com", icon: "fab fa-facebook-f", label: "Facebook" },
  { href: "https://www.instagram.com", icon: "fab fa-instagram", label: "Instagram" },
  { href: "https://x.com", icon: "fa-brands fa-x-twitter", label: "X" },
  { href: "https://www.linkedin.com", icon: "fa-brands fa-linkedin-in", label: "LinkedIn" },
  { href: "https://github.com/allanjustine", icon: "fab fa-github", label: "GitHub" },
];

export default function Footer() {
  const { active } = useActiveLink();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500" />
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">&lt;Allan /&gt;</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Full-Stack Web Developer passionate about building powerful and efficient web applications.
            </p>
            <p className="text-xs text-gray-500 mt-3">SMCT Group of Companies · J.A Clarin, Tagbilaran, Bohol</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <button
                    type="button"
                    onClick={handleScroll(l.href)}
                    className={`text-sm transition-all duration-200 hover:text-cyan-400 hover:translate-x-1 inline-flex items-center gap-1.5 ${
                      active === l.href ? "text-cyan-400" : "text-gray-400"
                    }`}
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500 inline-block" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Connect With Me</h3>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-cyan-500 hover:text-white transition-all duration-200 hover:-translate-y-1 border border-gray-700 hover:border-cyan-500"
                >
                  <i className={`${s.icon} text-sm`} />
                </a>
              ))}
            </div>
            <a
              href="mailto:labya31@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <i className="fas fa-envelope text-xs" />
              labya31@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear() } Allan Justine Mascariñas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
