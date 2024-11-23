import React from 'react'
import './Header.css';
function Footer() {
  return (
    <>
   {/* ------------------------------- footer start--------------------------------------------------------- */}

<footer className="footer-container">
      <div className="footer-top-section">
        {/* Contact Information */}
        <div className="footer-contact">
          <h4>Contact Me</h4>
          <p>Email: <a href="mailto:narayanniket2@gmail.com">narayanniket2@gmail.com</a></p>
          <p>Phone: <a href="tel:+917080881136">+91 7080881136</a></p>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="footer-icons">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin footer-icon"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <i className="fab fa-github footer-icon"></i>
            </a>
            <a href="https://x.com/NarayanNiket" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter footer-icon"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul className="footer-link-list">
            <li><a href="#about">About Me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom-section">
        <p>&copy; {new Date().getFullYear()} Niket Narayan. All Rights Reserved.</p>
      </div>
    </footer>
    {/* ----------------------------------------footer end------------------------------------------------*/}  
    
    
    
    
    
    
    
    
    </>
  )
}

export default Footer