


// import useScrollAnimation from "../hooks/useScrollAnimation";

// export default function Hero() {
//   const ref = useScrollAnimation();

//   return (
//     <section
//       ref={ref}
//       className="animate"
//       style={{ paddingTop: "160px", maxWidth: "700px" }}
//     >
      

//       <h1 style={{ fontSize: "64px", marginBottom: "20px" }}>
//         V Prashanth
//       </h1>

//       <p style={{ lineHeight: "1.8", marginBottom: "35px" }}>
//         B.Tech CSE student with an ECE background seeking an entry-level Software role. Eager to apply strong analytical skills,
//         data handling knowledge, and technical acumen to deliver impactful insights and practical solutions.
//       </p>

//       <button className="btn btn-primary">Download CV</button>
//       <button className="btn btn-outline" style={{ marginLeft: "15px" }}>
//         Contact
//       </button>
//       <br/>
//       <br/>
//       <br/>
//     </section>
    
//   );
// }












// import useScrollAnimation from "../hooks/useScrollAnimation";
// import profile from "../assets/profile.jpeg";

// export default function Hero() {
//   const ref = useScrollAnimation();

//   // ====== CV DOWNLOAD LOGIC ======
//   const handleDownloadCV = () => {
//     // OPTION 1: Local CV inside public folder
//     const cvUrl = "/Prashanth_CV.pdf";

//     // OPTION 2: Google Drive direct download
//     // const cvUrl = "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID";

//     const link = document.createElement("a");
//     link.href = cvUrl;
//     link.download = "Vanam_Prashanth_CV.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   // ====== CONTACT SCROLL ======
//   const handleContactScroll = () => {
//     document.getElementById("contact")?.scrollIntoView({
//       behavior: "smooth"
//     });
//   };

//   return (
//     <section
//       ref={ref}
//       className="animate hero-section"
//     >
//       {/* LEFT CONTENT */}
//       <div className="hero-left">
//         <h1 className="hero-name">VANAM PRASHANTH</h1>

//         <p className="hero-desc">
//           B.Tech CSE student with an ECE background seeking an entry-level
//           Software role. Eager to apply strong analytical skills, data handling
//           knowledge, and technical acumen to deliver impactful insights and
//           practical solutions.
//         </p>

//         <div className="hero-buttons">
//           <button className="btn btn-primary" onClick={handleDownloadCV}>
//             Download CV
//           </button>

//           <button className="btn btn-outline" onClick={handleContactScroll}>
//             Contact
//           </button>
//         </div>

//         {/* SOCIAL ICONS */}
//         <div className="hero-socials">
//           <a
//             href="https://www.linkedin.com/in/YOUR_LINKEDIN"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img src="/linkedin.svg" alt="LinkedIn" />
//           </a>

//           <a
//             href="https://github.com/YOUR_GITHUB"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img src="/github.svg" alt="GitHub" />
//           </a>

//           <a
//             href="https://leetcode.com/YOUR_LEETCODE"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img src="/leetcode.svg" alt="LeetCode" />
//           </a>
//         </div>
//       </div>

//       {/* RIGHT IMAGE */}
//       <div className="hero-right">
//         <div className="hero-img-wrapper">
//           <img src={profile} alt="Vanam Prashanth" />
//         </div>
//       </div>
//     </section>
//   );
// }



















// import useScrollAnimation from "../hooks/useScrollAnimation";
// import profile from "../assets/profile.jpeg";

// export default function Hero() {
//   const ref = useScrollAnimation();

//   const handleDownloadCV = () => {
//     const cvUrl = "/Prashanth_CV.pdf";
//     const link = document.createElement("a");
//     link.href = cvUrl;
//     link.download = "Vanam_Prashanth_CV.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleContactScroll = () => {
//     document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section ref={ref} className="hero-section animate show">
//       {/* LEFT CONTENT */}
//       <div className="hero-left">
//         <h1 className="hero-name">V Prashanth</h1>
        
//         <p className="hero-desc">
//           B.Tech CSE student with an ECE background seeking an entry-level
//           Software role. Eager to apply strong analytical skills, data handling
//           knowledge, and technical acumen to deliver impactful insights and
//           practical solutions.
//         </p>

//         <div className="hero-actions">
//           <div className="hero-buttons">
//             <button className="btn btn-primary" onClick={handleDownloadCV}>
//               Download CV
//             </button>
//             <button className="btn btn-outline" onClick={handleContactScroll}>
//               Contact
//             </button>
//           </div>

