import gsap from "gsap";
// ❌ smoother removed

export function initialFX() {
  document.body.style.overflowY = "auto";

  // ❌ smoother.paused(false); → REMOVE
  document.getElementsByTagName("main")[0].classList.add("main-active");

  // Background animation
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  // 🔥 Landing text animation (simple)
  gsap.fromTo(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.inOut",
      stagger: 0.1,
      delay: 0.3,
    }
  );


  // 🔥 Info text
  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.8,
    }
  );

  // 🔥 Navbar / icons fade
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}