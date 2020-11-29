import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./giving_back.css"


const styles = {
    rowStyle: {
        backgroundColor: "whitesmoke"
    }
}


function givingBack() {
    return (
        <>
            <Container>
                <br />

                <Row>
                    <Col>
                        <h1>Giving Back</h1>
                    </Col>
                </Row>

                <br />

                <Row style={styles.rowStyle}>
                    <Col>
                        <h2>B Certified Corp Pending</h2>
                        <p>Positive impact on company's ? and environmental performance meets the highest standards, is verified and transparent to all. Currently 3,300 members.</p>
                    </Col>
                    <Col className="centerImg">
                        <img src="/imgs/b-corp-logo.png" id="bCorpLogo" /></Col>
                </Row>

                <br />

                <Row style={styles.rowStyle}>
                      <Col className="centerImg">
                        <img src="/imgs/onepercent_ftp_logo.jpg" id="givingBackOnePercentImg" /></Col>
                    <Col>
                        <h2>1% for the Planet</h2>
                        <p>Businesses commit to giving 1% of gross sales each year given through this non-profit to support approved environmental non-profits. Currently 3,000 members coming together to protect the future of our planet.</p>
                    </Col>
                </Row>
                <br />

                <Row style={styles.rowStyle}>
                    <Col>
                        <h2>Climate Change</h2>
                    </Col>
                    <Col className="centerImg">
                        <img src="https://via.placeholder.com/150" />
                    </Col>
                </Row>
                <br />

                <Row style={styles.rowStyle}>
                    <Col className="centerImg">
                        <img src="https://via.placeholder.com/150" />
                    </Col>
                    <Col >
                        <h2>Carbon Neutral</h2>
                    </Col>
                </Row>
                <br />

                <Row style={styles.rowStyle}>
                    <Col >
                        <h2>Clean Energy</h2>
                    </Col>
                    <Col className="centerImg">
                        <img src="https://via.placeholder.com/150" />
                    </Col>
                </Row>


                <br />
                <br />

            </Container>
        </>
    )
}

export default givingBack;