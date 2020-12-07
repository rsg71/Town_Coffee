import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./ContactUsColumns.css"



function ContactUsColumns() {
    return(
        <>
                <Row>
                    <Col sm={4} className="contactUsColumn">
                        <h2>Town Coffee Company</h2>
                        <div>
                        <p>215-696-9338</p>
                        <p>towncoffeecompany@gmail.com</p>
                        </div>
                    </Col>
                    <Col sm={4} className="contactUsColumn">
                        <h2>Follow us:</h2>
                        <ul >
                            <li><a href="#"><i class="fab fa-instagram socialMediaIcons"></i></a></li>
                            <li><a href="https://www.facebook.com/towncoffeecompany"><i class="fab fa-facebook socialMediaIcons"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter socialMediaIcons"></i></a></li>
                            <li>Whatsapp <i class="fab fa-whatsapp"></i></li>
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