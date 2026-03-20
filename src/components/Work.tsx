import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdOpenInNew, MdOutlinePlayCircle } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "Insight Now",
    category: "News Web Application",
    tools: "MERN Stack, Postman, Jira — Fake news detection + swipe UI",
    image: "/images/Solidx.png",
    liveUrl: "https://insight-now-truth-in-every-scroll.vercel.app/",
    githubUrl: "https://github.com/PiyushKhatwa/InsightNow-Truth-in-Every-Scroll",
  },
  {
    title: "Pashu AI",
    category: "Cattle Breed Recognition",
    tools: "AI, Image Classification, Optimized upload + inference workflow",
    image: "/images/radix.png",
    liveUrl: "Not deployed",
    githubUrl: "https://github.com/PiyushKhatwa/pashu.ai.git",
    videoUrl: "https://drive.google.com/file/d/1fJ4rpOt5KvXR8BTqSe3UEUyWaBTvAzd1/view?usp=drivesdk",
  },
  {
    title: "Placement & Internship Portal",
    category: "Role-Based Web Platform",
    tools: "MERN Stack — Auth, CRUD, Database validation",
    image: "/images/bond.png",
    liveUrl: "Not Deployed",
    githubUrl: "https://github.com/PiyushKhatwa/BU-placement-internship-portal.git",
  },
  {
    title: "Autism Detection App",
    category: "AI Healthcare Web App",
    tools: "React, Node.js, Machine Learning Integration",
    image: "/images/sapphire.png",
    liveUrl: "https://autisim-predictor.vercel.app/",
    githubUrl: "https://github.com/PiyushKhatwa/autisim-predictor.git",
  },
  {
    title: "Airbnb Clone",
    category: "Full Stack Web App",
    tools: "MERN Stack — Listings, Auth, Booking flow",
    image: "/images/Maxlife.png",
    liveUrl: "Not Deployed",
    githubUrl: "https://github.com/PiyushKhatwa/WANDERLUST-airbnb-clone-.git",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => {
                console.log("DEBUG Render Slide:", index, project.title, "liveUrl:", project.liveUrl, "videoUrl:", project.videoUrl);
                return (
                  <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="carousel-project-links">
                          {project.liveUrl && project.liveUrl !== "#" && (
                            project.liveUrl.startsWith("http") ? (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="carousel-btn carousel-btn-live"
                                data-cursor="disable"
                              >
                                <MdOpenInNew /> Live
                              </a>
                            ) : (
                              <span className="carousel-btn carousel-btn-github" style={{ opacity: 0.7, cursor: 'default' }}>
                                {project.liveUrl}
                              </span>
                            )
                          )}
                          {project.videoUrl && (
                            <a
                              href={project.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="carousel-btn"
                              style={{ backgroundColor: "#dc2626", color: "#fff", outline: 'none' }}
                              data-cursor="disable"
                            >
                              <MdOutlinePlayCircle /> Video Preview
                            </a>
                          )}
                          {project.githubUrl && project.githubUrl !== "#" && (
                            project.githubUrl.startsWith("http") ? (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="carousel-btn carousel-btn-github"
                                data-cursor="disable"
                              >
                                <FaGithub /> GitHub
                              </a>
                            ) : (
                              <span className="carousel-btn carousel-btn-github" style={{ opacity: 0.7, cursor: 'default' }}>
                                {project.githubUrl}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              )})}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
