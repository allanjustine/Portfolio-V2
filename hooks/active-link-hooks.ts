import { useEffect, useState } from "react";

export const useActiveLink = () => {
  const [active, setActive] = useState("#profile");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return {
    active,
  };
};
