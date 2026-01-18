// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <h2>VANAM PRASHANTH</h2>
//       <ul>
//         <li><a href="#education">Education</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#experience">Experience</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// }






import { FaGraduationCap, FaBriefcase, FaLaptopCode, FaEnvelope, FaTools } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#education">
            <FaGraduationCap className="nav-icon" /> Education
          </a>
        </li>
        <li>
          <a href="#skills">
            <FaTools className="nav-icon" /> Skills
          </a>
        </li>
        <li>
          <a href="#experience">
            <FaBriefcase className="nav-icon" /> Experience
          </a>
        </li>
        <li>
          <a href="#projects">
            <FaLaptopCode className="nav-icon" /> Projects
          </a>
        </li>
        <li>
          <a href="#contact">
            <FaEnvelope className="nav-icon" /> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}