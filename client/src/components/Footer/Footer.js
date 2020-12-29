import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Footer.css"

const styles = {
    listItems: {
        listStyleType: "none"
    },
    listItemTitle: {
        fontSize: "1.3em",
        color: "white"
    }

}


function Footer() {
    return (
        <>
            <Container fluid className="Container">
                <br />


                {/* Four columns: shop, support, our policies, and follow us */}

                <Row>

                    <Col sm={4}>
                        <h5>Join our mailing list for new deals, exclusive offers, and more:</h5>
                        <Form inline action="/signup" method="POST">
                            <Form.Label htmlFor="inlineFormInputName2" srOnly>
                                Name
                            </Form.Label>
                            <Form.Control
                                className="mb-2 mr-sm-2"
                                id="inlineFormInputName2"
                                placeholder="Email address"
                                type="email"
                                name="email" />
                            <Button type="submit" className="mb-2">
                                Submit
                            </Button>
                        </Form>
                    </Col>

                    <Col sm={2} >
                        <ul style={styles.listItems}>
                            <li style={styles.listItemTitle}>Shop</li>
                            <li><Link to="/coffee">Coffee</Link></li>
                            <li><Link to="/subscriptions"></Link></li>
                            <li></li>
                        </ul>
                    </Col>

                    <Col sm={2} >
                        <ul style={styles.listItems}>
                            <li style={styles.listItemTitle}>Support</li>
                            <li><Link to="/contactus">Contact Us</Link></li>
                            <li><Link to="/FAQ">FAQs</Link></li>
                            <li><Link to="mailto:towncoffeecompany@gmail.com">towncoffeecompany@gmail.com</Link></li>
                            <li><Link to="tel:215.696.9338">215-696-9338</Link></li>
                        </ul>
                    </Col>

                    <Col sm={2} >
                        <ul style={styles.listItems}>
                            <li style={styles.listItemTitle}>Our Policies</li>
                            <li><Link to="/terms_of_use">Terms of Sale</Link></li>
                            <li><Link to="/terms_of_use">Terms of Use</Link></li>
                            <li><Link to="/privacy_policy">Privacy Policy</Link></li>
                            <li><Link to="#">Cookies</Link></li>
                        </ul>
                    </Col>
                    <Col sm={2} >
                        <ul style={styles.listItems}>
                            <li style={styles.listItemTitle}>Follow Us</li>
                            <li><Link to="#" target="_blank"><i className="fab fa-instagram socialMediaIcons"></i></Link></li>
                            <li><Link to="https://www.facebook.com/towncoffeecompany" target="_blank"><i className="fab fa-facebook socialMediaIcons"></i></Link></li>
                            <li><Link to="#" target="_blank"><i className="fab fa-twitter socialMediaIcons"></i></Link></li>
                        </ul>
                    </Col>



                </Row>
                <br />

             


                <br />
                <br />

                <Row className="footerBottom">
                    <Col style={{ textAlign: "center" }}>
                        <p className="text-muted">&copy; 2020 Town Coffee Co. | All Rights Reserved</p>
                    </Col>


                </Row>

            </Container>

        </>
    )
}

export default Footer;

