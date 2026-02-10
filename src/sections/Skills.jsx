


// import { skills } from "../data/skills";
// import useScrollAnimation from "../hooks/useScrollAnimation";

// export default function Skills() {
//   const ref = useScrollAnimation();

//   return (
//     <section id="skills" ref={ref} className="animate">
//       <h2 className="section-title">Skills</h2>

//       <div className="skills-grid">
//         {skills.map((skill, i) => (
//           <div className="card" key={i}>
//             <h3>{skill}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
























// import useScrollAnimation from "../hooks/useScrollAnimation";

// // 1. Import FontAwesome icons (fa)
// import { 
//   FaFigma, FaReact, FaBootstrap, FaHtml5, FaJava, FaPython, 
//   FaCss3Alt, FaJs, FaAws, FaGitAlt, FaWindows 
// } from "react-icons/fa";

// // 2. Import SimpleIcons (si)
// import { 
//   SiTailwindcss, SiMysql, SiPostgresql, SiMongodb, SiFlask, SiDjango 
// } from "react-icons/si";

// // 3. Define your skills data safely
// const skillsData = [
//   { name: "Figma", icon: <FaFigma color="#F24E1E" /> },
//   { name: "React", icon: <FaReact color="#61DAFB" /> },
//   { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
//   { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
//   { name: "Java", icon: <FaJava color="#007396" /> },
//   { name: "Python", icon: <FaPython color="#3776AB" /> },
//   { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
//   { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
//   { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
//   { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
//   { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
//   { name: "Git", icon: <FaGitAlt color="#F05032" /> },
//   { name: "AWS", icon: <FaAws color="#FF9900" /> },
//   { name: "MS Office", icon: <FaWindows color="#0078D7" /> }, /* Changed to generic Windows icon */
//   { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
//   { name: "Flask", icon: <SiFlask color="#ffffff" /> },
//   { name: "Django", icon: <SiDjango color="#092E20" /> }
// ];

// export default function Skills() {
//   const ref = useScrollAnimation();

//   return (
//     <section id="skills" ref={ref} className="animate">
//       <h2 className="section-title">Skills</h2>

//       <div className="marquee-container">
//         {/* We wrap the content in a moving div */}
//         <div className="marquee-content">
          
//           {/* Render list ONCE */}
//           {skillsData.map((skill, i) => (
//             <div className="skill-card" key={`a-${i}`}>
//               <div className="skill-icon">{skill.icon}</div>
//               <p>{skill.name}</p>
//             </div>
//           ))}

//           {/* Render list TWICE (Duplicate) to create seamless loop */}
//           {skillsData.map((skill, i) => (
//             <div className="skill-card" key={`b-${i}`}>
//               <div className="skill-icon">{skill.icon}</div>
//               <p>{skill.name}</p>
//             </div>
//           ))}
          
//         </div>
//       </div>
//     </section>
//   );
// }






import useScrollAnimation from "../hooks/useScrollAnimation";

// 1. Import FontAwesome icons (fa)
import { 
  FaFigma, FaReact, FaBootstrap, FaHtml5, FaJava, FaPython, 
  FaCss3Alt, FaJs, FaAws, FaGitAlt, FaWindows 
} from "react-icons/fa";

// 2. Import SimpleIcons (si)
import { 
  SiTailwindcss, SiMysql, SiPostgresql, SiMongodb, SiFlask, SiDjango 
} from "react-icons/si";

// 3. Define skills with their Official Brand Colors
const skillsData = [
  { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "Java", icon: <FaJava />, color: "#F89820" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900" },
  { name: "MS Office", icon: <FaWindows />, color: "#0078D7" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Flask", icon: <SiFlask />, color: "#ffffff" },
  { name: "Django", icon: <SiDjango />, color: "#092E20" }
];

export default function Skills() {
  const ref = useScrollAnimation();

  return (
    <section id="skills" ref={ref} className="animate">
      <h2 className="section-title">Skills</h2>

      <div className="marquee-container">
        <div className="marquee-content">
          
          {/* Render list ONCE */}
          {skillsData.map((skill, i) => (
            <div 
              className="skill-card" 
              key={`a-${i}`}
              // Pass the brand color to CSS as a variable
              style={{ "--skill-color": skill.color }} 
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <p>{skill.name}</p>
            </div>
          ))}

          {/* Render list TWICE for seamless loop */}
          {skillsData.map((skill, i) => (
            <div 
              className="skill-card" 
              key={`b-${i}`}
              style={{ "--skill-color": skill.color }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}