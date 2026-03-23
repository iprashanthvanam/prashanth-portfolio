import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaPlay, FaCode } from "react-icons/fa";

import faceImg from "../assets/face.png";
import petImg from "../assets/pet.png";
import plagImg from "../assets/plag.png";
import ruralImg from "../assets/rural_dev.svg";

// Enhanced project data with impact + features
const projectsData = [
  {
    title: "Face Recognition System",
    image: faceImg,
    impact: "Automated attendance — 95%+ recognition accuracy",
    desc: "A real-time security system using OpenCV and deep learning to detect and recognize faces, automating attendance marking.",
    features: [
      "Real-time face detection via webcam stream",
      "TensorFlow model fine-tuned on custom dataset",
      "Attendance export to CSV / admin dashboard",
    ],
    tech: ["Flask", "OpenCV", "TensorFlow"],
    github: "https://github.com/iprashanthvanam/face_recognition_system",
    demo: "https://iprashanthvanam.pythonanywhere.com/",
  },
  {
    title: "The Pet Portal",
    image: petImg,
    impact: "Connecting 100+ shelters with adopters",
    desc: "A full-stack web platform that bridges animal shelters with potential adopters, featuring profiles, search, and matching.",
    features: [
      "Pet search with breed & location filters",
      "User & shelter profile management",
      "Responsive UI built with Django templates",
    ],
    tech: ["Python", "Django", "SQLite"],
    github: "https://github.com/iprashanthvanam/the_pet_portal",
    demo: "https://thepetportal.pythonanywhere.com/",
  },
  {
    title: "Plagiarism Analysis Application",
    image: plagImg,
    impact: "Detection accuracy improved by ~30% over baseline",
    desc: "A tool that analyzes text similarity against web content using TF-IDF and semantic analysis to detect duplication.",
    features: [
      "TF-IDF + cosine similarity engine",
      "Google Search API integration for web comparison",
      "PDF report generation for submissions",
    ],
    tech: ["Python", "React", "Node.js"],
    github: "https://github.com/iprashanthvanam/Plagiarism_AI_detection_app",
    demo: "https://plagiarismanalyser-d8a6d0f9f2deczhn.southindia-01.azurewebsites.net/",
  },
  {
    title: "Rural Development Recommendation System",
    image: ruralImg,
    impact: "AI-powered planning tool for 500k+ Indian villages",
    desc: "A Django web app where village officials enter data and instantly receive AI recommendations, GIS maps, analytics charts, and a formatted PDF report — all server-generated in one submission.",
    features: [
      "Rule-based AI engine across 9+ dev categories",
      "GeoPandas GIS map with emoji-annotated infrastructure",
      "ReportLab multi-page landscape PDF for district authorities",
    ],
    tech: ["Django", "GeoPandas", "ReportLab", "Matplotlib"],
    github: "https://github.com/iprashanthvanam/rural_dev_web",
    demo: "https://rural-dev-web-rai3.onrender.com",
  },
];

export default function Projects() {
  const ref = useScrollAnimation();

  return (
    <section id="projects" ref={ref} className="animate">
      <h2 className="section-title">Projects</h2>

      <div className="project-grid">
        {projectsData.map((p, i) => (
          <div className="project-card" key={i}>

            {/* LEFT: Content */}
            <div className="project-content">
              <h3 className="project-title">{p.title}</h3>

              {/* Impact line — recruiters love this */}
              <p className="project-impact">🚀 {p.impact}</p>

              <p className="project-desc">{p.desc}</p>

              {/* Feature bullets */}
              <ul className="project-features">
                {p.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>

              <div className="project-tech">
                {p.tech.map((t, k) => (
                  <span key={k}>{t}</span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="action-btn"
                  title="Live Demo"
                >
                  <FaPlay />
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="action-btn"
                  title="View Code"
                >
                  <FaCode />
                </a>
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="project-img-container">
              <img src={p.image} alt={p.title} />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}