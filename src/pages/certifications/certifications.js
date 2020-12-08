import React, {useEffect} from "react";

import { Container, Row, Col } from "react-bootstrap";
import CoffeeBanner from "../../components/CoffeeBanner/CoffeeBanner"

const styles = {
    background: {
        backgroundColor: "lightgray"
    }
}


function Certifications() {


    
    useEffect(() => {
        document.title = "Certications | Town Coffee Company"
    }, []);

    return (
        <>
            <CoffeeBanner/>

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
                        <img src={process.env.PUBLIC_URL+"/imgs/rainforest_alliance.PNG"}/>
                    </Col>
                    <Col style={styles.background}>
                        <p>Rainforest Alliance</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Organic</p>
                        <img src={process.env.PUBLIC_URL+"/imgs/certified_organic.jpg"}/>
                    </Col>
                    <Col>
                        <p>Kosher</p>
                        <img src={process.env.PUBLIC_URL+"/imgs/kosher.jpeg"}/>
                    </Col>
                    <Col>
                        <p>Fair Wages</p>
                        <img src={process.env.PUBLIC_URL+"/imgs/fair-pay.jpg"}/>
                    </Col>
                    <Col>
                        <p>Smithsonian Institute - Certified Bird Friendly</p>
                        <img src={process.env.PUBLIC_URL+"/imgs/certified_bird_friendly.jpg"}/>
                    </Col>
                </Row>
                <br/>
                <br/>
                <br/>
            </Container>

        </>
    )
}

export default Certifications;
