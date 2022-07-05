import React, { useState, useEffect } from "react";
import './Header.css';
import { Link } from 'react-router-dom';
// import Stack from 'react-bootstrap/Stack';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import { 
  RiMailSendFill,
  RiOpenArmLine,
  RiHealthBookLine,
  RiTerminalBoxLine
} from "react-icons/ri";

function NavBar() {
  const [expand, updateExpanded,checked, setChecked] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  // const [radioValue, setRadioValue] = useState('1');
  // const radios = [
  //   { name: 'Active', value: '1' },
  //   { name: 'Radio', value: '2' },
  //   { name: 'Radio', value: '3' },
  // ];



  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        
        {/* <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle> */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
              >
                <RiOpenArmLine style={{ marginBottom: "2px" }} /> About Me
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/portfolio"
                onClick={() => updateExpanded(false)}
              >
                <RiTerminalBoxLine
                  style={{ marginBottom: "2px" }}
                />{" "}
                My Portfolio
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <RiHealthBookLine style={{ marginBottom: "2px" }} /> My Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <RiMailSendFill
                  style={{ marginBottom: "2px" }}
                />{" "}
                Contact Me
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
