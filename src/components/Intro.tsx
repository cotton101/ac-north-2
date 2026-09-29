"use client";

import { useEffect, useState } from "react";
import { INTRO_KEY } from "@/lib/site";

const WORDS = [
  { text: "Maps", colour: "#47b1fb" },
  { text: "Profiles", colour: "#016be2" },
  { text: "Websites", colour: "#2f8cff" },
  { text: "Citations", colour: "#7cc6ff" },
  { text: "Rankings", colour: "#34c3f0" },
  { text: "Local SEO", colour: "#f3f7fc" },
];

const STEP = 360;

/**
 * Opening screen, after the reference site's: the name with a word that changes
 * underneath, then the page slides into view. Shown once per browser session;
 * an inline script in the layout hides it straight away on later pages.
 */
export default function Intro() {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<"on" | "leaving" | "gone">("on");

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(INTRO_KEY) === "1";
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {}
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduced) {
      const t = setTimeout(() => setPhase("gone"), 0);
      return () => clearTimeout(t);
    }

    document.body.style.overflow = "hidden";
    const tick = setInterval(() => setI((n) => Math.min(n + 1, WORDS.length - 1)), STEP);
    const leave = setTimeout(() => setPhase("leaving"), STEP * WORDS.length + 250);
    const done = setTimeout(() => {
      setPhase("gone");
      document.body.style.overflow = "";
    }, STEP * WORDS.length + 1050);
    return () => {
      clearInterval(tick);
      clearTimeout(leave);
      clearTimeout(done);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      aria-hidden="true"
      className={`intro fixed inset-0 z-[60] flex items-center justify-center bg-night transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] ${
        phase === "leaving" ? "-translate-y-full" : ""
      }`}
    >
      <div className="text-center">
        <p className="text-5xl font-semibold tracking-[-0.02em] sm:text-7xl">AC North</p>
        <div className="relative mt-2 h-[1.3em] overflow-hidden text-3xl font-semibold sm:text-5xl">
          <p key={i} className="animate-[word-up_0.36s_ease-out_both]" style={{ color: WORDS[i].colour }}>
            {WORDS[i].text}
          </p>
        </div>
      </div>
    </div>
  );
}
