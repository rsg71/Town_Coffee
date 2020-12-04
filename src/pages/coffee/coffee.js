import React from "react";
import { Container, Row, Col, CardDeck, Card, Button } from "react-bootstrap";
import CardGroup from "../../components/CardGroup/CardGroup"
import CoffeeBanner from "../../components/CoffeeBanner/CoffeeBanner"



const styles = {
    buttonStyle: {
        position: "absolute",
        textAlign: "center"
    }
}

function Coffee() {
    return (
        <>
           <CoffeeBanner/>

            <Container>
                <br />

                <Row>
                    <Col>
                      <h5>Home &gt; Coffee</h5>
                    </Col>
                </Row>
                <br />

                <Row>
                    <Col>
                        <CardGroup/>
                            
                       
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