import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CoffeeBanner from "../../components/CoffeeBanner/CoffeeBanner"


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
    blue: {
        backgroundColor: "#9fc4e7"
    },
    three: {
        backgroundColor: "#c2ddb6",
        color:"green",
        textAlign: "center",
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
                <br/>
                <Row>
                    <Col>
                    <span><Link className="breadcrumbLink" to="/">Home </Link><i className="fas fa-angle-right"></i> <span style={{fontWeight: "bold"}}> About Us</span>
                     </span>
                    </Col>
                </Row>
                <br />
                <h1 style={styles.h1}>About Us</h1>
                <br />

                <Row>
                    <Col style={styles.backgroundStyleLight}>
                        <p>The Covid virus changed many things. Beginning in March 2020 we were in a mandatory quarantine. Our local coffee shops closed for over 8 weeks. Small businesses everywhere struggled. Communities rallied to support these businesses, especially the hard hit food and restaurant industry. And from this a new business was born.</p>
                    </Col>
                </Row>
                <br />
                <br />

                <Row>
                    <Col sm={6} style={styles.backgroundStyleLight}>
                        <h2> Town Coffee</h2>

                        <p> We are Town Coffee Company. A true small business sourcing the best coffee it could find and delivering that to doorsteps. Customers are the same people that changed their habits from big businesses to small business. To help people stay open, help people stay employed. Under much closer review now is how does a company behave. How do they treat their shareholders - everyone in the supply chain, their employees and their customers looking deeper and committing their purchasing to the gropus that behave ethically and responsibly. </p>
                    </Col>
                    <Col sm={6} style={styles.alignCenter}>
                        <img src="/imgs/logo.png" alt="coffee cup" style={styles.townCoffeeLogo}></img>
                    </Col>
                </Row>
                <br />
                <br />

                <Row>
                    <Col style={styles.blue}>
                        <h2>  Align With Us </h2>

                        <p> We focus on sourcing, selling, and delivering great coffee. On our partners growing the coffee by buying at and above prices that provide fair and livable wages. The environment by doing no harm but also beyond that. Regenerative efforts to restore the land. Product packaging, eliminating the use of plastic and reducing waste. </p>

                      


                    </Col>

                </Row>
                <br/>
                <Row style={styles.three}>
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

                <Row>
                    <Col sm={6} style={styles.center}>
                        <img src="/imgs/b-corp-logo.png" alt="b corp logo"></img>
                    </Col>
                    <Col sm={6} style={styles.backgroundStyleLight}>
                        <h2>  B Corporation Pending </h2>

                        <p>A startup does not often begin by committing to be a Certified B Corporation. We did. We believe in and are aligned with the values and principles of a B Corp and are willing to make that pledge publicly. And transparently. Every decision made will consider the impacts on our stakeholders. I have yet to see Big Coffee work to this extent to be a part of the paradigm change that consumers have asked for.</p>

                        <Button>More about B Corps</Button>
                    </Col>
                </Row>
                <br />
                <br />

                <Row>
                    <Col sm={12} style={styles.backgroundStyleLight}>
                        <h2> Limited Quantities </h2>

                        <p>As a new small business the decisions we make early </p>
                    </Col>
                </Row>
                <br/>
                <br/>
                <br/>
                <Row>
                    <Col>
                        <h2>A Special Note</h2>
                        <p>As a new small business the decisions we make early on are critical. We will control our growth to keeep providing the best coffee. Quantities from our farmers are small and we frequently sell out. We receive coffee approximately every 21 days. Roasted and shipped to us fresh. Available coffee goes to <a href="/subscriptions">subscription</a> customers first. Consider that to ensure consistent delivery.</p>

                        <p>We announce new limited releases and other news through email. Join our email list and follow us on social media.</p>

                        <p>Thank you for supporting a small business that is committed to our workers, community, environment and customers striving to improve our... </p>
                    </Col>
                </Row>


            </Container>

            <br />
            <br />
            <br />

        </>
    )
}

export default AboutUs;