import React from "react";
import { Container, Row, Col } from "react-bootstrap";



const styles = {
    backgroundStyleLight: {
        backgroundColor: "whitesmoke"
    },
    backgroundStyleDark: {
        backgroundColor: "grey"
    },
    center: {
        textAlign: "center",
        // objectFit:"cover",
        // objectPosition: "top left",
        height: "200"
    }
}


function aboutUs() {
    return (
        <>
            <img src="/imgs/coffee_white.jpg" className="coffeeJumbotron" alt="coffee background"/>

            <Container>
                <h1>About Us</h1>
                <br/>
                <br/>

                <Row>
                    <Col style={styles.backgroundStyleLight}>
                        <p>The Covid virus changed many things. Beginning in March 2020 we were in a mandatory quarantine. Our local coffee shops closed for over 8 weeks. Small businesses everywhere struggled. Communities rallied to support these businesses, especially the hard hit food and restaurant industry. And from this a new business was born.</p>
                    </Col>
                </Row>
                <br/>
                <br/>

                <Row>
                    <Col style={styles.backgroundStyleLight}>
                        <h2>---------- Town Coffee ----------</h2>

                        <p> We are Town Coffee Company. A true small business sourcing the best coffee it could find and delivering that to doorsteps. Customers are the same people that changed their habits from big businesses to small business. To help people stay open, help people stay employed. Under much closer review now is how does a company behave. How do they treat their shareholders - everyone in the supply chain, their employees and their customers looking deeper and committing their purchasing to the gropus that behave ethically and responsibly. </p>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            <br/>
            <br/>

                <Row>
                    <Col style={styles.backgroundStyleLight}>
                        <h2> ---------- Align With Us ----------</h2>

                        <p> We focus on sourcing, selling,  and delivering great coffe. ON our parteners growing the coffee by buying at and above prices that provide foair and livable wages the environment by doing no harm but also beyond that. Regenerative efforts to restore the land. Product packaging, eliminating the use of plastic and reducing waste. </p>
                    </Col>
                </Row>
                <br/>
                <br/>

                <Row>
                    <Col style={styles.center}>
                    <img src="/imgs/b-corp-logo.png" alt="b corp logo"></img>
                    </Col>
                    <Col style={styles.backgroundStyleLight}>
                        <h2> ------- B Corporation Pending -------</h2>

                        <p>A startup does not often begin by committing to be a Certified B Corporation. We did. We believe in and are aligned with the values and principles of a B Corp and are willing to make that pledge publicly. And transparently. Every decision made will consider the impacts on our stakeholders. I have yet to see Big Coffee work to this extent to be a part of the paradigm change that consumers have asked for.</p>


                    </Col>
                </Row>
                <br/>
                <br/>

                <Row>
                    <Col style={styles.backgroundStyleLight}>
                        <h2> ---------- Limited Quantities ----------</h2>

                        <p>As a new small business the decisions we make early </p>

                    </Col>
                </Row>



            </Container>

            <br/>
            <br/>
            <br/>

        </>
    )
}

export default aboutUs;