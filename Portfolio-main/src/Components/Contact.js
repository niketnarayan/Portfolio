import React, { useState } from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Contact() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




  return (
    <div id='contact'>
  {/* -----------------------------------------Hire me start---------------------------------------- */}

  <div className="container" style={{ backgroundColor: "#fc3701", height:"110px",marginBottom:"5rem" }}>
  <div className="row">
    <div className="col-md-8 d-flex flex-row justify-content-between" style={{ marginTop: "25px", width:"100%",padding:"0 2rem"}}>
      <div>
        <h3 style={{ color: "white" }}>Hire Me For Your Project</h3>
        <p style={{ color: "white" }}>Accusantium labore nostrum similique quisquam.</p>
      </div>
      <div className="d-flex justify-content-end" style={{height:"50px"}}>
        <button onClick={handleShow} className="btn btn-light" style={{borderRadius:"20px",fontWeight:"bold", width:"100px",height:"45px"}}>Hire Me!</button>
       
        <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                centered
                size="lg" // Increase modal width (lg makes it larger)
                dialogClassName="custom-modal-style" // Custom class for styling
            >
                <Modal.Header closeButton>
                    <Modal.Title>Get In Touch</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* -------------------------------- form start------------------------------------------------------- */}
                    <div className="container" style={{ background: "linear-gradient(135deg, #ff7a18, #af002d 90%)", padding: "20px", borderRadius: "10px", color: "white" }}>
                        <div className="row">
                            <div className="col-md-6" style={{ borderRight: "1px solid black" }}>
                                <p style={{ color: "white", fontWeight: "bold" }}>Available 24/7</p>
                                <h3>Get In Touch</h3>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Enter Email"
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            marginBottom: "10px",
                                            border: "1px solid #ccc",
                                            borderRadius: "5px",
                                            outline: "none",
                                        }}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Enter mobile no."
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            marginBottom: "10px",
                                            border: "1px solid #ccc",
                                            borderRadius: "5px",
                                            outline: "none",
                                        }}
                                    />
                                    <textarea
                                        placeholder="Enter the Message"
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            marginBottom: "10px",
                                            border: "1px solid #ccc",
                                            borderRadius: "5px",
                                            outline: "none",
                                            resize: "none",
                                            height: "100px",
                                        }}
                                    />
                                    <div style={{ textAlign: "right", marginTop: "10px" }}>
                                        <button
                                            style={{
                                                backgroundColor: "#fc3701",
                                                color: "white",
                                                padding: "10px 20px",
                                                border: "none",
                                                borderRadius: "5px",
                                                cursor: "pointer",
                                                fontWeight: "bold",
                                                transition: "background-color 0.3s ease",
                                            }}
                                            onMouseOver={(e) => (e.target.style.backgroundColor = "#ff6b3b")}
                                            onMouseOut={(e) => (e.target.style.backgroundColor = "#fc3701")}
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" style={{ marginTop: "40px" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <div
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                                backgroundColor: "#fc3701",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                marginRight: "10px",
                                            }}
                                        >
                                            <i className="fa-solid fa-location-dot" style={{ fontSize: "24px", color: "white" }}></i>
                                        </div>
                                        <div>
                                            <h4 style={{ margin: 0 }}>Location</h4>
                                            <p style={{ margin: 0, textDecoration: "underline" }}>Uttar Pradesh, Varanasi</p>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <div
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                                backgroundColor: "#fc3701",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                marginRight: "10px",
                                            }}
                                        >
                                            <i className="fa-solid fa-mobile-screen-button" style={{ fontSize: "24px", color: "white" }}></i>
                                        </div>
                                        <div>
                                            <h4 style={{ margin: 0 }}>Mobile No.</h4>
                                            <p style={{ margin: 0, textDecoration: "underline" }}>+91 7080881136</p>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <div
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                                backgroundColor: "#fc3701",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                marginRight: "10px",
                                            }}
                                        >
                                            <i className="fa-solid fa-envelope" style={{ fontSize: "24px", color: "white" }}></i>
                                        </div>
                                        <div>
                                            <h4 style={{ margin: 0 }}>Email Address</h4>
                                            <p style={{ margin: 0, textDecoration: "underline" }}>narayanniket2@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* -------------------------------- form end------------------------------------------------------- */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>







      </div>
    </div>
    <div className="col-md-4"></div>
  </div>
</div>

{/* -----------------------------------------Hire me end------------------------------------------------- */}


{/* -----------------------------------------get in touch start------------------------------------------ */}

<div className="container" style={{marginBottom:"5rem"}}>
  <div className="row">
    <div className="col text-center">
      <p>Contact</p>
      <h3>Get In Touch With Me</h3>
      <spam>I’d love to hear from you! Whether you have a question, want to discuss a project, or simply want to connect, feel free to reach out. <br/>
      Your inquiries and feedback are important to me, and I aim to respond as quickly as possible.

</spam>
    </div> 
  </div>
</div>

{/* -------------------------------- form start------------------------------------------------------- */}

<div className="container" style={{ background: "linear-gradient(135deg, #ff7a18, #af002d 90%)", padding: "20px", borderRadius: "10px", color: "white" }}>
  <div className="row">
    <div className="col-md-6" style={{ borderRight: "1px solid black" }}>
      <p style={{ color: "white", fontWeight: "bold" }}>Available 24/7</p>
      <h3>Get In Touch</h3>
      <div>
        <input
          type="text"
          placeholder="Enter Email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            outline: "none",
          }}
        />
        <input
          type="number"
          placeholder="Enter mobile no."
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            outline: "none",
          }}
        />
        <textarea
          placeholder="Enter the Message"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            outline: "none",
            resize: "none",
            height: "100px",
          }}
        />
        <div style={{ textAlign: "right", marginTop: "10px" }}>
          <button
            style={{
              backgroundColor: "#fc3701",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#ff6b3b")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#fc3701")}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
    <div className="col-md-6" style={{marginTop:"40px"}}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#fc3701",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "10px",
            }}
          >
            <i className="fa-solid fa-location-dot" style={{ fontSize: "24px", color: "white" }}></i>
          </div>
          <div>
            <h4 style={{ margin: 0 }}>Location</h4>
            <p style={{ margin: 0, textDecoration: "underline" }}>Uttar Pradesh, Varanasi</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#fc3701",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "10px",
            }}
          >
            <i className="fa-solid fa-mobile-screen-button" style={{ fontSize: "24px", color: "white" }}></i>
          </div>
          <div>
            <h4 style={{ margin: 0 }}>Mobile No.</h4>
            <p style={{ margin: 0, textDecoration: "underline" }}>+91 7080881136</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#fc3701",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "10px",
            }}
          >
            <i className="fa-solid fa-envelope" style={{ fontSize: "24px", color: "white" }}></i>
          </div>
          <div>
            <h4 style={{ margin: 0 }}>Email Address</h4>
            <p style={{ margin: 0, textDecoration: "underline" }}>narayanniket2@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* -------------------------------- form start   end---------------------------------------------------- */}  
    
    
    
    
    
    
    </div>
  )
}

export default Contact