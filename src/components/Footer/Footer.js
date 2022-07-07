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
        <Col  className="copywright">
          <h3>Austin Henry</h3>
        </Col>
        <Col  className="copywright">
          <h3>Copyright © {currentYear}</h3>
        </Col>
        <Col  className="footer">
          <ul className="icons">
            <li className="social">
              <a
                href="https://github.com/kingausti"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li className="social">
              <a
                href="https://www.linkedin.com/in/king-austin-henry/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social">
              <a
                href="https://www.instagram.com/biogimp/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
        

        
    </footer>
  );
}

export default Footer;