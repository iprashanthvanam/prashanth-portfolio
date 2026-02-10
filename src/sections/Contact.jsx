// export default function Contact() {
//   return (
//     <section id="contact">
//       <h2 className="section-title">Contact</h2>

//       <p>Email: deepuchary03@gmail.com</p>
//       <p>Phone: +91 0123456789</p>
//       <p>Location: Nagar Kurnool, Telangana</p>

//       <p style={{ marginTop: "40px" }}>
//         Made with ❤️ by S Pranav
//       </p>
//     </section>
//   );
// }














// import useScrollAnimation from "../hooks/useScrollAnimation";
// import { FaPaperPlane, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaInstagram, FaCode } from "react-icons/fa";

// export default function Contact() {
//   const ref = useScrollAnimation();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message Sent! (This is a demo)");
//   };

//   return (
//     <section id="contact" ref={ref} className="animate">
//       <h2 className="section-title">Contact</h2>

//       <div className="contact-container">
        
//         {/* --- LEFT SIDE: CONTACT FORM --- */}
//         <form className="contact-form" onSubmit={handleSubmit}>
          
//           {/* Name Input */}
//           <div className="input-group">
//             <label htmlFor="name">Name</label>
//             <input type="text" id="name" placeholder="John Doe" required />
//           </div>

//           {/* Email Input */}
//           <div className="input-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" placeholder="John@doe.com" required />
//           </div>

//           {/* Message Input */}
//           <div className="input-group">
//             <label htmlFor="message">Message</label>
//             <textarea id="message" rows="5" placeholder="Type your message...." required></textarea>
//           </div>

//           {/* Send Button */}
//           <button type="submit" className="send-btn">
//             Send <FaPaperPlane className="send-icon" />
//           </button>
//         </form>

//         {/* --- RIGHT SIDE: INFO & SOCIALS --- */}
//         <div className="contact-info-wrapper">
          
//           {/* Contact Details List */}
//           <div className="contact-details">
//             <div className="contact-item">
//               <div className="icon-circle">
//                 <FaEnvelope />
//               </div>
//               <p>prashanthvanamnetha@gmail.com</p>
//             </div>

//             <div className="contact-item">
//               <div className="icon-circle">
//                 <FaPhoneAlt />
//               </div>
//               <p>+91 7036142499</p>
//             </div>

//             <div className="contact-item">
//               <div className="icon-circle">
//                 <FaMapMarkerAlt />
//               </div>
//               <p>LB Nagar, Hyderabad</p>
//             </div>
//           </div>

//           {/* Social Icons Row */}
//           <div className="social-links-row">
//              <a href="#" className="social-circle"><FaGithub /></a>
//              <a href="#" className="social-circle"><FaLinkedinIn /></a>
//              <a href="#" className="social-circle"><FaCode /></a> 
             
//           </div>

        
          
//         </div>
//       </div>

//       {/* Footer / Copyright */}
//       <div className="footer-copyright">
//         <p>Made with ❤️ by V Prashanth</p>
//       </div>
//     </section>
//   );
// }









import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaPaperPlane, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaCode } from "react-icons/fa";

export default function Contact() {
  const ref = useScrollAnimation();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! (This is a demo)");
  };

  return (
    <section id="contact" ref={ref} className="animate">
      <h2 className="section-title">Contact</h2>

      <div className="contact-container">
        
        {/* --- LEFT SIDE: CONTACT FORM --- */}
        <form className="contact-form" onSubmit={handleSubmit}>
          
          {/* Name Input */}
          <div className="input-group">
            <input type="text" id="name" placeholder=" " required />
            <label htmlFor="name">Name</label>
          </div>

          {/* Email Input */}
          <div className="input-group">
            <input type="email" id="email" placeholder=" " required />
            <label htmlFor="email">Email</label>
          </div>

          {/* Message Input */}
          <div className="input-group">
            <textarea id="message" rows="5" placeholder=" " required></textarea>
            <label htmlFor="message">Message</label>
          </div>

          {/* Send Button */}
          <button type="submit" className="send-btn">
            Send <FaPaperPlane className="send-icon" />
          </button>
        </form>

        {/* --- RIGHT SIDE: INFO & SOCIALS --- */}
        <div className="contact-info-wrapper">
          
          {/* Contact Details List */}
          <div className="contact-details">
            <div className="contact-item">
              <div className="icon-circle">
                <FaEnvelope />
              </div>
              <p>prashanthvanamnetha@gmail.com</p>
            </div>

            <div className="contact-item">
              <div className="icon-circle">
                <FaPhoneAlt />
              </div>
              <p>+91 7036142499</p>
            </div>

            <div className="contact-item">
              <div className="icon-circle">
                <FaMapMarkerAlt />
              </div>
              <p>LB Nagar, Hyderabad</p>
            </div>
          </div>

          {/* Social Icons Row */}
          <div className="social-links-row">
             <a href="https://github.com/iprashanthvanam" target="_blank" rel="noopener noreferrer" className="social-circle"><FaGithub /></a>
             <a href="https://www.linkedin.com/in/iprashanthvanam/" target="_blank" rel="noopener noreferrer" className="social-circle"><FaLinkedinIn /></a>
             <a href="https://leetcode.com/u/iprashanthvanam/" target="_blank" rel="noopener noreferrer" className="social-circle"><FaCode /></a> 
          </div>

        </div>
      </div>

      {/* Footer / Copyright */}
      <div className="footer-copyright">
        <p>Made with ❤️ by V Prashanth</p>
      </div>
    </section>
  );
}