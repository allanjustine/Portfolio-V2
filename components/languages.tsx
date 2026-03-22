import { tools } from "@/data/portfolio";
import Image from "next/image";
import { CSSProperties } from "react";

const QUANTITY = tools.length;
const TIME = "40s";

export default function Languages() {
  return (
    <section id="languages" data-aos="fade-up" className="py-20 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Languages <span className="text-cyan-500">&amp; Tools</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full mx-auto" />
        <p className="mt-4 text-gray-500 text-sm">Technologies I work with</p>
      </div>

      <div className="slider-wrapper">
        {/* Row 1 — left to right */}
        <div
          className="slider"
          style={{ "--time": TIME, "--quantity": QUANTITY } as CSSProperties}
        >
          <ul>
            {tools.map((tool) => (
              <li key={tool.index} style={{ "--index": tool.index } as CSSProperties} title={tool.name}>
                <Image src={tool.src} alt={tool.name} width={60} height={60} unoptimized />
                <span>{tool.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Row 2 — right to left */}
        <div
          className="slider slider-reverse"
          style={{ "--time": TIME, "--quantity": QUANTITY } as CSSProperties}
        >
          <ul>
            {[...tools].reverse().map((tool) => (
              <li key={tool.index} style={{ "--index": tool.index } as CSSProperties} title={tool.name}>
                <Image src={tool.src} alt={tool.name} width={60} height={60} unoptimized />
                <span>{tool.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
