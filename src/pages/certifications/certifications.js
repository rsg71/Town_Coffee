import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const styles = {
    background: {
        backgroundColor: "lightgray"
    }
}


function certifications() {
    return (
        <>
            <img src="/imgs/coffee_white.jpg" className="coffeeJumbotron" alt="coffee background" />

            <Container>
                <br/>
                <Row>
                    <Col>
                        <h1>Certifications</h1>
                    </Col>
                </Row>
                <br/>

                <Row>
                    <Col>
                        <img src="/imgs/rainforest_alliance.PNG"></img>
                    </Col>
                    <Col style={styles.background}>
                        <p>Rainforest Alliance</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Organic</p>
                        <img src="/imgs/certified_organic.jpg"></img>
                    </Col>
                    <Col>
                        <p>Kosher</p>
                        <img src="/imgs/kosher.jpeg"></img>
                    </Col>
                    <Col>
                        <p>Fair Wages</p>
                        <img src="/imgs/fair-pay.jpg"></img>
                    </Col>
                    <Col>
                        <p>Smithsonian Institute - Certified Bird Friendly</p>
                        <img src="/imgs/certified_bird_friendly.jpg"></img>
                    </Col>
                </Row>
                <br/>
                <br/>
                <br/>
            </Container>

        </>
    )
}

export default certifications;
