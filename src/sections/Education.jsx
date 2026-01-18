


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















import { education } from "../data/education";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaGraduationCap } from "react-icons/fa";
// RENAMED IMPORT BELOW:
import educationImage from "../assets/education.jpg"; 

export default function Education() {
  const ref = useScrollAnimation();

  return (
    <section id="education" ref={ref} className="animate">
      <h2 className="section-title">Education</h2>

      <div className="education-container">
        {/* LEFT SIDE: Education Cards */}
        <div className="education-list">
          {education.map((e, i) => (
            <div className="edu-card" key={i}>
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

        {/* RIGHT SIDE: Image */}
        {/* <div className="education-image">
           
           <img src={educationImage} alt="Education Illustration" />
        </div> */}
      </div>
    </section>
  );
}