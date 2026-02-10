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






// import { FaGraduationCap, FaBriefcase, FaLaptopCode, FaEnvelope, FaTools } from "react-icons/fa";
// import { FaBeer } from 'react-icons/fa'; 

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <ul>
//         <li>
//           <a href="#education">
//             <FaGraduationCap className="nav-icon" /> Education
//           </a>
//         </li>
//         <li>
//           <a href="#skills">
//             <FaTools className="nav-icon" /> Skills
//           </a>
//         </li>
       
//         <li>
//           <a href="#projects">
//             <FaLaptopCode className="nav-icon" /> Projects
//           </a>
//         </li>
//          <li>
//           <a href="#achievements">
//             <FaBriefcase className="nav-icon" /> Achievements
//           </a>
//         </li>
//         <li>
//           <a href="#contact">
//             <FaEnvelope className="nav-icon" /> Contact
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }












import { useState } from "react";
import { FaGraduationCap, FaBriefcase, FaLaptopCode, FaEnvelope, FaTools, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      
      {/* 1. Mobile Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* 2. Nav Links (Desktop & Mobile) */}
      {/* If isOpen is true, we add the 'active' class to show the mobile menu */}
      <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
        
        <li className="nav-item">
          <a href="#education" onClick={closeMenu}>
            <FaGraduationCap className="nav-icon" /> Education
          </a>
        </li>
        
        <li className="nav-item">
          <a href="#skills" onClick={closeMenu}>
            <FaTools className="nav-icon" /> Skills
          </a>
        </li>
        
        <li className="nav-item">
          <a href="#projects" onClick={closeMenu}>
            <FaLaptopCode className="nav-icon" /> Projects
          </a>
        </li>
        
        <li className="nav-item">
          <a href="#achievements" onClick={closeMenu}>
            <FaBriefcase className="nav-icon" /> Achievements
          </a>
        </li>
        
        <li className="nav-item">
          <a href="#contact" onClick={closeMenu}>
            <FaEnvelope className="nav-icon" /> Contact
          </a>
        </li>

      </ul>
    </nav>
  );
}