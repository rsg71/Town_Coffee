import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CoffeeBanner from "../../components/CoffeeBanner/CoffeeBanner";
import SubscriptionFAQ from "../../components/SubscriptionFAQ/SubscriptionFAQ";
import "./Subscriptions.css"


const styles = {
    margin: {
        marginBottom: "5rem"
    },
    column: {
        backgroundColor: "#1e3932",
        color: "white",
        padding: "20px"
    },
    h1: {
        textAlign: "center"
    }
}


function Subscriptions() {

    useEffect(() => {
        document.title = "Subscriptions | Town Coffee Company"
    }, []);

    return (
        <>
            <CoffeeBanner />

            <Container style={styles.margin}>
                <br />
                <Row>
                    <Col>
                        <span><Link className="breadcrumbLink" to="/">Home </Link><i className="fas fa-angle-right"></i> <span style={{ fontWeight: "bold" }}> Subscriptions</span>
                        </span>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <br />
                        <h1 style={styles.h1}>Subscriptions</h1>
                    </Col>
                </Row>






                <Row>
                    <Col>
                        <h2 className="howItWorks">Here's how it works:</h2>
                    </Col>
                </Row>



                <Row className="subscriptionsStepsRow">
                    <Col>
                        <p>Step 1</p>
                        <h3>Choose your beans</h3>
                        <p>Select a single bean or a mix of several blends</p>

                    </Col>

                    <Col>
                        <p>Step 2</p>
                        <h3>Choose  amount</h3>
                        <p>Minimum of 2 lbs. per month any choice of coffee. 10% discount on the retail price plus shipping</p>
                    </Col>

                    <Col>
                        <p>Step 3</p>
                        <h3>We ship your beans</h3>
                        <p>Open up the bags and enjoy. Subscriptions can be paused or cancelled at any time</p>
                    </Col>


                </Row>

            </Container>


            <Container fluid>
                <Row className="getStartedRow">
                    <Col className="getStartedCol">
                        <h4>Sound good? </h4>
                        <p>Click the button to set up your subscriptions.<br/> Gift subscriptions are also available</p>
                    </Col>

                    <Col className="getStartedCol">
                    <Link to="/subscriptions/subscription-form"><Button>Subscribe here</Button></Link>
                    <div id="infoPlusFAQ"></div>
                    </Col>
                    
                </Row>
            </Container>

                

            <Container style={styles.margin}>


                <Row>
                    <Col style={styles.column}>
                    

                        <p>TCC offers a once per month coffee subscription to customers. Minimum of 2 lbs. per month any choice of coffee. 10% discount on the retail price plus shipping.</p>

                        <p>SC will get first opportunity at new coffees including very limited releases. Periodically, samples of new coffees and blends will be sent as we do our research and development.</p>

                        <p>Subscriptions may be cancelled at any time at no cost.</p>

                    </Col>
                </Row>

                <br />
                <br />
                <br />


                <Row>
                    <Col>
                        <h2>Subscription FAQ:</h2>
                        <br />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <SubscriptionFAQ />
                    </Col>
                </Row>

            </Container>

            <br/>
            <br/>
            <br/>
        </>
    )
}


export default Subscriptions;