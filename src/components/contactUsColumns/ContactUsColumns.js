import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./contactuscolumns.css"



function ContactUsColumns() {
    return(
        <>
                <Row>
                    <Col sm={4} className="contactUsColumn">
                        <h2>Town Coffee Company</h2>
                        <div>
                        <p><i className="fas fa-phone"></i> <a href="tel:215.696.9338" >215-696-9338</a></p>
                        <p><i className="fas fa-envelope"></i><a href="mailto:towncoffeecompany@gmail.com"> towncoffeecompany@gmail.com</a></p>
                        </div>
                    </Col>
                    <Col sm={4} className="contactUsColumn">
                        <h2>Follow us:</h2>
                        <ul className="contactUsFollowUs">
                            <li><a href="#" target="_blank"><i className="fab fa-instagram socialMediaIcons"></i></a></li>
                            <li><a href="https://www.facebook.com/towncoffeecompany" target="_blank"><i className="fab fa-facebook socialMediaIcons"></i></a></li>
                            <li><a href="#" target="_blank"><i className="fab fa-twitter socialMediaIcons"></i></a></li>
                            <li>Whatsapp <i className="fab fa-whatsapp"></i></li>
                        </ul>
                    </Col>
                    <Col sm={4} className="contactUsColumn">
                        <h2>Located:</h2>
                        <div>
                        <p>1300 Bethlehem Pike 2-3</p>
                        <p>Flourtown, Pennsylvania</p>
                        <p>19031</p>
                        <p>USA</p>
                        </div>
                    </Col>
                </Row>
        </>
    )
}

export default ContactUsColumns;