import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"




function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#">Town Coffee</a>
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
                    {/* <form className="form-inline my-4 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
    )
}

export default Navbar;
