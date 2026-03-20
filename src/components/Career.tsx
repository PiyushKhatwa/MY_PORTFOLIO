import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br />
          background
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CBSE X</h4>
                <h5>St. Johns Sr Sec School, Kota</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Completed Class X with 75.50% under CBSE board. Built strong
              foundations in Mathematics, Science, and Computer Studies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CBSE XII — Science</h4>
                <h5>Kautilya Senior Secondary School, Kota</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed Class XII with 70.60% in the Science stream. Developed
              analytical thinking and problem-solving skills that formed the
              foundation for engineering studies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — Computer Science Engineering</h4>
                <h5>Bennett University, Greater Noida</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing B.Tech in CSE (Aug 2023 – May 2027). Active in
              hackathons including Smart India Hackathon and Walmart Sparkathon.
              Building full-stack projects, AI tools, and automation systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
