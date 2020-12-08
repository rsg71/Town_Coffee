import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

import "./Navigationbar.css"




function NavigationBar() {
    return (
        <>

<Navbar bg="light" expand="lg" sticky="top" >
  <Navbar.Brand href="#home">
  <img src="imgs/green_logo_beans.png" id="logo"/>

  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link className="mr-2 navbarLink" to="/">Home</Link>
      <Link className="mr-2 navbarLink" to="/coffee">Coffee</Link>
      <Link className="mr-2 navbarLink" to="/aboutus">About Us</Link>
      <Link className="mr-2 navbarLink" to="/subscriptions">Subscriptions</Link>
      <Link className="mr-2 navbarLink" to="/contactus">Contact Us</Link>
      <Link className="mr-2 navbarLink" to="/givingback">Giving Back</Link>
      <Link className="mr-2 navbarLink" to="/certifications">Certifications</Link>
      
    </Nav>

    
    <Link className="mr-2 navbarLink" to="/signin">Sign In</Link>
    <Link className="mr-2 navbarLink" to="/cart"><i className="fas fa-shopping-cart"></i></Link>
  </Navbar.Collapse>
</Navbar>

          
    </>
    )
}

export default NavigationBar;
