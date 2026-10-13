"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const trailRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    let lastTrailPosition: { x: number; y: number } | null = null;

    const handlePointerMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);

      const distance = lastTrailPosition
        ? Math.hypot(
            event.clientX - lastTrailPosition.x,
            event.clientY - lastTrailPosition.y,
          )
        : Infinity;

      if (distance >= 8) {
        const particle = document.createElement("span");
        particle.className = "trail-particle";
        particle.style.left = `${event.clientX}px`;
        particle.style.top = `${event.clientY}px`;
        particle.style.setProperty(
          "--drift-x",
          `${Math.round(Math.random() * 28 - 14)}px`,
        );
        particle.style.setProperty(
          "--drift-y",
          `${Math.round(Math.random() * -24 - 6)}px`,
        );
        trailRef.current?.appendChild(particle);
        window.setTimeout(() => particle.remove(), 700);
        lastTrailPosition = { x: event.clientX, y: event.clientY };
      }
    };

    const handlePointerDown = () => setIsPressed(true);
    const handlePointerUp = () => setIsPressed(false);
    const handlePointerLeave = () => setVisible(false);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <>
      <div ref={trailRef} className="custom-cursor-trail" aria-hidden="true" />
      <div
        className={`custom-cursor ${visible ? "visible" : ""} ${isPressed ? "pressed" : ""}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        aria-hidden="true"
      >
        <span className="cursor-core" />
        <span className="cursor-star" />
        <span className="dust dust-1" />
        <span className="dust dust-2" />
        <span className="dust dust-3" />
        <span className="dust dust-4" />
      </div>
    </>
  );
}
