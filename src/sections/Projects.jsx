



// import { projects } from "../data/projects";
// import useScrollAnimation from "../hooks/useScrollAnimation";

// export default function Projects() {
//   const ref = useScrollAnimation();

//   return (
//     <section id="projects" ref={ref} className="animate">
//       <h2 className="section-title">Projects</h2>

//       <div className="project-grid">
//         {projects.map((p, i) => (
//           <div className="card" key={i} style={{ width: "300px" }}>
//             <h3>{p}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }















// import { projects } from "../data/projects";
// import useScrollAnimation from "../hooks/useScrollAnimation";
// import { FaGithub, FaPlay } from "react-icons/fa";

// export default function Projects() {
//   const ref = useScrollAnimation();

//   return (
//     <section id="projects" ref={ref} className="animate">
//       <h2 className="section-title">Projects</h2>

//       <div className="project-grid">
//         {projects.map((p, i) => (
//           <div className="project-card" key={i}>
            
//             {/* 1. Project Name (Always Visible at Top) */}
//             <div className="project-header">
//               <h3>{p.title}</h3>
//             </div>

//             {/* 2. Content Area (Image vs Description) */}
//             <div className="project-body">
//               {/* Image (Visible by default) */}
//               <img src={p.image} alt={p.title} className="project-img" />

//               {/* Overlay (Visible on Hover) */}
//               <div className="project-overlay">
//                 <p className="project-desc">{p.desc}</p>
                
//                 <div className="project-tech">
//                   {p.tech.map((t, idx) => (
//                     <span key={idx}>{t}</span>
//                   ))}
//                 </div>

//                 {/* 3. Action Buttons (Bottom Right) */}
//                 <div className="project-links">
//                   <a href={p.github} target="_blank" rel="noreferrer" title="GitHub Repo">
//                     <FaGithub />
//                   </a>
//                   <a href={p.demo} target="_blank" rel="noreferrer" title="Live Demo">
//                     <FaPlay />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }








// import { projects } from "../data/projects";
// import useScrollAnimation from "../hooks/useScrollAnimation";
// // Import FaCode for the right icon, FaPlay for the left icon
// import { FaGithub, FaPlay, FaCode } from "react-icons/fa";

// export default function Projects() {
//   const ref = useScrollAnimation();

//   return (
//     <section id="projects" ref={ref} className="animate">
//       <h2 className="section-title">Projects</h2>

//       <div className="project-grid">
//         {projects.map((p, i) => (
//           <div className="project-card" key={i}>
            
//             {/* 1. Title at the top */}
//             <h3 className="project-title">{p.title}</h3>

//             {/* 2. Image Container in the middle */}
//             <div className="project-img-container">
//               <img src={p.image} alt={p.title} />
//             </div>

//             {/* 3. Action Buttons at the bottom corners */}
//             <div className="project-actions">
//                {/* Left Button: Live Demo (Play Icon) */}
//               <a href={p.demo} target="_blank" rel="noreferrer" className="action-btn">
//                 <FaPlay />
//               </a>
//                {/* Right Button: GitHub/Code (Code Icon) */}
//               <a href={p.github} target="_blank" rel="noreferrer" className="action-btn">
//                 {/* Using FaCode to match the < /> icon in the image */}
//                 <FaCode /> 
//               </a>
//             </div>

//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

















// import { projects } from "../data/projects";
// import useScrollAnimation from "../hooks/useScrollAnimation";
// import { FaGithub, FaPlay, FaCode } from "react-icons/fa";

// export default function Projects() {
//   const ref = useScrollAnimation();

//   return (
//     <section id="projects" ref={ref} className="animate">
//       <h2 className="section-title">Projects</h2>

//       <div className="project-grid">
//         {projects.map((p, i) => (
//           <div className="project-card" key={i}>
            
//             {/* 1. Title at the top */}
//             <h3 className="project-title">{p.title}</h3>

//             {/* 2. Middle Container (Image vs Description) */}
//             <div className="project-img-container">
              
//               {/* Image (Visible by Default) */}
//               <img src={p.image} alt={p.title} className="card-img" />

//               {/* Description Overlay (Visible on Hover) */}
//               <div className="project-overlay">
//                 <p className="project-desc">{p.desc}</p>
//                 <div className="project-tech">
//                   {p.tech.map((t, index) => (
//                     <span key={index}>{t}</span>
//                   ))}
//                 </div>
//               </div>

//             </div>

//             {/* 3. Action Buttons at the bottom corners */}
//             <div className="project-actions">
//                {/* Left Button: Live Demo */}
//               <a href={p.demo} target="_blank" rel="noreferrer" className="action-btn" title="Live Demo">
//                 <FaPlay />
//               </a>
//                {/* Right Button: GitHub Repo */}
//               <a href={p.github} target="_blank" rel="noreferrer" className="action-btn" title="GitHub Code">
//                 <FaCode /> 
//               </a>
//             </div>

//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }






import { projects } from "../data/projects";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaGithub, FaPlay, FaCode } from "react-icons/fa";

export default function Projects() {
  const ref = useScrollAnimation();

  return (
    <section id="projects" ref={ref} className="animate">
      <h2 className="section-title">Projects</h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            
            {/* LEFT SIDE: Content */}
            <div className="project-content">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              
              <div className="project-tech">
                {p.tech.map((t, index) => (
                  <span key={index}>{t}</span>
                ))}
              </div>

              <div className="project-actions">
                {/* Demo Button */}
                <a href={p.demo} target="_blank" rel="noreferrer" className="action-btn" title="Live Demo">
                  <FaPlay />
                </a>
                {/* GitHub Button */}
                <a href={p.github} target="_blank" rel="noreferrer" className="action-btn" title="GitHub Code">
                  <FaCode />
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: Image */}
            <div className="project-img-container">
              <img src={p.image} alt={p.title} />
              {/* Optional: Add a scanline overlay for extra cyberpunk feel via CSS */}
              <div className="scanline"></div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}