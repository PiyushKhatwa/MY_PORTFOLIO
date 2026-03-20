import { useEffect, useRef } from "react";
import gsap from "gsap";

interface RotatingTextProps {
  words: string[];
}

const RotatingText = ({ words }: RotatingTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const wordElements = container.querySelectorAll(".rotating-word");

    // Initial state: hidden and slightly pushed down
    gsap.set(wordElements, { opacity: 0, y: 30 });

    const tl = gsap.timeline({ repeat: -1 });

    // Staggered timeline for each word
    wordElements.forEach((word) => {
      // 1. Fade in and slide up to their natural position
      tl.to(word, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      // 2. Hold for a moment so the user can read it
      tl.to(word, {
        opacity: 1,
        duration: 1.5,
      });

      // 3. Fade out and slide up, making way for the next word
      tl.to(word, {
        opacity: 0,
        y: -30,
        duration: 0.5,
        ease: "power3.in",
      });
    });

    return () => {
      // Cleanup GSAP timelines strictly to avoid stacking bugs
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: "grid", // Using grid to perfectly stack words without collapsing parent height
        placeItems: "start", // Align to the left
      }}
    >
      {words.map((word, index) => (
        <div
          key={index}
          className="rotating-word"
          style={{
            gridArea: "1 / 1 / 2 / 2", // Stack all words exactly on top of each other
            opacity: 0,
            whiteSpace: "nowrap", // Prevent breaking into multiple lines
          }}
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default RotatingText;
