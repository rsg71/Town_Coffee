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
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/coffee">Coffee</Nav.Link>
      <Nav.Link href="/aboutus">About Us</Nav.Link>
      <Nav.Link href="/subscriptions">Subscriptions</Nav.Link>
      <Nav.Link href="/contactus">Contact Us</Nav.Link>
      <Nav.Link href="/givingback">Giving Back</Nav.Link>
      <Nav.Link href="/certifications">Certifications</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
    
    <Nav.Link href="/signin">Sign In</Nav.Link>
    <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i></Nav.Link>
  </Navbar.Collapse>
</Navbar>

            {/* <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#">
                    
                    <img src="/imgs/green_logo_beans.png" id="logo"/>

                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link active">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/coffee" className="nav-link">Coffee</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutus" className="nav-link">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/subscriptions" className="nav-link">Subscriptions</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contactus" className="nav-link">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/givingback" className="nav-link">Giving Back</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/certifications" className="nav-link">Certifications</Link>
                        </li>
                    </ul>
                   
                </div>
            </nav> */}
    </>
    )
}

export default NavigationBar;
