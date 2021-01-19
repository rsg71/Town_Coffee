import React, { useEffect } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CoffeeBanner from "../../components/CoffeeBanner/CoffeeBanner"
import SmallerContainer from "../../components/SmallerContainer/SmallerContainer"
import BigButton from "../../components/BigButton/BigButton"
import "./GivingBack.css"

const styles = {

    OPFTP: {
        maxWidth: "83%",
        textAlign: "center"
    },

}


function GivingBack() {

    useEffect(() => {
        document.title = "Giving Back | Town Coffee Company"
    }, []);



    return (
        <>


            <CoffeeBanner />
            <br />


            <Container>
                <br />
                <Row>
                    <Col>
                        <span><Link className="breadcrumbLink" to="/">Home </Link><i className="fas fa-angle-right"></i> <span style={{ fontWeight: "bold" }}> Giving Back</span>
                        </span>
                    </Col>
                </Row>
                <br />




                <SmallerContainer>
                    <Row>
                        <Col >
                            <h1 style={{ textAlign: "center", marginBottom: "4rem" }}>Giving Back</h1>
                        </Col>
                    </Row>

                    <Row className="givingBackRow">
                        <Col sm={6}>
                            <h2>B Corp Pending</h2>
                            <p>Positive impact on company's social and environmental performance and meets the highest standards, is verified and transparent to all. Currently 3,300 members.</p>
                        </Col>
                        <Col sm={6} style={{ textAlign: "center"}}>
                            <img src="/imgs/b-corp-logo.png" id="givingBackBCorpLogo" alt="b corp logo" /></Col>
                    </Row>


                    <Row className="givingBackRow">
                        <Col sm={6}>
                            <img src="/imgs/onepercent_ftp_logo.jpg" id="givingBackOnePercentImg" style={styles.OPFTP} alt="One percent for the planet" /></Col>
                        <Col sm={6}>
                            <h2>1% for the Planet</h2>
                            <p>Businesses commit to giving 1% of gross sales each year given through this non-profit to support approved environmental non-profits. Currently 3,000 members coming together to protect the future of our planet.</p>
                        </Col>
                    </Row>


                    <Row className="givingBackRow">
                        <Col sm={6}>
                            <h2>Climate Change</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quidem eius eveniet aspernatur, voluptatem earum magnam sed aut omnis deleniti vitae nisi explicabo ut ipsa cum dignissimos veniam facere porro? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus a obcaecati aliquid? </p>
                        </Col>
                        <Col sm={6}>
                            <img src="imgs/no-planet-b.jpg" alt="placeholder" />

                        </Col>
                    </Row>


                    <Row>
                        <Col>
                        <blockquote style={{fontSize:"3rem"}}>"It's time to be part of the paradigm change that consumers have asked for. Big Coffee no longer deserves our money. Large corporations need to start recognizing that the people want products that are source sustainably and there is no other option. We care for farmers. We have respect for the environment. And most importantly, we are working towards a better future." </blockquote>
                        <p><em>-Rich Robertson</em></p>

                        </Col>
                    </Row>

                    <br/>
                    <br/>
                    <br/>

                    <Row className="givingBackRow">
                        <Col sm={6}>
                            <img src="imgs/rainforest.jpg" alt="placeholder" />
                        </Col>
                        <Col sm={6}>
                            <h2>Carbon Neutral</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quidem eius eveniet aspernatur, voluptatem earum magnam sed aut omnis deleniti vitae nisi explicabo ut ipsa cum dignissimos veniam facere porro? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus a obcaecati aliquid? </p>
                        </Col>
                    </Row>


                    <Row className="givingBackRow">
                        <Col sm={6}>
                            <h2>Clean Energy</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quidem eius eveniet aspernatur, voluptatem earum magnam sed aut omnis deleniti vitae nisi explicabo ut ipsa cum dignissimos veniam facere porro? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus a obcaecati aliquid? </p>
                        </Col>
                        <Col sm={6}>
                            <img src="imgs/wind-turbines.jpg" alt="placeholder" />

                        </Col>
                    </Row>
                </SmallerContainer>

                <br />
                <br />
            </Container>

            <Container fluid >
                <Row id="givingBackBottomRow">
                    <Col className="givingBackBottomColumn">
                        <h2>Join our movement</h2>
                    </Col>
                    <Col className="givingBackBottomColumn">
                        <BigButton>Join us</BigButton>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default GivingBack;