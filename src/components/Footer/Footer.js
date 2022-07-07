import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css';
import { 
  FaInstagram,
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa";

function Footer() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();  
  return (
    <footer>
      <Row>
        <Col  className="copywrite">
          <h3>Austin Henry</h3>
        </Col>
        <Col  className="copywrite">
          <h3>Copyright © {currentYear}</h3>
        </Col>
        <Col  className="footer">
          <div className="icons">
            <div className="social">
              <a
                href="https://github.com/kingausti"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <div className="social">
              <a
                href="https://www.linkedin.com/in/king-austin-henry/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="social">
              <a
                href="https://www.instagram.com/biogimp/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </Col>
      </Row>        
    </footer>
  );
}

export default Footer;