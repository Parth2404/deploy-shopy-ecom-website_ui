"use client";

import { useState } from "react";
import { motion, PanInfo } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";

const mod = (n: number, m: number) => ((n % m) + m) % m;

type Screen = {
  screenshot: { src: string; alt: string };
  title: string;
  body: string;
};

export function ScreenshotSlider({ screens }: { screens: Screen[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => prev + 1);
  const prev = () => setCurrentIndex((prev) => prev - 1);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -50) {
      next();
    } else if (info.offset.x > 50) {
      prev();
    }
  };

  return (
    <div className="relative flex w-full flex-col items-center overflow-hidden py-12 lg:hidden">
      <div className="relative flex w-full items-center justify-center">
        {/* Invisible placeholder to maintain container height */}
        <div className="invisible flex w-[78vw] max-w-[300px] flex-col items-center text-center">
          <PhoneMockup src={screens[0].screenshot.src} alt="" />
          <div className="mt-6 w-[78vw] max-w-[300px]">
            <h3 className="text-base font-semibold text-ink">
              {screens[0].title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
              {screens[0].body}
            </p>
          </div>
        </div>

        {screens.map((screen, i) => {
          let distance = i - mod(currentIndex, screens.length);
          if (distance < -1) distance += screens.length;
          if (distance > 1) distance -= screens.length;

          const isActive = distance === 0;

          return (
            <motion.div
              key={screen.title}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className={`absolute flex w-[78vw] max-w-[300px] flex-col items-center text-center ${
                isActive ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"
              }`}
              onClick={() => {
                if (!isActive) {
                  setCurrentIndex(currentIndex + distance);
                }
              }}
              initial={false}
              animate={{
                x: `${distance * 95}%`,
                scale: isActive ? 1 : 0.85,
                opacity: isActive ? 1 : 0.4,
                zIndex: isActive ? 10 : 5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <PhoneMockup
                src={screen.screenshot.src}
                alt={screen.screenshot.alt}
              />
              <motion.div
                className="mt-6"
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-base font-semibold text-ink">
                  {screen.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {screen.body}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center gap-6">
        <button
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors hover:bg-ink/5 focus:outline-none"
          aria-label="Previous screenshot"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {screens.map((_, i) => {
            const isActive = mod(currentIndex, screens.length) === i;
            return (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => {
                  const currentMod = mod(currentIndex, screens.length);
                  const diff = i - currentMod;
                  let adjustment = diff;
                  if (diff > 1) adjustment -= screens.length;
                  if (diff < -1) adjustment += screens.length;
                  setCurrentIndex(currentIndex + adjustment);
                }}
                className={`h-2 rounded-full transition-all ${
                  isActive
                    ? "w-6 bg-ink"
                    : "w-2 bg-ink/20 hover:bg-ink/40"
                }`}
              />
            );
          })}
        </div>
        <button
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors hover:bg-ink/5 focus:outline-none"
          aria-label="Next screenshot"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
