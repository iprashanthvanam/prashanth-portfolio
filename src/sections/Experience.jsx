// import { experience } from "../data/experience";
// import useScrollAnimation from "../hooks/useScrollAnimation";
// import { FaBriefcase } from "react-icons/fa";
// import education from "../assets/education.jpg"; 
// // REPLACE THIS with the path to the image I just generated for you
// // or use a placeholder for now:


// export default function Experience() {
//   const ref = useScrollAnimation();

//   return (
//     <section id="experience" ref={ref} className="animate">
//       <h2 className="section-title">Experience</h2>

//       <div className="experience-container">
//         {/* LEFT SIDE: Image */}
//         {/* <div className="experience-image">
//           <img src={education} alt="Experience Illustration" />
//         </div> */}

//         {/* RIGHT SIDE: Experience Cards */}
//         <div className="experience-list">
//           {experience.map((e, i) => (
//             <div className="exp-card" key={i}>
//               <div className="exp-card-icon">
//                 <FaBriefcase />
//               </div>
//               <div className="exp-card-content">
//                 <span className="exp-period">{e.period}</span>
//                 <h3>{e.role}</h3>
//                 <p>{e.company}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }









import { experience } from "../data/experience";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const ref = useScrollAnimation();

  return (
    <section id="experience" ref={ref} className="animate">
      <h2 className="section-title">Experience</h2>

      <div className="experience-container">
        {/* The Timeline List */}
        <div className="experience-list">
          {experience.map((e, i) => (
            <div className="exp-card" key={i}>
              
              {/* Icon Bubble */}
              <div className="exp-card-icon">
                <FaBriefcase />
              </div>

              <div className="exp-card-content">
                <span className="exp-period">{e.period}</span>
                <h3>{e.role}</h3>
                <p>{e.company}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}