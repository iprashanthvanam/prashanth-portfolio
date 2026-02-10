


// import { education } from "../data/education";
// import useScrollAnimation from "../hooks/useScrollAnimation";

// export default function Education() {
//   const ref = useScrollAnimation();

//   return (
//     <section id="education" ref={ref} className="animate">
//       <h2 className="section-title">Education</h2>

//       {education.map((e, i) => (
//         <div className="card" key={i}>
//           <span style={{ color: "#ffb59a" }}>{e.year}</span>
//           <h3>{e.title}</h3>
//           <p>{e.place}</p>
//         </div>
//       ))}
//     </section>
//   );
// }















// import { education } from "../data/education";
// import useScrollAnimation from "../hooks/useScrollAnimation";
// import { FaGraduationCap } from "react-icons/fa";
// // RENAMED IMPORT BELOW:
// import educationImage from "../assets/education.jpg"; 

// export default function Education() {
//   const ref = useScrollAnimation();

//   return (
//     <section id="education" ref={ref} className="animate">
//       <h2 className="section-title">Education</h2>

//       <div className="education-container">
//         {/* LEFT SIDE: Education Cards */}
//         <div className="education-list">
//           {education.map((e, i) => (
//             <div className="edu-card" key={i}>
//               <div className="edu-card-icon">
//                 <FaGraduationCap />
//               </div>
//               <div className="edu-card-content">
//                 <span className="edu-year">{e.year}</span>
//                 <h3>{e.title}</h3>
//                 <p>{e.place}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }








import { education } from "../data/education";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const ref = useScrollAnimation();

  return (
    <section id="education" ref={ref} className="animate">
      <h2 className="section-title">Education</h2>

      <div className="education-container">
        {/* We only need the list for the timeline effect */}
        <div className="education-list">
          {education.map((e, i) => (
            <div className="edu-card" key={i}>
              
              {/* Icon is now inside the card as a feature */}
              <div className="edu-card-icon">
                <FaGraduationCap />
              </div>

              <div className="edu-card-content">
                <span className="edu-year">{e.year}</span>
                <h3>{e.title}</h3>
                <p>{e.place}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}