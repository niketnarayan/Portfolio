import React from 'react'
import './Header.css';

function Services() {
  return (
    <div id='service'>
  {/* ---------------------------------------------services start----------------------------------------- */}

<div className="container">
  <div className="row">
    <div className="col text-center">
      <p>Services</p>
      <h3>What I Do</h3>
      <spam>I provide a range of professional services tailored to help businesses and individuals succeed. With expertise across various fields,<br/>
      I strive to deliver quality solutions that meet your unique needs.</spam>
    </div> 
  </div>
</div>

{/* ----------------------------------------------service-icons----------------------------------------- */}

<div className="container mx-auto mt-5" style={{marginBottom:"5rem"}}>
  <div className="row d-flex gap-4 justify-content-center">
    <div className="col-md-3 d-flex flex-column align-items-center justify-content-center box">
      <i className="fa-solid fa-crown"></i>
      <div>
        <span>UI/UX Design</span>
      </div>
    </div>
    <div className="col-md-3 d-flex flex-column align-items-center justify-content-center box">
      <i className="fa-solid fa-display"></i>
      <div>
        <span>Web Design</span>
      </div>
    </div>
    <div className="col-md-3 d-flex flex-column align-items-center justify-content-center box">
      <i className="fa-solid fa-mobile-screen-button"></i>
      <div>
        <span>App Design</span>
      </div>
    </div>
    <div className="col-md-3 d-flex flex-column align-items-center justify-content-center box">
      <i className="fa-solid fa-chart-column"></i>
      <div>
        <span>SEO</span>
      </div>
    </div>
  </div>
</div>

{/* ----------------------------------------service-icons end------------------------------------------ */}  
    
    
    
    
    
    </div>
  )
}

export default Services