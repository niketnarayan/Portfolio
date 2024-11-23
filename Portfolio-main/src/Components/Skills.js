import React from 'react'
import './Header.css';

function Skills() {
  return (
    <div id='skill'>
  {/* -----------------------------------------------skills start---------------------------------------- */}

<div className="container">
  <div className="row">
    <div className="col text-center">
      <p>Skills</p>
      <h3>Why Choose me</h3>
      <spam>I combine technical expertise, creativity, and attention to detail, continuously evolving with <br/>
      the latest trends to deliver innovative, high-quality solutions.</spam>
    </div> 
  </div>
</div>

{/*-----------------------------------------------progress bar--------------------------------------- */}

<div className="container mt-5" style={{marginBottom:"5rem"}}>
  <div className="row mb-4">
    <div className="col-md-6">
      <div>
        <span className="d-block mb-2">Photoshop</span>
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: '25%' }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div>
        <span className="d-block mb-2">Web Design</span>
        <div className="progress">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{ width: '50%' }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  </div>
  <div className="row mb-4">
    <div className="col-md-6">
      <div>
        <span className="d-block mb-2">App Design</span>
        <div className="progress">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: '75%' }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div>
        <span className="d-block mb-2">SEO</span>
        <div className="progress">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: '90%' }}
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  </div>
</div>

{/*--------------------------------------------progress bar end--------------------------------------- */}  
    
    
    
    
    
    
    
    </div>
  )
}

export default Skills