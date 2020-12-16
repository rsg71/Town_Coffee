import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

import "./NavigationBar.css"
import CartContext from "../../utils/CartContext"



function NavigationBar() {

  const cartItems = useContext(CartContext);


  return (
    <>

      <Navbar bg="light" expand="lg" sticky="top" >
        <Navbar.Brand href="#home">
          <img src="imgs/green_logo_beans.png" id="logo" alt="green logo beans" />

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
          <Link className="mr-2 navbarLink" to="/cart"><i className="fas fa-shopping-cart"></i> ({cartItems.quantity})</Link>
        </Navbar.Collapse>
      </Navbar>


    </>
  )
}

export default NavigationBar;
