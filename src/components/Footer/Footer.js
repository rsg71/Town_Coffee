import React from "react";
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
                        <Form inline>
                            <Form.Label htmlFor="inlineFormInputName2" srOnly>
                                Name
                            </Form.Label>
                            <Form.Control
                                className="mb-2 mr-sm-2"
                                id="inlineFormInputName2"
                                placeholder="Email address" />
                            <Button type="submit" className="mb-2">
                                Submit
                            </Button>
                        </Form>
                    </Col>

                    <Col sm={2} >
                        <ul style={styles.listItems}>
                            <li style={styles.listItemTitle}>Shop</li>
                            <li><a href="/coffee">Coffee</a></li>
                            <li><a href="/subscriptions">Subscriptions</a></li>
                            <li></li>
                        </ul>
                    </Col>

                    <Col sm={2} >
                        <ul style={styles.listItems}>
                            <li style={styles.listItemTitle}>Support</li>
                            <li><a href="/contactus">Contact Us</a></li>
                            <li><a href="/FAQ">FAQs</a></li>
                            <li><a href="mailto:towncoffeecompany@gmail.com">towncoffeecompany@gmail.com</a></li>
                            <li>215-696-9338</li>
                        </ul>
                    </Col>

                    <Col sm={2} >
                        <ul style={styles.listItems}>
                            <li style={styles.listItemTitle}>Our Policies</li>
                            <li><a href="/terms_of_use">Terms of Sale</a></li>
                            <li><a href="/terms_of_use">Terms of Use</a></li>
                            <li><a href="/privacy_policy">Privacy Policy</a></li>
                            <li><a href="#">Cookies</a></li>
                        </ul>
                    </Col>
                    <Col sm={2} >
                        <ul style={styles.listItems}>
                            <li style={styles.listItemTitle}>Follow Us</li>
                            <li><a href="#" target="_blank"><i class="fab fa-instagram socialMediaIcons"></i></a></li>
                            <li><a href="https://www.facebook.com/towncoffeecompany" target="_blank"><i class="fab fa-facebook socialMediaIcons"></i></a></li>
                            <li><a href="#" target="_blank"><i class="fab fa-twitter socialMediaIcons"></i></a></li>
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

