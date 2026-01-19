

// import useScrollAnimation from "../hooks/useScrollAnimation";

// export default function Achievements() {
//   const ref = useScrollAnimation();

//   return (
//     <section ref={ref} className="animate">
//       <h2 className="section-title">Achievements</h2>

//       <div className="card">
//         ServiceNow System Administrator Certification
//       </div>
//       <div className="card">
//         Oracle Data Platform 2025 Certified Foundations Associate
//       </div>
//       <div className="card">
//         Oracle Cloud Infrastructure 2025 Certified Foundations Associate
//       </div>
//     </section>
//   );
// }

















import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaFolder } from "react-icons/fa";

// Data for your certifications
const achievementsData = [
  {
    title: "ServiceNow System Administrator Certification",
    org: "ServiceNow",
    date: "July, 2025",
    category: "System Administration",
    // ServiceNow Logo URL
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/ServiceNow_logo.svg", 
    logoBg: "#1a2b3c" // Dark Blue background for logo
  },
  {
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    org: "Oracle",
    date: "July, 2025 - July, 2027",
    category: "Database Management",
    // Oracle Logo URL
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    logoBg: "#ffffff" // White background for logo
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    org: "Oracle",
    date: "Aug, 2025 - Aug, 2027",
    category: "Database Management",
    // Oracle Logo URL
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    logoBg: "#ffffff" // White background for logo
  },
   {
    title: "ServiceNow System Administrator Certification",
    org: "ServiceNow",
    date: "July, 2025",
    category: "System Administration",
    // ServiceNow Logo URL
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/ServiceNow_logo.svg", 
    logoBg: "#1a2b3c" // Dark Blue background for logo
  },
  {
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    org: "Oracle",
    date: "July, 2025 - July, 2027",
    category: "Database Management",
    // Oracle Logo URL
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    logoBg: "#ffffff" // White background for logo
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    org: "Oracle",
    date: "Aug, 2025 - Aug, 2027",
    category: "Database Management",
    // Oracle Logo URL
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    logoBg: "#ffffff" // White background for logo
  }
];

export default function Achievements() {
  const ref = useScrollAnimation();

  return (
    <section id="achievements" ref={ref} className="animate">
      <h2 className="section-title">Achievements</h2>

      <div className="achievements-container">
        {achievementsData.map((item, index) => (
          <div className="achievement-card" key={index}>
            
            {/* LEFT SIDE: Text Content */}
            <div className="achievement-content">
              <h3>{item.title}</h3>
              <p className="achievement-org">{item.org}</p>
              
              <div className="achievement-meta">
                <span className="meta-date">{item.date}</span>
                
                {/* Folder Icon + Category */}
                <span className="meta-category">
                  <FaFolder className="meta-icon" /> 
                  {item.category}
                </span>
              </div>
            </div>

            {/* RIGHT SIDE: Logo Image */}
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
