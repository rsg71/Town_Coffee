import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"

const styles = {
    listItems: {
        listStyleType: "none"
    },
    listItemTitle: {
        fontSize: "1.2em",
        color: "white"
    },
   
    column: {
        textAlign: "center"
    }
}


function Footer() {
    return (
        <>
            <Container fluid className="Container">
            <br/>

                <Row>
                    <Col style={styles.column}>
                        <ul style={styles.listItems}>
                            <li style={styles.listItemTitle}>Shop</li>
                            <li>Coffee</li>
                            <li>Subscriptions</li>
                            <li></li>
                        </ul>
                    </Col>

                    <Col style={styles.column}>
                        <ul style={styles.listItems}>
                            <li style={styles.listItemTitle}>Support</li>
                            <li>FAQs</li>
                            <li>Email Us</li>
                            <li>Phone: 215-696-9338</li>
                            <li>Location</li>
                        </ul>
                    </Col>

                    <Col style={styles.column}>
                        <ul style={styles.listItems}>
                            <li style={styles.listItemTitle}>Our Policies</li>
                            <li>Terms of Sale</li>
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                            <li>Cookies</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul style={styles.listItems}>
                            <li style={styles.listItemTitle}>Follow Us</li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        </ul>
                    </Col>
                </Row>
                <hr/>

                <br/>
                <br/>

                <Row className="footerBottom">
                    <Col style={styles.column}>
                        <p className="text-muted">&copy; 2020 Town Coffee Co.</p>
                    </Col>
                   
                   
                </Row>

            </Container>

        </>
    )
}

export default Footer;

