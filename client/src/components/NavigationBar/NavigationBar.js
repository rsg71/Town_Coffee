import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

import "./NavigationBar.css"
import CartContext from "../../utils/CartContext"



function NavigationBar() {
  const cartItems = useContext(CartContext);

  console.log(`cartItems from navbar are: ${JSON.stringify(cartItems)}`)

    let cartItemsQuantity = 0;
    for (var i=0; i< cartItems.length; i++) {
        cartItemsQuantity += cartItems[i].quantity
    }

  console.log(` navbar # items: ${cartItems.length}`)

   const location = useLocation();

  return (
    <>

      <Navbar bg="light" expand="lg" sticky="top" >
        <Navbar.Brand href="/">
          <img src="/imgs/green_logo_beans.png" id="logo" alt="green logo beans" />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className={location.pathname==="/" ? "mr-2 navbarLink active": "mr-2 navbarLink"} to="/">Home</Link>
            <Link className={location.pathname==="/coffee" ? "mr-2 navbarLink active": "mr-2 navbarLink"} to="/coffee">Coffee</Link>
            <Link className={location.pathname==="/subscriptions" ? "mr-2 navbarLink active": "mr-2 navbarLink"} to="/subscriptions">Subscriptions</Link>
            <Link className={location.pathname==="/about-us" ? "mr-2 navbarLink active": "mr-2 navbarLink"} to="/about-us">About</Link>
            <Link className={location.pathname==="/giving-back" ? "mr-2 navbarLink active": "mr-2 navbarLink"} to="/giving-back">Giving Back</Link>
            <Link className={location.pathname==="/certifications" ? "mr-2 navbarLink active": "mr-2 navbarLink"} to="/certifications">Certifications</Link>
            <Link className={location.pathname==="/contact-us" ? "mr-2 navbarLink active": "mr-2 navbarLink"} to="/contact-us">Contact</Link>

          </Nav>


          <Link className="mr-2 navbarLink" to="/cart"><i className="fas fa-shopping-cart"></i> ({cartItemsQuantity})</Link>
        </Navbar.Collapse>
      </Navbar>


    </>
  )
}

export default NavigationBar;
