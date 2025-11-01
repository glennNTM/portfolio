"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { gridItems } from "@/data";
import { cn } from "@/lib/utils";
import TechOrbit from "./TechOrbit";
import { GlobeDemo } from "./GridGlobe";

type CardProps = {
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  className?: string;
  img?: string;
  spareImg?: string;
  imgClassName?: string;
  titleClassName?: string;
};

function BentoCard({
  id,
  title,
  description,
  className,
  img,
  spareImg,
  imgClassName,
  titleClassName,
}: CardProps) {
  const isPortfolioImg = img === "/pportfolio.png";

  return (
    <div
      className={cn(
        "bento-card relative overflow-hidden rounded-3xl p-6 shadow-lg bg-[#0B0B0F] text-center transition-transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl border border-white/10",
        className
      )}
    >
      {img && (
        <div
          className={cn(
            "flex items-center justify-center",
            isPortfolioImg ? "mb-4" : "absolute inset-0"
          )}
        >
          <Image
            src={img}
            alt={typeof title === "string" ? title : `bento-${id}`}
            width={isPortfolioImg ? 350 : 800}
            height={isPortfolioImg ? 350 : 600}
            className={cn(
              isPortfolioImg
                ? "w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[350px] lg:h-[350px] rounded-full object-cover shadow-2xl"
                : "absolute inset-0 w-full h-full object-cover opacity-20",
              imgClassName
            )}
          />
        </div>
      )}
      {!img && spareImg && (
        <Image
          src={spareImg}
          alt="decoration"
          width={160}
          height={160}
          className="absolute -right-6 -bottom-6 w-40 h-40 opacity-20 object-contain"
        />
      )}

      {id === 4 ? (
        <>
          <div
            className={cn("font-bold text-lg md:text-xl flex", titleClassName)}
          >
            {title}
          </div>
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <GlobeDemo />
          </div>
        </>
      ) : (
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div
            className={cn("font-bold text-lg md:text-xl flex", titleClassName)}
          >
            {title}
          </div>
          {description &&
            (typeof description === "string" ? (
              <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                {description}
              </p>
            ) : (
              <div className="text-sm md:text-base text-neutral-300 leading-relaxed">
                {description}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default function BentoGrid({ className }: { className?: string }) {
  const [leftItems, rightItems] = useMemo(() => {
    const left: typeof gridItems = [];
    const right: typeof gridItems = [];
    gridItems.forEach((item, idx) => {
      (idx % 2 === 0 ? left : right).push(item);
    });
    return [left, right];
  }, []);

  return (
    <div
      id="bento-grid"
      className={cn(
        "masonry flex flex-col lg:flex-row gap-6 w-full max-w-6xl mx-auto",
        className
      )}
    >
      <div className="left-column flex flex-col gap-6 flex-1">
        {leftItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoCard
              key={id}
              id={id!}
              title={title}
              description={
                title === "Ma Stack de développement" ? (
                  <div className="flex flex-col items-center gap-4">
                    <TechOrbit />
                    {description && <p className="px-2">{description}</p>}
                  </div>
                ) : (
                  description
                )
              }
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </div>
      <div className="right-column flex flex-col gap-6 flex-1">
        {rightItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoCard
              key={id}
              id={id!}
              title={title}
              description={
                title === "Ma Stack de développement" ? (
                  <div className="flex flex-col items-center gap-4">
                    <TechOrbit />
                    {description && <p className="px-2">{description}</p>}
                  </div>
                ) : (
                  description
                )
              }
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </div>
    </div>
  );
}