//           {/* SOCIAL ICONS (Placed next to or below buttons based on design) */}
//           <div className="hero-socials">
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//               <img src="/linkedin.svg" alt="LinkedIn" />
//             </a>
//             <a href="https://github.com" target="_blank" rel="noopener noreferrer">
//               <img src="/github.svg" alt="GitHub" />
//             </a>
//             <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">
//               <img src="/leetcode.svg" alt="LeetCode" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT IMAGE */}
//       <div className="hero-right">
//         <div className="hero-img-wrapper">
//           <img src={profile} alt="Vanam Prashanth" />
//         </div>
//       </div>
//     </section>
//   );
// }













// import useScrollAnimation from "../hooks/useScrollAnimation";
// import profile from "../assets/profile.jpeg";

// export default function Hero() {
//   const ref = useScrollAnimation();

//   const handleDownloadCV = () => {
//     const cvUrl = "/Prashanth_CV.pdf";
//     const link = document.createElement("a");
//     link.href = cvUrl;
//     link.download = "Vanam_Prashanth_CV.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleContactScroll = () => {
//     document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section ref={ref} className="hero-section animate show">
      
//       {/* --- IMAGE (Now First = Left Side) --- */}
//       <div className="hero-right">
//         <div className="hero-img-wrapper">
//           <img src={profile} alt="Vanam Prashanth" />
//         </div>
//       </div>

//       {/* --- TEXT CONTENT (Now Second = Right Side) --- */}
//       <div className="hero-left">
//         <h1 className="hero-name">V Prashanth</h1>
        
//         <p className="hero-desc">
//           B.Tech CSE student with an ECE background seeking an entry-level
//           Software role. Eager to apply strong analytical skills, data handling
//           knowledge, and technical acumen to deliver impactful insights and
//           practical solutions.
//         </p>

//         <div className="hero-actions">
//           <div className="hero-buttons">
//             <button className="btn btn-primary" onClick={handleDownloadCV}>
//               Download CV
//             </button>
//             <button className="btn btn-outline" onClick={handleContactScroll}>
//               Contact
//             </button>
//           </div>

//           <div className="hero-socials">
//             <a href="https://www.linkedin.com/in/iprashanthvanam/" target="_blank" rel="noopener noreferrer">
//               <img src="/linkedin.svg" alt="LinkedIn" />
//             </a>
//             <a href="https://github.com/iprashanthvanam/" target="_blank" rel="noopener noreferrer">
//               <img src="/github.svg" alt="GitHub" />
//             </a>
//             <a href="https://leetcode.com/u/iprashanthvanam/" target="_blank" rel="noopener noreferrer">
//               <img src="/leetcode.svg" alt="LeetCode" />
//             </a>
//           </div>
//         </div>
//       </div>

//     </section>
//   );
// }






















import useScrollAnimation from "../hooks/useScrollAnimation";
import profile from "../assets/profile.jpeg";

export default function Hero() {
  const ref = useScrollAnimation();

  const handleDownloadCV = () => {
    // 1. UPDATE THIS LINE TO MATCH YOUR ACTUAL FILENAME
    const cvUrl = "/vanamprashanth.pdf"; 

    const link = document.createElement("a");
    link.href = cvUrl;
    // This is the name the file will have when saved to the user's computer
    link.download = "Vanam_Prashanth_CV.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactScroll = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="hero-section animate show">
      
      {/* --- IMAGE (Left Side) --- */}
      <div className="hero-right">
        <div className="hero-img-wrapper">
          <img src={profile} alt="Vanam Prashanth" />
        </div>
      </div>

      {/* --- TEXT CONTENT (Right Side) --- */}
      <div className="hero-left">
        <h1 className="hero-name">V Prashanth</h1>
        
        <p className="hero-desc">
          B.Tech CSE student with an ECE background seeking an entry-level
          Software role. Eager to apply strong analytical skills, data handling
          knowledge, and technical acumen to deliver impactful insights and
          practical solutions.
        </p>

        <div className="hero-actions">
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handleDownloadCV}>
              Download CV
            </button>
            <button className="btn btn-outline" onClick={handleContactScroll}>
              Contact
            </button>
          </div>

          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/iprashanthvanam/" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://github.com/iprashanthvanam/" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" alt="GitHub" />
            </a>
            <a href="https://leetcode.com/u/iprashanthvanam/" target="_blank" rel="noopener noreferrer">
              <img src="/leetcode.svg" alt="LeetCode" />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}