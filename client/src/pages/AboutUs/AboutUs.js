import React, { useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import CoffeeBanner from "../../components/CoffeeBanner/CoffeeBanner"
import HomepageBanner from "../../components/HomepageBanner/HomepageBanner";
import SmallerContainer from "../../components/SmallerContainer/SmallerContainer";
import "./AboutUs.css"

const styles = {
    backgroundStyleLight: {
        backgroundColor: "whitesmoke",
        padding: 20
    },
    center: {
        textAlign: "center",
        objectFit: "cover",
        objectPosition: "top left",
        height: "200"
    },
    townCoffeeLogo: {
        height: "300px",
        maxWidth: "400px"
    },
    alignCenter: {
        textAlign: "center"
    },
    h1: {
        textAlign: "center"
    },


    paragraph: {
        fontSize: "large"
    }


}


function AboutUs() {

    useEffect(() => {
        document.title = "About Us | Town Coffee Company"
    }, []);





    return (
        <>
            <CoffeeBanner />

            <Container>
                <br />
                <Row >
                    <Col md={8}>
                        <span><Link className="breadcrumbLink" to="/">Home </Link><i className="fas fa-angle-right"></i> <span style={{ fontWeight: "bold" }}> About Us</span>
                        </span>
                    </Col>
                </Row>
                <br />


            </Container>

            <SmallerContainer>
                <h1 style={styles.h1}>About Us</h1>
                <br />

                <Row>
                    <Col >
                        <section style={{ fontSize: "larger" }}>
                            <p className="paragraph">The Covid virus changed many things. Beginning in March 2020 we were in a mandatory quarantine. Our local coffee shops closed for over 8 weeks. Small businesses everywhere struggled. Communities rallied to support these businesses, especially the hard hit food and restaurant industry. And from this a new business was born.</p>
                        </section>
                    </Col>
                </Row>
                <br />
                <br />
                <br />

                <Row>
                    <Col sm={6} className="backgroundStyleLight">
                        <h2> <strong>Town Coffee</strong></h2>

                        <p className="paragraph"> We are Town Coffee Company. A true small business sourcing the best coffee it could find and delivering that to doorsteps. Customers are the same people that changed their habits from big businesses to small business. To help people stay open, help people stay employed. Under much closer review now is how does a company behave. How do they treat their shareholders - everyone in the supply chain, their employees and their customers looking deeper and committing their purchasing to the groups that behave ethically and responsibly. </p>
                    </Col>
                    <Col sm={6} >
                        <Row style={{display: "flex", alignItems: "center"}}>
                            <Col>
                                <img id="onePercentImage" src="/imgs/onepercent_ftp_logo.jpg" alt="b corp logo"></img>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <img src="/imgs/b-certified-description.png" id="bCertifiedDescription" alt="b corp logo"></img>
                            </Col>
                        </Row>

                    </Col>


                </Row>
                <br />
                <br />
                <br />
                <br />
            </SmallerContainer>



            <Container fluid>
                <Row className="bigRow">
                    <Col className="alignWithUs">
                        <section>
                            <h2>  Align With Us </h2>

                            <p className="paragraph"> We focus on sourcing, selling, and <span className="largerFont"><strong>delivering great coffee</strong></span>. On our partners growing the coffee by buying at and above prices that provide <span className="largerFont"><strong>fair and livable wages</strong></span>. The environment by doing no harm but also beyond that. Regenerative efforts to <span className="largerFont"><strong>restore the land</strong></span>. Product packaging, eliminating the use of plastic and reducing waste. </p>
                            <br />


                        </section>



                    </Col>

                </Row>
            </Container>

            <SmallerContainer>

                <br />

                <Row>
                    <Col className="backgroundStyleLight">
                        <h2> <strong> B Corporation Pending</strong> </h2>

                        <p className="paragraph">A startup does not often begin by committing to be a Certified B Corporation. We did. We believe in and are aligned with the values and principles of a B Corp and are willing to make that pledge publicly. And transparently. Every decision made will consider the impacts on our stakeholders. I have yet to see Big Coffee work to this extent to be a part of the paradigm change that consumers have asked for.</p>

                        <Button className="darkGreenButton">More about B Corps</Button>
                    </Col>

                    <Col style={styles.center}>
                        <img src="/imgs/b-corp-logo.png" alt="b corp logo"></img>
                    </Col>
                </Row>

                <Row id="aboutUsThreeItems">
                    <Col sm={4}>
                        <h3>Great Coffee <i className="far fa-check-circle"></i></h3>
                    </Col>
                    <Col sm={4}>
                        <h3>Fair Wages <i className="fas fa-hand-holding-usd"></i></h3>
                    </Col>
                    <Col sm={4}>
                        <h3>Earth friendly <i className="fas fa-globe-americas"></i></h3>
                    </Col>
                </Row>
                <br />
                <br />

            </SmallerContainer>


            <Container fluid>
                <Row className="bigRow">
                    <Col className="alignWithUs">
                        <section>
                            <h2>  Badly Behaved Companies </h2>

                            <p className="paragraph"> It's time to put Big Coffee on notice. These companies have been squeezing profits out of farmers and into their pockets for decades. <span className="largerFont"><strong>They do not deserve our money</strong></span>. Town Coffee proudly stands against everything that Big Coffee represents. </p>

                        </section>



                    </Col>

                </Row>
            </Container>
            <br />
            <br />


            <Container>
                <Row>
                    <Col className="giantBackgroundImage">
                        <HomepageBanner></HomepageBanner>
                    </Col>
                </Row>
            </Container>
            <br />
            <br />

            <SmallerContainer>

                <Row>
                    <Col>
                        <section>

                            <h2>A Special Note</h2>
                            <p className="paragraph">As a new small business the decisions we make early on are critical. We will control our growth to keep providing the best coffee. Quantities from our farmers are small and we frequently sell out. We receive coffee approximately every 21 days. Roasted and shipped to us fresh. Available coffee goes to <a href="/subscriptions">subscription</a> customers first. Consider that to ensure consistent delivery.</p>

                            <p className="paragraph">We announce new limited releases and other news through email. Join our email list and follow us on social media.</p>

                            <p className="paragraph">Thank you for supporting a small business that is committed to our workers, community, environment and customers. Striving to improve our company's entire social and environmental platformance.</p>
                        </section>

                    </Col>
                </Row>


            </SmallerContainer>



            <br />
            <br />
            <br />

        </>
    )
}

export default AboutUs;