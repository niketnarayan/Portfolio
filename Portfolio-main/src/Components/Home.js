import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import slidergif from "./Assets/slider1.gif";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "NiketNaryan Resume.pdf"; // Ensure this file is in your public directory
    link.download = "NiketNaryan Resume.pdf"; // Name for the downloaded file
    document.body.appendChild(link); // Append to the body
    link.click(); // Trigger the download
    document.body.removeChild(link); // Remove the link after downloading
  };

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const titles = "MERN STACK DEVELOPER | WORDPRESS DEVELOPER | PHP DEVELOPER";
  const typingSpeed = 100;
  const restartDelay = 1000;

  useEffect(() => {
    if (index < titles.length) {
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + titles[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);

      return () => clearInterval(interval);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, restartDelay);

      return () => clearTimeout(timeout);
    }
  }, [index, titles]);

  return (
    < div id="home">
      <div className="container" >
        <div className="row">
          <div className="col-md-5">
            <div style={{ marginTop: "175px" }}>
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                }}
              >
                Hello, I'm
              </p>
              <span
                className="text-1"
                style={{ fontSize: "50px", color: "#4A4A4A" }}
              >
                Niket Narayan
              </span>
              <div>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    fontFamily: "Roboto",
                    height: "75px",
                  }}
                >
                  {displayedText}
                </div>
              </div>
            </div>

            <div className="header-btn d-flex gap-3" style={{}}>
              <button
                onClick={handleShow}
                className="header-btn1"
                style={{
                  width: "95px",
                  height: "50px",
                  borderRadius: "15px",
                  backgroundColor: "#ff7a57",
                  borderColor: "#ff7a57",
                  color: "white",
                }}
              >
                Hire Me
              </button>

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
                  <div
                    className="container"
                    style={{
                      background:
                        "linear-gradient(135deg, #ff7a18, #af002d 90%)",
                      padding: "20px",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-md-6"
                        style={{ borderRight: "1px solid black" }}
                      >
                        <p style={{ color: "white", fontWeight: "bold" }}>
                          Available 24/7
                        </p>
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
                          <div
                            style={{ textAlign: "right", marginTop: "10px" }}
                          >
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
                              onMouseOver={(e) =>
                                (e.target.style.backgroundColor = "#ff6b3b")
                              }
                              onMouseOut={(e) =>
                                (e.target.style.backgroundColor = "#fc3701")
                              }
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6" style={{ marginTop: "40px" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                          }}
                        >
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
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
                              <i
                                className="fa-solid fa-location-dot"
                                style={{ fontSize: "24px", color: "white" }}
                              ></i>
                            </div>
                            <div>
                              <h4 style={{ margin: 0 }}>Location</h4>
                              <p
                                style={{
                                  margin: 0,
                                  textDecoration: "underline",
                                }}
                              >
                                Uttar Pradesh, Varanasi
                              </p>
                            </div>
                          </div>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
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
                              <i
                                className="fa-solid fa-mobile-screen-button"
                                style={{ fontSize: "24px", color: "white" }}
                              ></i>
                            </div>
                            <div>
                              <h4 style={{ margin: 0 }}>Mobile No.</h4>
                              <p
                                style={{
                                  margin: 0,
                                  textDecoration: "underline",
                                }}
                              >
                                +91 7080881136
                              </p>
                            </div>
                          </div>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
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
                              <i
                                className="fa-solid fa-envelope"
                                style={{ fontSize: "24px", color: "white" }}
                              ></i>
                            </div>
                            <div>
                              <h4 style={{ margin: 0 }}>Email Address</h4>
                              <p
                                style={{
                                  margin: 0,
                                  textDecoration: "underline",
                                }}
                              >
                                narayanniket2@gmail.com
                              </p>
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

              <button
                onClick={downloadCV}
                className="header-btn2"
                style={{
                  width: "155px",
                  height: "50px",
                  borderRadius: "15px",
                  backgroundColor: "#343a40",
                  borderColor: "#343a40",
                  color: "white",
                }}
              >
                Download CV
              </button>
            </div>
          </div>
          <div className="col-md-7">
            <img
              src={slidergif}
              className="img-fluid"
              alt="responsive"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/*-------------------------------------------- Icons-------------------------------------------------- */}
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex gap-4">
            <a href="https://www.facebook.com/niket.kumar.1481?mibextid=ZbWKwL" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}> <i className="fa-brands fa-facebook-f"></i></a>
            <a href="mailto:narayanniket2@gmail.com" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}><i className="fa-brands fa-google"></i></a>
            <a href="https://www.linkedin.com/in/niketnarayan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}> <i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/niketnarayan" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}> <i className="fa-brands fa-github-alt"></i></a>  
          </div>
          <div className="col-md-8"></div>
        </div>
      </div>

      {/* ---------------------------------------------happy client data------------------------------------- */}

      <div className="container">
        <div className="row">
          <div className="col-md-6 text-circle">
            <div className="content-div">
              <h3>124</h3>
              <span>Happy Client</span>
            </div>
            <div
              className="empty div"
              style={{ height: "95%", width: "1px", backgroundColor: "gray" }}
            ></div>
            <div className="content-div">
              <h3>456</h3>
              <span>Project Complete</span>
            </div>
            <div
              className="empty div"
              style={{ height: "95%", width: "1px", backgroundColor: "gray" }}
            ></div>
            <div className="content-div">
              <h3>789</h3>
              <span>Awards Won</span>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------happy client data end-------------------------------------- */}
    </div>
  );
}

export default Home;
