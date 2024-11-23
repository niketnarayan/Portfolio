import React from 'react'
import './Header.css';
import photo1 from './Assets/photo.jpg';


function About() {

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = 'Niket_Narayan_Resume.pdf'; // Ensure this file is in your public directory
        link.download = 'Niket_Narayan_Resume.pdf'; // Name for the downloaded file
        document.body.appendChild(link); // Append to the body
        link.click(); // Trigger the download
        document.body.removeChild(link); // Remove the link after downloading
    };
    




  return (
    <div id='features' >
 {/* -----------------------------------------------image and test start------------------------------ */}

<div className="container" style={{marginBottom:"5rem"}} >
  <div className="row">
    <div className="col-md-4" >
      <img src={photo1} className='phot2' alt='ppic'></img>
    </div>
    <div className="col-md-8">
      <h3 style={{fontWeight:"bold",fontFamily:"Roboto"}}>Niket Narayan</h3>
      <span>Front-End Developer</span><br/><br/>
      <p>Software developer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly.<br/><br/> Skilled leader who has the proven ability to motivate, educate, and manage a team of professionals to build software programs and effectively track changes. Confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company’s organizational needs, highlight their core competencies, and further their success.</p>

      <button onClick={downloadCV} className='photo-btn'>Download CV</button>
    </div>
  </div>
</div>

{/* -----------------------------------------------image and test end---------------------------------- */}
   
    
    
    
    
    
    
    
    
    </div>
  )
}

export default About