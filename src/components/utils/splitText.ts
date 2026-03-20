import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  // 🧹 Clean previous triggers (important)
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  ScrollTrigger.config({ ignoreMobileResize: true });

  if (window.innerWidth < 900) return;

  const paras = document.querySelectorAll(".para");
  const titles = document.querySelectorAll(".title");

  const TriggerStart =
    window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  // 🔥 Paragraph animation
  paras.forEach((para: Element) => {
    gsap.fromTo(
      para,
      {
        autoAlpha: 0,
        y: 80,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: para,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });

  // 🔥 Title animation
  titles.forEach((title: Element) => {
    gsap.fromTo(
      title,
      {
        autoAlpha: 0,
        y: 80,
        rotate: 10,
      },
      {
        autoAlpha: 1,
        y: 0,
        rotate: 0,
        duration: 0.8,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: title,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });

  // 🔁 Refresh after setup
  ScrollTrigger.refresh();
}