import React, {useEffect} from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
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

            <br/>
            

            <Container>
                <br/>
                <Row>
                    <Col>
                    <span><Link className="breadcrumbLink" to="/">Home </Link><i className="fas fa-angle-right"></i> <span style={{fontWeight: "bold"}}> Certifications</span>
                     </span>
                    </Col>
                </Row>
                
                <br/>
                <Row>
                    <Col>
                        <h1>Certifications</h1>
                    </Col>
                </Row>
                <br/>

                <Row>
                    <Col>
                        <img src={process.env.PUBLIC_URL+"/imgs/rainforest_alliance.PNG"} alt="rainforest alliance"/>
                    </Col>
                    <Col style={styles.background}>
                        <p>Rainforest Alliance</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Organic</p>
                        <img src={process.env.PUBLIC_URL+"/imgs/certified_organic.jpg"} alt="certified organic"/>
                    </Col>
                    <Col>
                        <p>Kosher</p>
                        <img src={process.env.PUBLIC_URL+"/imgs/kosher.jpeg"} alt="kosher"/>
                    </Col>
                    <Col>
                        <p>Fair Wages</p>
                        <img src={process.env.PUBLIC_URL+"/imgs/fair-pay.jpg"} alt="fair pay"/>
                    </Col>
                    <Col>
                        <p>Smithsonian Institute - Certified Bird Friendly</p>
                        <img src={process.env.PUBLIC_URL+"/imgs/certified_bird_friendly.jpg"} alt="bird friendly"/>
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
