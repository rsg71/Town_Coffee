import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

import "./NavigationBar.css"




function NavigationBar() {
    return (
        <>

<Navbar bg="light" expand="lg" sticky="top" >
  <Navbar.Brand href="#home">
  <img src="/imgs/green_logo_beans.png" id="logo"/>

  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link to="/">Home</Link>
      <Link to="/coffee">Coffee</Link>
      <Link to="/aboutus">About Us</Link>
      <Link to="/subscriptions">Subscriptions</Link>
      <Link to="/contactus">Contact Us</Link>
      <Link to="/givingback">Giving Back</Link>
      <Link to="/certifications">Certifications</Link>
      
    </Nav>

    
    <Link to="/signin">Sign In</Link>
    <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
  </Navbar.Collapse>
</Navbar>

          
    </>
    )
}

export default NavigationBar;
