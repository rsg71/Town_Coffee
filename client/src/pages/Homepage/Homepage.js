import React, { useEffect } from "react";

import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import CardGroup from "../../components/CardGroup/CardGroup"
import HomepageBanner from "../../components/HomepageBanner/HomepageBanner"



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
    blah: {
        backgroundImage: 'url("/imgs/dirt_trail.jpg")',
        height: 900,
        objectFit: "cover"
    },
    grinder: {
        maxWidth: "100%",
        borderRadius: "9px"
    },
    homepageEmailInput: {
        width: "75%"
    },
    getOnListRow: {
        backgroundColor: "green"
    },
    earthImage: {
        maxWidth: "100%",
        height: "500px",
        objectFit: "cover",
        borderRadius: "7px",
        marginTop: "1rem"
    },
    button: {


        backgroundColor: "#1E3932",
        borderColor: "#1E3932"
    }
}


function Homepage() {


    useEffect(() => {
        document.title = "Town Coffee Company | Organic Sustainable Coffee"
    }, []);


    return (
        <>
           


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

                        <h3>Browse our Blends:</h3>
                        <br />
                        <CardGroup />
                    </Col>
                </Row>

                <br />
                <br />
                <br />

                <Row>
                    <Col md={6}>
                        <h2>Who We Are</h2>

                        <p>Premium small batch artisan coffee company sourcing the finest micro lot coffee available.</p>

                        <p>Our coffee is sourced and roasted fresh. We receive new shipments every 21 days. The coffee are limited release and quantities are very limited. We often sell out very quickly. Current sections are offered from the mountainous coffee growing regions in Mexico.</p>

                        <p>Working with all of our partners to provide fair wages at every step in the process, preserve and regenerate the environment and always reduce plastic and waste.</p>
                                
                    </Col>

                    <Col md={6} style={{textAlign: "center"}}>
                        <img src="/imgs/b-corp-logo.png" style={{maxHeight: "337px"}}/>
                    </Col>
                </Row>


            </Container>
            <br />
            <br />

            <Container fluid>
                <Row >
                    <Col style={styles.blah}>
                    <HomepageBanner />
                    </Col>
                </Row>
            </Container>
            <br />
            <br />

            {/* <Jumbotron></Jumbotron> */}

            <br />
            <br />

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
                    <Col md={6}>
                        <h2>Usage Tips</h2>

                        <p>Once opened, beans should be stored in a container which can be sealed but also release gasses via a one-way value. We suggest opening only one bag at a time.</p>

                        <p>Coffee is also at its <strong>best</strong> when it is ground freshly on an as-you-brew basis. A burr grinder is superior to a blade grinder for longevity and consistency of the grind but both with help you brew excellent coffee.</p>

                        <p>Buying whole beans and grinding them daily will produce the best tasting coffee. Should you prefer your coffee ground <a href="#">we can do that for you </a> prior to shipping. A choice of coarse, medium, and fine. Additonal fee applies.</p>
                    </Col>

                    <Col md={6}>
                        <img style={styles.grinder} src="/imgs/coffee_grinder.jpg" />
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <br />

                <Row>
                    <Col>
                        <h2>Let's make a better tomorrow</h2>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <img src="/imgs/world_image.jpg" style={styles.earthImage} />
                    </Col>
                    <Col>
                        <img src="/imgs/south_america_background.jpg" style={styles.earthImage} />
                    </Col>
                    <Col>
                        <img src="/imgs/fjord.jpg" style={styles.earthImage} />
                    </Col>

                </Row>


                <br />
                <br />
                <br />
                <br />

               

            </Container>

            <br />
            <br />
            <br />
        </>
    )
}

export default Homepage;