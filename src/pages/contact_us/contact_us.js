import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import CoffeeBanner from "../../components/CoffeeBanner/CoffeeBanner"

const styles = {
    listStyle: {
        listStyleType: "none"
    },
    colStyle: {
        backgroundColor: "whitesmoke",
        marginRight: 10,
        marginLeft: 10
    },
    bottomRow: {
        marginBottom:"15em"
    }
}

function contacUs() {
    return (
        <>
            <CoffeeBanner />


            <Container>
                <br />
                <h1>---------- Contact Us ----------</h1>
                <br />
                <br />
                <br />
                <Row>
                    <Col style={styles.colStyle} >
                        <h2>Town Coffee Company</h2>
                        <p>215-696-9338</p>
                        <p>towncoffeecompany@gmail.com</p>
                    </Col>
                    <Col style={styles.colStyle}>
                        <h2>Follow us:</h2>
                        <ul style={styles.listStyle}>
                            <li>Instagram <i class="fab fa-instagram"></i></li>
                            <li>Facebook <i class="fab fa-facebook-square"></i></li>
                            <li>Twitter <i class="fab fa-twitter-square"></i></li>
                            <li>Whatsapp <i class="fab fa-whatsapp-square"></i></li>
                        </ul>

                    </Col>
                    <Col style={styles.colStyle}>
                        <h2>Located:</h2>

                        <p>1300 Bethlehem Pike 2-3</p>
                        <p>Flourtown, Pennsylvania</p>
                        <p>19031</p>
                    </Col>


                </Row>
                <br />
                <br />
                <br />
                <Row style={styles.bottomRow}>
                    <Col>
                        <h2>Get on the list!</h2>
                        <p>Join our mailing list for special product announcements, news and offers</p>
                    </Col>


                    <Col>
                        <h4>Join our mailing list for new deals, exclusive offers, and more:</h4>
                        <Form inline>
                            <Form.Label htmlFor="inlineFormInputName2" srOnly>
                                Name
                            </Form.Label>
                            <Form.Control
                                className="mb-2 mr-sm-2"
                                id="inlineFormInputName2"
                                placeholder="Jane Doe" />
                            <Button type="submit" className="mb-2">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default contacUs;