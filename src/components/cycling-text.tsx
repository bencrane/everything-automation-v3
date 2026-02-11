"use client";

import { useState, useEffect, useRef } from "react";

const phrases = [
  "drive revenue",
  "cut costs",
  "detect signals",
  "generate pipeline",
  "scale operations",
];

const TYPING_SPEED = 60;
const DELETING_SPEED = 30;
const HOLD_DURATION = 2800;
const PAUSE_BETWEEN = 400;

export function CyclingText() {
  const [displayText, setDisplayText] = useState(phrases[0]);
  const [phase, setPhase] = useState<
    "holding" | "deleting" | "pausing" | "typing"
  >("holding");
  const phraseIndex = useRef(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    switch (phase) {
      case "holding":
        timeout = setTimeout(() => setPhase("deleting"), HOLD_DURATION);
        break;

      case "deleting":
        if (displayText === "") {
          phraseIndex.current =
            (phraseIndex.current + 1) % phrases.length;
          setPhase("pausing");
        } else {
          timeout = setTimeout(() => {
            setDisplayText((prev) => prev.slice(0, -1));
          }, DELETING_SPEED);
        }
        break;

      case "pausing":
        timeout = setTimeout(() => setPhase("typing"), PAUSE_BETWEEN);
        break;

      case "typing": {
        const target = phrases[phraseIndex.current];
        if (displayText === target) {
          setPhase("holding");
        } else {
          timeout = setTimeout(() => {
            setDisplayText(target.slice(0, displayText.length + 1));
          }, TYPING_SPEED);
        }
        break;
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, phase]);

  return (
    <span>
      {displayText}
      <span
        className="animate-blink font-light"
        style={{
          marginLeft: "0.05em",
          color: "var(--color-text-faint)",
        }}
      >
        _
      </span>
    </span>
  );
}
