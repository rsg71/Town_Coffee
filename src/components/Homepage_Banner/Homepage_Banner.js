import React from "react";
import "./Homepage_Banner.css"
import { Button, Col } from "react-bootstrap";



function Homepage_Banner() {
    return (
        <>

            <Col className="homepageTrailBanner">

                <div className="homepageBannerh2">
                    <h2 className="bannerTagline">Not many startups begin as a Certified B Corp&reg;.
            <br />
            We did.</h2>
                    <Button variant="light" className="findOutButton">Find out how</Button>
                </div>

            </Col>

        </>
    )
}

export default Homepage_Banner;