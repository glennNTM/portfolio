"use client";

import React from "react";
import Image from "next/image";

type OrbitIcon = {
  key: string;
  iconPath: string;
  label: string;
  color: string; // Hex color for glow
};

type TechOrbitProps = {
  className?: string;
  sizePx?: number; // overall diameter in px (fallback to responsive classes if undefined)
};

export default function TechOrbit({ className, sizePx }: TechOrbitProps) {
  const icons: OrbitIcon[] = [
    {
      key: "python",
      iconPath: "/python-svgrepo-com.svg",
      label: "Python",
      color: "#3776AB",
    },
    {
      key: "django",
      iconPath: "/django-svgrepo-com.svg",
      label: "Django",
      color: "#0C4B33",
    },
    {
      key: "react",
      iconPath: "/react-svgrepo-com.svg",
      label: "React",
      color: "#61DAFB",
    },
    {
      key: "nextjs",
      iconPath: "/next.svg",
      label: "Next.js",
      color: "#FFFFFF",
    },
    {
      key: "tailwind",
      iconPath: "/tail.svg",
      label: "TailwindCSS",
      color: "#38BDF8",
    },
    {
      key: "postgres",
      iconPath: "/postgresql-logo-svgrepo-com.svg",
      label: "PostgreSQL",
      color: "#336791",
    },
  ];

  const count = icons.length;

  // Container size handling
  const inlineSize = sizePx ? { width: sizePx, height: sizePx } : undefined;
  const radius = sizePx ? sizePx / 2 - 22 : undefined; // icon offset radius (px)

  return (
    <div
      className={`relative mx-auto flex items-center justify-center rounded-full ${
        sizePx ? "" : "w-56 h-56 md:w-64 md:h-64"
      } ${className || ""}`}
      style={inlineSize}
    >
      {/* Dark neon background disk */}
      <div className="absolute inset-0 rounded-full bg-[#0B0B0F]/90 shadow-[0_0_80px_-30px_rgba(124,58,237,0.6)]" />

      {/* Static orbit container (no visible ring) */}
      <div
        className={`relative rounded-full ${sizePx ? "" : "w-[88%] h-[88%]"}`}
        style={
          sizePx ? { width: sizePx * 0.88, height: sizePx * 0.88 } : undefined
        }
      >
        {/* Radial connectors from center to each tech icon */}
        {icons.map((_, idx) => {
          const angle = (360 / count) * idx;
          const lineLen = sizePx ? radius : 90;
          return (
            <div
              key={`line-${idx}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              <div
                className="origin-top mx-auto"
                style={{
                  width: 1,
                  height: lineLen,
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.25), rgba(255,255,255,0))",
                  opacity: 0.5,
                }}
              />
            </div>
          );
        })}
        {/* Orbiting icons */}
        {icons.map((icon, idx) => {
          const angle = (360 / count) * idx; // degrees
          const transform = sizePx
            ? `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`
            : `rotate(${angle}deg) translate(90px) rotate(${-angle}deg)`; // default radius for responsive

          return (
            <div
              key={icon.key}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group"
              style={{ transform }}
            >
              <div
                className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-125 hover:bg-white/10 hover:border-white/20 cursor-pointer"
                style={{
                  boxShadow: `0 0 18px 0 ${icon.color}55, 0 0 2px 0 ${icon.color}AA`,
                }}
                title={icon.label}
              >
                <Image
                  src={icon.iconPath}
                  alt={icon.label}
                  width={24}
                  height={24}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                {/* Glow effect that intensifies on hover */}
                <span
                  className="pointer-events-none absolute -z-10 block rounded-full transition-all duration-300 group-hover:scale-150"
                  style={{
                    width: 22,
                    height: 22,
                    boxShadow: `0 0 30px 6px ${icon.color}44`,
                  }}
                />
                {/* Stronger glow on hover */}
                <span
                  className="pointer-events-none absolute -z-10 block rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    width: 30,
                    height: 30,
                    boxShadow: `0 0 40px 12px ${icon.color}88`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
