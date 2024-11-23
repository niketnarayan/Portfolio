import React from 'react'
import blog from './Assets/blog1.png';
import blog1 from './Assets/Blog2.png';
import blog2 from './Assets/blog3.png';
import './Header.css';

function Blog() {
  return (
    <div id='blog'>
  
    {/* ------------------------------------------my blog start----------------------------------------- */}
    
    <div className="container" style={{marginBottom:"5rem"}}>
  <div className="row">
    <div className="col text-center">
      <p>Blog</p>
      <h3>What People Say About Me</h3>
      <spam>In this space, I share insights, tips, and thoughts on various topics related to technology, design, and personal development.<br/>
      My aim is to provide valuable content that not only informs but also inspires and engages readers.</spam>
    </div> 
  </div>
</div>

{/* --------------------------------------my blog card start--------------------------------------------- */}
<div className="container" style={{marginBottom:"5rem"}}>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src={blog} className="card-img-top" alt="img1" />
            <div className="card-body">
              <h5 className="card-title">Designe for Everyone</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
              <a href='google'>Learn more</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={blog1} className="card-img-top" alt="img2" />
            <div className="card-body">
              <h5 className="card-title">Web Layouts</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              <a href='google'>Learn more</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={blog2} className="card-img-top" alt="img3" />
            <div className="card-body">
              <h5 className="card-title">Bootstrap Framework</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional content.
              </p>
              <a href='google'>Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* --------------------------------------my blog card end----------------------------------------- */}
     {/* ------------------------------------------my blog end----------------------------------------- */}
  
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Blog