import React from "react";
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap';
import CardGroup from "../../components/CardGroup/CardGroup"
import Homepage_Banner from "../../components/Homepage_Banner/Homepage_Banner"



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
        textAlign: "center"
    },
    signatureInfo: {
        textAlign: "right"
    }
}


function homepage() {
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
                        <CardGroup />
                    </Col>
                </Row>

                <br />
                <br />

                <Row>
                    <Col>
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

            <Container>
                <Row>
                    <Col>

                        <h2>Our Promise</h2>

                        <p>We are committed to our social and environmental footprint.</p>

                        <p>A startup does not often begin by committing to be a Certified B Corporation. We did. We believe in and are aligned with the values and principles of a B Corp and are willing to make that pledge publicly. And transparently. Every decision made will consider the impacts on our stakeholders. I have yet to see Big Coffee work to this extent to be a part of the paradigm change that consumers have asked for.</p>

                        <a href="#">Find out more</a>
                    </Col>
                </Row>

                <br />

                <Row>
                    <Col style={styles.signature}>
                        <img src="/imgs/signature_r.png" />
                        <p style={styles.signatureInfo}>Rich Robertson, Founder and CEO</p>
                    </Col>
                </Row>

                <br />
                <br />
                <br />

                <Row>
                    <Col>
                        <h2>Usage</h2>

                        <p>Once opened it should be stored in a container which can be sealed but also release gasses via a one-way value. We suggest opening only one bag at a time.</p>

                        <p>Coffee is also at its best when it is ground freshly on an as-you-brew basis. A burr grinder is superior to a blade grinder for longevity and consistency of the grind but both with help you brew excellent coffee.</p>

                        <p>Buying whole beans and grinding them daily will produce the best tasting coffee. Should you prefer your coffee ground we can do that for you prior to shipping. A choice of coarse, medium, and fine. Additonal fee applies.</p>

                    </Col>
                </Row>

                <br />
                <br />



            </Container>

            <br />
            <br />
            <br />
        </>
    )
}

export default homepage;