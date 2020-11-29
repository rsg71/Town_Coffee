import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const styles = {
    background: {
        backgroundColor: "whitesmoke"
    },
    southAmericaBackground: {
        height: "250px",
        width: "100%",
        objectFit: "cover",
        objectPosition: "topLeft"
    }
}


function homepage() {
    return (
        <>
            <Container fluid>
                <Row style={styles.background}>
                    <Col>
                        <br />
                        <h1>Town Coffee Company</h1>
                        <h2>Premium Roasted Coffee</h2>
                        <br />
                    </Col>
                </Row>

            </Container>
            <br />



            <Container>

                <p>Premium small batch artisan coffee company sourcing the finest micro lot coffee available.</p>

                <p>Our coffee is sourced and roasted fresh. We receive new shipments every 21 days. The coffee are limited release and quantities are very limited. We often sell out very quickly. Current sections are offered from the mountainous coffee growing regions in Mexico.</p>

                <p>Working with all of our partners to provide fair wages at every step in the process, preserve and regenerate the environment and always reduce plastic and waste.</p>

                <p>We are committed to our social and environmental footprint.</p>

            </Container>

            <Container fluid>
                <Row style={styles.background}>
                    <Col>
                        <br />
                        <h1>Town Coffee Company</h1>
                        <h2>Premium Roasted Coffee</h2>
                        <br />
                    </Col>
                </Row>
            </Container>


            <br />

            <Container>
                <Row>
                    <Col>

                        <p>Once opened it should be stored in a container which can be sealed but also release gasses via a one-way value. We suggest opening only one bag at a time.</p>

                        <p>Coffee is also at its best when it is ground freshly on an as-you-brew basis. A burr grinder is superior to a blade grinder for longevity and consistency of the grind but both with help you brew excellent coffee.</p>

                        <p>Buying whole beans and grinding them daily will produce the best tasting coffee. Should you prefer your coffee ground we can do that for you prior to shipping. A choice of coarse, medium, and fine. Additonal fee applies.</p>

                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default homepage;
