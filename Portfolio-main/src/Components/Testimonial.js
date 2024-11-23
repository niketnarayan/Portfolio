import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Header.css';
import vivek from './Assets/vivek.jpg';
import jc from './Assets/jc.jpeg';
import thakur from './Assets/thakur.jpeg';

function Testimonial() {
  return (
    <div id='testmonial'>
 {/* ------------------------------------------Testmonial start-------------------------------------------- */}

<div className="container">
  <div className="row">
    <div className="col text-center">
      <p>Testmonial</p>
      <h3>What People Say About Me</h3>
      <spam>I take pride in delivering exceptional work, and it’s gratifying to hear what my clients and collaborators<br/>
      have to say. Here are some testimonials that reflect their experiences.</spam>
    </div> 
  </div>
</div>
{/* -----------------------------------------Slider----------------------------------------------------- */}

<Carousel data-bs-theme="dark" className="mt-4 custom-carousel"interval={3000} fade  style={{ maxWidth: '800px', margin: '0 auto',marginBottom:"5rem" }}>
      <Carousel.Item>
        <img
          className="d-block mx-auto rounded-circle"
          style={{ width: '200px', height: '200px', objectFit: 'cover', margin:"100px 0 200px 0" }}
          src={vivek}
          alt="First slide"
        />
        <Carousel.Caption className=" bg-opacity-50 rounded p-2" style={{}}>
          <h5>Vivek Gupta</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block mx-auto rounded-circle"
          style={{ width: '200px', height: '200px', objectFit: 'cover', margin:"100px 0 200px 0" }}
          src={jc}
          alt="Second slide"
        />
        <Carousel.Caption className=" bg-opacity-50 rounded p-2">
          <h5>Jessy yadav</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block mx-auto rounded-circle"
          style={{ width: '200px', height: '200px', objectFit: 'cover' , margin:"100px 0 200px 0"}}
          src={thakur}
          alt="Third slide"
        />
        <Carousel.Caption className=" bg-opacity-50 rounded p-2">
          <h5>Neeraj Singh</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* -----------------------------------------slider end---------------------------------------------- */}
    {/* ----------------------------------------- Testmonial end------------------------------------------*/}
   
    
    
    
    
    
    </div>
  )
}

export default Testimonial