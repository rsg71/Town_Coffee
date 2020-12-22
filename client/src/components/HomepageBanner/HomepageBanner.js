import React from "react";
import "./HomepageBanner.css"
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";




function HomepageBanner() {
    return (
        <>
                <div className="homepageBannerh2">
                    <h2 className="bannerTagline">Not many startups begin as a Certified B Corp&reg;.
                    <br />
                    We did.</h2>
                    <Button variant="light" className="findOutButton">
                        
                        <Link className="findOutHow" to="/aboutus">Find out how</Link>
                        
                        </Button>
                </div>
        </>
    )
}

export default HomepageBanner;