import React from 'react'
import port1 from './Assets/portfolio1.png';
import port2 from './Assets/portfolio2.png';
import port3 from './Assets/portfolio3.png';
import port4 from './Assets/portfolio4.png';
import port5 from './Assets/portfolio5.png';
import port6 from './Assets/portfolio6.png';
import './Header.css';

function Porfolio() {
  return (
    <div id='portfolio'>

    <style>
        {`
        .image-container{
        width: 85%;
        margin: 0 auto;
        padding: 1rem;
        display: grid;
        grid-template-columns: auto auto auto;
        row-gap: 3rem;
        }
 .project {
  position: relative;
  width: 300px; /* Adjust this size */
  overflow: hidden;
  border-radius: 8px;
}

.project img {
  width: 100%;
  display: block;
}

.project .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 82, 53, 0.85); /* Overlay color */
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0; /* Initially hidden */
  transform: translateY(100%); /* Positioned below the div */
  transition: all 0.5s ease; /* Smooth transition */
}

.project:hover .overlay {
  opacity: 1; /* Fade in */
  transform: translateY(0); /* Slide up */
}

.project .overlay h3 {
  margin: 0;
  font-size: 18px;
  text-align: center;
  transform: translateY(50px); /* Initially push down */
  opacity: 0; /* Initially hidden */
  transition: all 0.5s ease; /* Smooth transition */
}

.project:hover .overlay h3 {
  transform: translateY(0); /* Slide into place */
  opacity: 1; /* Fade in */
  transition-delay: 0.1s; /* Delay for better effect */
}

.project .overlay .icons {
  display: flex;
  gap: 15px;
  margin-top: 10px;
  transform: translateY(50px); /* Initially push down */
  opacity: 0; /* Initially hidden */
  transition: all 0.5s ease; /* Smooth transition */
}

.project:hover .overlay .icons {
  transform: translateY(0); /* Slide into place */
  opacity: 1; /* Fade in */
  transition-delay: 0.2s; /* Slight delay after the title */
}

.project .overlay .icons i {
  font-size: 20px;
  cursor: pointer;
}

button{
border: none;
border: 2px solid #ffffff;
border-radius: 50%;
background-color: transparent;
color: #ffffff;
}
button:hover{
background-color: #ffffff;
color: rgba(255, 82, 53, 0.85);
}


            
           
        `}
    </style>


<div className='image-container'>
    <div class="project">
  <img src={port1} alt="Project Image" />
  <div class="overlay">
    <h3>Project Title</h3>
    <div>
        <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
        <button><i class="fa-solid fa-link"></i></button>
    </div>
    <div class="icons">
      <i class="icon-search"></i>
      <i class="icon-link"></i>
    </div>
  </div>
</div>

<div class="project">
  <img src={port2} alt="Project Image" />
  <div class="overlay">
    <h3>Project Title</h3>
    <div>
    <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
    <button><i class="fa-solid fa-link"></i></button>
    </div>
    <div class="icons">
      <i class="icon-search"></i>
      <i class="icon-link"></i>
    </div>
  </div>
</div>

<div class="project">
  <img src={port3} alt="Project Image" />
  <div class="overlay">
    <h3>Project Title</h3>
    <div>
    <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
    <button><i class="fa-solid fa-link"></i></button>
    </div>
    <div class="icons">
      <i class="icon-search"></i>
      <i class="icon-link"></i>
    </div>
  </div>
</div>

<div class="project">
  <img src={port4} alt="Project Image" />
  <div class="overlay">
    <h3>Project Title</h3>
    <div>
    <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
    <button><i class="fa-solid fa-link"></i></button>
    </div>
    <div class="icons">
      <i class="icon-search"></i>
      <i class="icon-link"></i>
    </div>
  </div>
</div>

<div class="project">
  <img src={port5} alt="Project Image" />
  <div class="overlay">
    <h3>Project Title</h3>
    <div>
    <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
    <button><i class="fa-solid fa-link"></i></button>
    </div>
    <div class="icons">
      <i class="icon-search"></i>
      <i class="icon-link"></i>
    </div>
  </div>
</div>

<div class="project">
  <img src={port6} alt="Project Image" />
  <div class="overlay">
    <h3>Project Title</h3>
    <div>
    <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
    <button><i class="fa-solid fa-link"></i></button>
    </div>
    <div class="icons">
      <i class="icon-search"></i>
      <i class="icon-link"></i>
    </div>
  </div>
</div>
</div>



  {/* ---------------------------------------------portfolio start-------------------------------------- */}

{/* <div className="container">
  <div className="row">
    <div className="col text-center">
      <p>Portfolio</p>
      <h3>Check My Wonderful Works</h3>
      <spam>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos.<br/>
      rerum commodi corrupti, temporibus non quam.</spam>
    </div> 
  </div>
</div> */}


{/* ---------------------------------------------portfilo photo----------------------------------------- */}

{/* <div className="container mt-5" style={{marginBottom:"5rem"}}>
  <div className="row mb-4">
    <div className="col-md-4 d-flex justify-content-center img-div">
      <img className="port-img img-fluid" src={port1} alt="port1" />
      <div style={{position: "absolute", top: "40%"}} className='content-div'>
        <h6 style={{color: "#ffffff"}}>Project Title</h6>
      </div>
    </div>
    <div className="col-md-4 d-flex justify-content-center">
      <img className="port-img img-fluid" src={port2} alt="port2" />
    </div>
    <div className="col-md-4 d-flex justify-content-center">
      <img className="port-img img-fluid" src={port3} alt="port3" />
    </div>
  </div>
  <div className="row">
    <div className="col-md-4 d-flex justify-content-center">
      <img className="port-img img-fluid" src={port4} alt="port4" />
    </div>
    <div className="col-md-4 d-flex justify-content-center">
      <img className="port-img img-fluid" src={port5} alt="port5" />
    </div>
    <div className="col-md-4 d-flex justify-content-center">
      <img className="port-img img-fluid" src={port6} alt="port6" />
    </div>
  </div>
</div> */}
{/* --------------------------------------------portfolio end---------------------------------------------- */}  
    
    
    
    
    
    
    </div>
  )
}

export default Porfolio