import React from "react";
import { Container, Row, Col, CardDeck, Card, Button, Form } from 'react-bootstrap';
import CardGroup from "../../components/CardGroup/CardGroup"
import Homepage_Banner from "../../components/Homepage_Banner/Homepage_Banner"
import Jumbotron from "../../components/Jumbotron/Jumbotron"


const styles = {
    background: {
        backgroundColor: "whitesmoke"
    },
    openingBanner: {
        textAlign: "center",
        margin: "5rem"
    },
    bannerh1: {
        marginTop: "5em",
        marginBottom: "5em"
    },
    signature: {
        textAlign: "center",
        height: "9rem"
    },
    signatureInfo: {
        textAlign: "right",
        fontStyle: "italic"
    },
    earthImage: {
        objectFit: "inherit",
        maxWidth: "100%"
    },
    // backgroundImageJumbo: {
    //     backgroundImage: 'url("https://freebigpictures.com/wp-content/uploads/shady-forest.jpg")'
    // }
}


function homepage() {
    return (
        <>
        {/* <div class="alert alert-dark alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div> */}


            <Container fluid>
                <Row style={styles.background}>
                    <Col style={styles.openingBanner}>
                        <h1>Town Coffee Company</h1>
                        <h2>Premium Roasted Coffee</h2>
                    </Col>
                </Row>
            </Container>


            <br />



            <Container>

                <Row>
                    <Col>
                    <h3>Browse Selection:</h3>
                    <br/>
                    <CardGroup />
                    </Col>
                </Row>

                <br />
                <br />

                <Row>
                    <Col >
                        <h2>Who We Are</h2>

                        <p>Premium small batch artisan coffee company sourcing the finest micro lot coffee available.</p>

                        <p>Our coffee is sourced and roasted fresh. We receive new shipments every 21 days. The coffee are limited release and quantities are very limited. We often sell out very quickly. Current sections are offered from the mountainous coffee growing regions in Mexico.</p>

                        <p>Working with all of our partners to provide fair wages at every step in the process, preserve and regenerate the environment and always reduce plastic and waste.</p>

                    </Col>
                </Row>


            </Container>
            <br />
            <br />

            <Container fluid>
                <Row style={styles.background}>
                    <Col>
                        <Homepage_Banner />
                    </Col>
                </Row>
            </Container>
            <br />
            <br />

            {/* <Jumbotron></Jumbotron> */}

            <br/>
            <br/>

            <Container>
                <Row>
                    <Col>

                        <h2>Our Promise</h2>

                        <p>We are committed to our social and environmental footprint.</p>

                        <p>A startup does not often begin by committing to be a <a href="https://bcorporation.net/">Certified B Corporation&reg;</a>. We did. We believe in and are aligned with the values and principles of a B Corp and are willing to make that pledge publicly. And transparently. Every decision made will consider the impacts on our stakeholders. I have yet to see &quot;Big Coffee&quot; work to this extent to be a part of the paradigm change that consumers have asked for.</p>

                        <a href="/givingback">Find out more...</a>
                    </Col>
                </Row>

                <br />

                <Row>
                    <Col style={styles.signature}>
                        <img src="/imgs/signature_r.png" style={styles.signature} />
                        <p style={styles.signatureInfo}>Rich Robertson, Founder and CEO</p>
                    </Col>
                </Row>

                <br />
                <br />
                <br />

                <Row>
                    <Col>
                        <h2>Usage</h2>

                        <p>Once opened, beans should be stored in a container which can be sealed but also release gasses via a one-way value. We suggest opening only one bag at a time.</p>

                        <p>Coffee is also at its best when it is ground freshly on an as-you-brew basis. A burr grinder is superior to a blade grinder for longevity and consistency of the grind but both with help you brew excellent coffee.</p>

                        <p>Buying whole beans and grinding them daily will produce the best tasting coffee. Should you prefer your coffee ground we can do that for you prior to shipping. A choice of coarse, medium, and fine. Additonal fee applies.</p>

                    </Col>

                    {/* <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </Col> */}
                </Row>

                <Row>
                    <Col>
                    <img src="/imgs/world_image.jpg" style={styles.earthImage}/>
                    </Col>
                </Row>



                <br />
                <br />
                <br />
                <br />

                <Row>
                    <Col>
                        <h2>Get on the list! <i class="fas fa-angle-double-right"></i>{' '} </h2>
                        <p>Join our mailing list for special product announcements, news and offers.</p>
                       
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
                                placeholder="Email address" />
                            <Button type="submit" className="mb-2">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>

            <br />
            <br />
            <br />
        </>
    )
}

export default homepage;