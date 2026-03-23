import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaFolder, FaExternalLinkAlt } from "react-icons/fa";

// FIXED: removed duplicates, kept only 3 strong certs
const achievementsData = [
  {
    title: "ServiceNow System Administrator Certification",
    org: "ServiceNow",
    date: "July, 2025",
    category: "System Administration",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/ServiceNow_logo.svg",
    logoBg: "#0b3452",
    verify: "https://www.servicenow.com/",
  },
  {
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    org: "Oracle",
    date: "July 2025 – July 2027",
    category: "Database Management",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    logoBg: "#ffffff",
    verify: "https://education.oracle.com/",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    org: "Oracle",
    date: "Aug 2025 – Aug 2027",
    category: "Cloud Computing",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    logoBg: "#ffffff",
    verify: "https://education.oracle.com/",
  },
];

export default function Achievements() {
  const ref = useScrollAnimation();

  return (
    <section id="achievements" ref={ref} className="animate">
      <h2 className="section-title">Achievements</h2>

      <div className="achievements-container">
        {achievementsData.map((item, index) => (
          <div className="achievement-card" key={index}>

            <div className="achievement-content">
              <h3>{item.title}</h3>
              <p className="achievement-org">{item.org}</p>

              <div className="achievement-meta">
                <span className="meta-date">{item.date}</span>
                <span className="meta-category">
                  <FaFolder className="meta-icon" />
                  {item.category}
                </span>
                {item.verify && (
                  <a
                    href={item.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="meta-date"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <FaExternalLinkAlt className="meta-icon" />
                    Verify
                  </a>
                )}
              </div>
            </div>

            <div
              className="achievement-img-wrapper"
              style={{ backgroundColor: item.logoBg }}
            >
              <img src={item.image} alt={item.org} />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}