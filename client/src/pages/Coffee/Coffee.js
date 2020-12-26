import React, { useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardGroup from "../../components/CardGroup/CardGroup"
import CoffeeBanner from "../../components/CoffeeBanner/CoffeeBanner"
import "./Coffee.css"


// const styles = {
//     buttonStyle: {
//         
//         textAlign: "center"
//     }
// }

function Coffee() {



    useEffect(() => {
        document.title = "Coffee | Town Coffee Company"
    }, []);


    return (
        <>
            <CoffeeBanner />

            <Container>
                <br />
                {/* <Breadcrumb style={{ width: "fit-content" }} class="breadcrumbC">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Coffee</Breadcrumb.Item>
                </Breadcrumb> */}

                <Row>
                    <Col>
                    <span><Link className="breadcrumbLink" to="/">Home </Link><i className="fas fa-angle-right"></i> <span style={{fontWeight: "bold"}}> Coffee</span>
                     
                     </span>
                    </Col>
                </Row>

                <br />

                <Row>
                    <Col>
                        <CardGroup />
                    </Col>
                </Row>

                <br />
                <br />
                <br />
                <br />
            </Container>
        </>
    )
}

export default Coffee;