import React, {useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoffeeBanner from "../../components/Coffeebanner/Coffeebanner"
import Subscription_FAQ from "../../components/SubscriptionFAQ/SubscriptionFAQ"

const styles = {
    margin: {
        marginBottom: "15rem"
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
            <CoffeeBanner/>

            <Container style={styles.margin}>
            <Row>
                <Col>
                <br/>
                    <h1 style={styles.h1}>Subscriptions</h1>
                <br/>
                </Col>
            </Row>
            <Row>
                <Col style={styles.column}>

                <p>TCC offers a once per month coffee subscription to customers. Minimum of 2 lbs. per month any choice of coffee. 10% discount on the retail price plus shipping.</p>

                <p>SC will get first opportunity at new coffees including very limited releases. Periodically, samples of new coffees and blends will be sent as we do our research and development.</p>

                <p>Subscriptions may be cancelled at any time at no cost.</p>
                     
                </Col>
            </Row>
                
            <br/>
            <br/>

            <Row>
                <Col>
                    <h2>Subscription FAQ:</h2>
                    <br/>
                </Col>
            </Row>

            <Row>
                <Col>
                <Subscription_FAQ/>
                </Col>
            </Row>

            </Container>
        </>
    )
}

export default Subscriptions;