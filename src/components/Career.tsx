import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Virtual Experience Program</h4>
                <h5>JPMorgan Chase (Forage)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Collaborated with a professional team to solve business-oriented challenges. Developed analytical and communication skills while presenting project solutions, following professional workflows and documentation practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Electrical and Electronics Engineering</h4>
                <h5>Seshadri Rao Gudlavalleru Engineering College</h5>
              </div>
              <h3>2023 - 2026</h3>
            </div>
            <p>
              Pursuing undergraduate degree in EEE with a focus on core engineering principles and modern technology integrations. Current CGPA: 8.19/10
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Electrical and Electronics Engineering</h4>
                <h5>Government Polytechnic, Visakhapatnam</h5>
              </div>
              <h3>2020 - 2023</h3>
            </div>
            <p>
              Completed foundational diploma program in EEE with practical lab work and technical training. Completed with a CGPA of 7.3/10
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Professional Certifications</h4>
                <h5>Oracle • IBM • NPTEL</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              • Oracle Generative AI Professional <br />
              • IBM SQL Certification <br />
              • NPTEL – Intern
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
